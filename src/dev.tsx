import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './theme/index.css';
import { BulkImporter } from './components/core';

const App: React.FC = () => {
  return <BulkImporter.Search />;
};

ReactDOM.render(<App />, document.getElementById('root'));
