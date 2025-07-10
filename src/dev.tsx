import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BulkImporter } from './components/core';

const App: React.FC = () => {
  return <BulkImporter />;
};

ReactDOM.render(<App />, document.getElementById('root'));
