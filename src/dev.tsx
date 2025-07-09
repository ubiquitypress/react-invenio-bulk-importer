import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Header } from 'semantic-ui-react';
import { BulkImporter } from './lib/components/core';

const App: React.FC = () => {
  return (
    <div>
      <BulkImporter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
