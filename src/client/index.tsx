import React from 'react';
import ReactDom from 'react-dom';
import App from '../app';

ReactDom.render(
  <App initialCount={10} onCountChange={(count) => {
    console.log(count);
  }} />,
  document.getElementById('root'),
);
