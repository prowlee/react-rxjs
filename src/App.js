import React from 'react';
import Provider from './provider';
import Consumer from './consumer';
import './App.css';

const App = () => (
  <div className="App">
    <Provider />
    <Consumer />
  </div>
)

export default App;
