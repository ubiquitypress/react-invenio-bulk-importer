import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './theme/index.css';
import { BulkImporter } from './components/core';

const App: React.FC = () => {
  return (
    <BulkImporter.TaskDetails taskId='36664269-7eb9-47b1-ae90-22b041049fb7' />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
