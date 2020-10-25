import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const DATA = [
  { id: "todo-0", name: "Mangiare", completed: true },
  { id: "todo-1", name: "Bere", completed: false },
  { id: "todo-2", name: "Dormire", completed: false }
];

ReactDOM.render(
  <App tasks={DATA} />, document.getElementById('root'));