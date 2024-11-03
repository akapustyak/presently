import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Logo fontSize='5rem'/>
    </div>
  );
}

export default App;
