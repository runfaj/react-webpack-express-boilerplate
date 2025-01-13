import React from 'react';

import Component from './Component';
import styles from './App.scss';

const App = () => (
  <>
    <Component />
    <br /><br />
    <span>Test iframe</span>
    <br />
    <iframe
      src="https://localhost:5173/"
      height={1200}
      width={1200}
    ></iframe>
  </>
);

export default App;
