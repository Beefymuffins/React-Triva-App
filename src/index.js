/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Firebase from './components/Firebase/Firebase';
import { FirebaseContext } from './components/Firebase/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>
);
// React.StrictMode
