import React from 'react';
import ReactDOM from 'react-dom/client';
import CVGeneratorApp from './CVGeneratorApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <CVGeneratorApp />
    </React.Fragment>
  </React.StrictMode>
);
