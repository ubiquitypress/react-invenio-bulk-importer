import React from 'react';
import ReactDOM from 'react-dom';
import { BulkImporter } from './components';
import 'semantic-ui-css/semantic.min.css';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Development Environment</h1>
      <BulkImporter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
