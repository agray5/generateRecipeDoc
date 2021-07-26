import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseConfig } from "config"

firebase.initializeApp({  apiKey: "AIzaSyBV9bxhg3yLS8eWBwsdrnCWzQbLoUUeRd0",
authDomain: "recipetodoc.firebaseapp.com",
projectId: "recipetodoc",
storageBucket: "recipetodoc.appspot.com",
messagingSenderId: "762377507581",
appId: "1:762377507581:web:49a04c054471449bf0e494",
measurementId: "G-0H5RYK49LW"});
var db = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
