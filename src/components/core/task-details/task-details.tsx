import { StatusLabel } from '@/components/ui';
import { useImporterTask } from '@/hooks';
import type { InvenioTask } from '@/types';
import { capitalizeFirstLetter } from '@/utils';
import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Loader,
  Message,
  Segment
} from 'semantic-ui-react';
import { ImportStatusCards } from './import-status-cards';
import { TaskDetailsProvider } from './provider';
import { TaskDetailsRecords } from './task-details-records';
import { UploadMetadataModal } from './upload-metadata-modal';

interface TaskDetailsProps {
  taskId: string;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ taskId }) => {
  const [task, setTask] = useState<InvenioTask | null>(null);
  const { getStatus, isGettingStatus, runBulkImport, isBulkImporting, error } =
    useImporterTask(taskId, { onStatusChangeSuccess: setTask });

  useEffect(() => {
    // Fetch task status when component mounts
    getStatus();
  }, [getStatus]);

  // Loading state
  if (isGettingStatus || isBulkImporting) {
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

  return (
    <TaskDetailsProvider taskId={taskId}>
      <Container fluid verticalAlign='top'>
        {/* Task Header Section */}
        <Grid>
          <Grid.Row verticalAlign='top'>
            <Grid.Column width={8} verticalAlign='middle'>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '.5rem'
                }}
              >
                <Icon name='tasks' circular size='big' />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}
                >
                  <Header as='h2'>
                    <Header.Content>{task.title}</Header.Content>
                  </Header>
                  {task.status && (
                    <StatusLabel size='large' status={task.status}>
                      {capitalizeFirstLetter(task.status)}
                    </StatusLabel>
                  )}
                </div>
              </div>
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
                <div>
                  <Button
                    size='tiny'
                    color='blue'
                    icon='refresh'
                    content='Refresh'
                    onClick={() => getStatus()}
                    loading={isGettingStatus}
                  />
                  <UploadMetadataModal />
                  <Button
                    size='tiny'
                    color='green'
                    icon='play'
                    onClick={async () => {
                      await runBulkImport();
                      await getStatus();
                    }}
                    loading={isBulkImporting}
                    content='Run Task'
                  />
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          {/* Description Section - Only show if description exists */}
          {task.description && (
            <Grid.Row>
              <Grid.Column width={16}>
                <Message info icon size='small'>
                  <Icon name='info circle' />
                  <Message.Content>
                    <Message.Header>Notes</Message.Header>
                    {task.description}
                  </Message.Content>
                </Message>
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>

        {/* Statistics Section */}
        {totalRecords > 0 && (
          <Segment basic>
            <ImportStatusCards
              totalRecords={totalRecords}
              validatedRecords={validatedRecords}
              errorRecords={errorRecords}
              successRecords={successRecords}
            />
          </Segment>
        )}
      </Container>
      <TaskDetailsRecords />
    </TaskDetailsProvider>
  );
};
