import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RelayEnvironmentProvider } from 'relay-hooks';
import RelayEnvironment from './RelayEnvironment';

ReactDOM.render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={<>Loading...</>}>
      <App />
    </Suspense>
  </RelayEnvironmentProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
