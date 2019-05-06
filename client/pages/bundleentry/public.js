import React from 'react';
import ReactDOM from 'react-dom';
import Public from '../Public';

ReactDOM.hydrate(<Public name={window.__INITIAL__DATA__.name} />, document.getElementById('root'));
