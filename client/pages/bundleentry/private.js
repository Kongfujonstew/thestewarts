import React from 'react';
import ReactDOM from 'react-dom';
import Private from '../Private';

ReactDOM.hydrate(<Private name={window.__INITIAL__DATA__.name} />, document.getElementById('root'));
