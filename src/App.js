import React from 'react'
import './App.css';
import { initNotification } from "./Service/firebaseService";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={initNotification}>config Notification</button>
    </div>
  );
}

export default App;
