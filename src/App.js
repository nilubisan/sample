import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import logo from './logo.svg';
import './App.css';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDBq1GMw1aSDmE68xasrMTeCP5M0S_Ye2A",
    authDomain: "nilubisan-app.firebaseapp.com",
    projectId: "nilubisan-app",
    storageBucket: "nilubisan-app.appspot.com",
    messagingSenderId: "1039610879719",
    appId: "1:1039610879719:web:5a818f79dd203fea844c42",
    measurementId: "G-67CVXX5Y7K"
  };

  const app = initializeApp(firebaseConfig);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
