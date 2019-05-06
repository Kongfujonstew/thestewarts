import React from 'react';
import ReactDOM from 'react-dom';
import Admin from '../Admin';

ReactDOM.hydrate(<Admin name={window.__INITIAL__DATA__.name} />, document.getElementById('root'));
