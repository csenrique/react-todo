import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; //no se le coloca el .jsx por la configuracion que se agrego em webpack

/* const App = function() {
  return  <h1>Hola React Todo!</h1>
} */

const app = ReactDOM.createRoot(document.getElementById('app'));

app.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);