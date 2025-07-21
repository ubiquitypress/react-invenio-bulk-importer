import { StatusLabel } from '@/components/ui';
import { useImporterTask } from '@/hooks';
import { getImporterTask } from '@/services';
import type { InvenioTask } from '@/types';
import { capitalizeFirstLetter } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Loader,
  Message,
  Progress,
  Segment,
  Statistic
} from 'semantic-ui-react';
import { TaskDetailsProvider } from './provider';
import { TaskDetailsRecords } from './task-details-records';
import { UploadMetadataModal } from './upload-metadata-modal';

interface TaskDetailsProps {
  taskId: string;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ taskId }) => {
  const [task, setTask] = useState<InvenioTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { getStatus, isGettingStatus } = useImporterTask(taskId, {
    onStatusChangeSuccess: setTask
  });

  const fetchTaskDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const taskDetails = await getImporterTask(taskId);
      if (!taskDetails) {
        throw new Error('Task not found');
      }
      setTask(taskDetails);
    } catch (error) {
      console.error('Error fetching task details:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to fetch task details'
      );
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  useEffect(() => {
    if (taskId) {
      fetchTaskDetails();
    }
  }, [taskId, fetchTaskDetails]);

  // Loading state
  if (loading || isGettingStatus) {
    return (
      <Segment>
        <Loader content='Loading task details...' />
      </Segment>
    );
  }

  // Error state
  if (error) {
    return (
      <Message negative icon>
        <Icon name='exclamation triangle' />
        <Message.Content>
          <Message.Header>Error Loading Task</Message.Header>
          {error}
        </Message.Content>
      </Message>
    );
  }

  // No task found
  if (!task) {
    return (
      <Message warning icon>
        <Icon name='search' />
        <Message.Content>
          <Message.Header>Task Not Found</Message.Header>
          The requested task could not be found.
        </Message.Content>
      </Message>
    );
  }

  const totalRecords = task.records_status?.total_records || 0;
  const validatedRecords = task.records_status?.validated || 0;
  const successRecords = task.records_status?.success || 0;
  const errorRecords =
    (task.records_status?.['import failed'] || 0) +
    (task.records_status?.['validation failed'] || 0) +
    (task.records_status?.['serializer validation failed'] || 0);

  const validationProgress =
    totalRecords > 0 ? (validatedRecords / totalRecords) * 100 : 0;
  const importProgress =
    totalRecords > 0 ? (successRecords / totalRecords) * 100 : 0;
  const errorsProgress =
    totalRecords > 0 ? (errorRecords / totalRecords) * 100 : 0;

  return (
    <TaskDetailsProvider taskId={taskId}>
      <Segment.Group compact>
        <Segment>
          <Grid>
            <Grid.Row verticalAlign='middle'>
              <Grid.Column width={8} verticalAlign='middle'>
                <Header as='h2'>
                  <Icon name='tasks' />
                  <Header.Content>
                    {task.title}
                    {task.description && (
                      <Header.Subheader>{task.description}</Header.Subheader>
                    )}
                  </Header.Content>
                </Header>
              </Grid.Column>
              <Grid.Column width={8} textAlign='right'>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    gap: '1rem'
                  }}
                >
                  {task.status && (
                    <StatusLabel size='large' status={task.status}>
                      {capitalizeFirstLetter(task.status)}
                    </StatusLabel>
                  )}
                  <Button.Group style={{ marginLeft: '1rem' }} size='tiny'>
                    <Button
                      color='blue'
                      icon='refresh'
                      content='Check Status'
                      onClick={() => getStatus()}
                      loading={loading}
                    />
                    <UploadMetadataModal />
                    <Button
                      disabled
                      color='green'
                      icon='play'
                      content='Run Task'
                    />
                  </Button.Group>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        {/* Statistics Section */}
        {totalRecords > 0 && (
          <Segment>
            <Header as='h4'>
              <Icon name='chart bar' />
              Progress Overview
            </Header>

            <Statistic.Group widths='three'>
              <Statistic color='blue'>
                <Statistic.Value>{validatedRecords}</Statistic.Value>
                <Statistic.Label>Validated</Statistic.Label>
              </Statistic>

              <Statistic color='red'>
                <Statistic.Value>{errorRecords}</Statistic.Value>
                <Statistic.Label>With Errors</Statistic.Label>
              </Statistic>

              <Statistic color='green'>
                <Statistic.Value>{successRecords}</Statistic.Value>
                <Statistic.Label>Imported</Statistic.Label>
              </Statistic>
            </Statistic.Group>

            <Divider />

            {/* Progress Bars */}
            <Grid columns={3} divided>
              <Grid.Column>
                <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                  <strong>Validation Progress</strong>
                </div>
                <Progress percent={validationProgress} color='blue'>
                  {validatedRecords} / {totalRecords}
                </Progress>
              </Grid.Column>

              <Grid.Column>
                <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                  <strong>Error Records</strong>
                </div>
                <Progress percent={errorsProgress} color='red'>
                  {errorRecords} / {totalRecords}
                </Progress>
              </Grid.Column>

              <Grid.Column>
                <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                  <strong>Import Progress</strong>
                </div>
                <Progress percent={importProgress} color='green'>
                  {successRecords} / {totalRecords}
                </Progress>
              </Grid.Column>
            </Grid>
          </Segment>
        )}
      </Segment.Group>
      <TaskDetailsRecords />
    </TaskDetailsProvider>
  );
};
