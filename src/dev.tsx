import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './theme/index.css';
import { BulkImporter } from './components/core';

// Regex pattern for extracting task ID from URL path
const TASK_ID_PATTERN = /\/administration\/importer-tasks\/(.+)$/;

const getTaskIdFromPath = (): string | null => {
  const path = window.location.pathname;
  const match = path.match(TASK_ID_PATTERN);
  return match ? match[1] : null;
};

const App: React.FC = () => {
  const taskId = getTaskIdFromPath();

  return (
    <div>
      <BulkImporter.Search />
      {taskId && <BulkImporter.TaskDetails taskId={taskId} />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
