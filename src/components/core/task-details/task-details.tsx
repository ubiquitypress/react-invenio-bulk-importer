import { StatusLabel } from '@/components/ui/status-label';
import { getImporterTask } from '@/services';
import type { InvenioTask } from '@/types';
import { capitalizeFirstLetter } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Header, Label } from 'semantic-ui-react';
import { Search } from '../search';
import { TaskRecordItem } from './task-record-item';

interface TaskDetailsProps {
  taskId: string;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ taskId }) => {
  const [task, setTask] = useState<InvenioTask | null>(null);

  const fetchTaskDetails = useCallback(async () => {
    try {
      const taskDetails = await getImporterTask(taskId);
      setTask(taskDetails);
    } catch (error) {
      console.error('Error fetching task details:', error);
    }
  }, [taskId]);

  useEffect(() => {
    if (taskId) {
      fetchTaskDetails();
    }
  }, [taskId, fetchTaskDetails]);

  if (!task) {
    return <div>Loading task details...</div>;
  }

  return (
    <div
      style={{
        paddingBlockStart: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Header>
              <Header as='h2'>{task.title}</Header>
              {task.description && (
                <Header.Subheader>{task.description}</Header.Subheader>
              )}
            </Header>
          </Grid.Column>
          <Grid.Column width={4} textAlign='right'>
            {task.status && (
              <StatusLabel size='large' status={task.status}>
                {capitalizeFirstLetter(task.status)}
              </StatusLabel>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Label.Group>
        {task.records_status?.total_records && (
          <Label>
            {`${task.records_status.validated ?? 0}/${task.records_status.total_records} records validated`}
          </Label>
        )}

        {task.records_status?.total_records && (
          <Label>
            {`${task.records_status.created ?? 0}/${task.records_status.total_records} records created`}
          </Label>
        )}

        {task.records_status?.total_records && (
          <Label>
            {`${task.records_status.success ?? 0}/${task.records_status.total_records} records imported`}
          </Label>
        )}
      </Label.Group>

      <div>
        <Header as='h3'>Task Records</Header>
        <Search
          config={{
            searchApi: {
              axios: {
                url: '/api/importer-records',
                withCredentials: true
              }
            },
            showFacets: false,
            showImportModal: false
          }}
          overriddenComponents={{
            'search.ResultsList.container': ({
              children
            }: {
              children?: React.ReactNode;
            }) => <div style={{ paddingBlock: '1rem' }}>{children}</div>,
            'search.ResultsList.item': TaskRecordItem as any
          }}
        />
      </div>
    </div>
  );
};
