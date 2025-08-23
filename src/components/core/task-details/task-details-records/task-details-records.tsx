import React, { type ComponentType } from 'react';
import { Header } from 'semantic-ui-react';
import { Search } from '../../search';
import { useTaskDetails } from '../provider';
import { ResultTable } from './result-table';
import { TaskRecordItem } from './task-record-item';

export const TaskDetailsRecords = () => {
  const { taskId } = useTaskDetails();

  const overriddenComponents = {
    'search.SearchBarRow': () => null,
    'search.ResultsList.container': ResultTable as ComponentType<unknown>,
    'search.ResultsList.item': TaskRecordItem as ComponentType<unknown>
  };

  return (
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
          initialQueryState: {
            hiddenParams: [['q', `task.id:${taskId}`]]
          },
          showFacets: true,
          showImportModal: false
        }}
        overriddenComponents={overriddenComponents}
      />
    </div>
  );
};
