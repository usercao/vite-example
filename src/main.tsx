import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:uno.css';

// ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode>{/* <App /> */}</React.StrictMode>);

function run() {
  const container = window.document.getElementById('root')!;
  const root = ReactDOM.createRoot(container);
  root.render(<React.StrictMode>{/* <App /> */}</React.StrictMode>);
}

run();
