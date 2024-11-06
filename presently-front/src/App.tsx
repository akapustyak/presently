import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import CreatingPage from './CreatingPage';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <BrowserRouter>
          <Routes>
            <Route path='/profilepage' element={<ProfilePage />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/creatingpage' element={<CreatingPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
