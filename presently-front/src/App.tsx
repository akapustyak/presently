import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import CreatingPage from './CreatingPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar/>
          <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/creatingpage' element={<CreatingPage />} /> 
            <Route path='/signup' element={<RegisterForm />} />
            <Route
              path="/profilepage"
              element={
                <ProtectedRoute children={<ProfilePage username={null}/>}/>
              }
          />
          <Route path="/profilepage/:username" element={<ProfilePageWrapper />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

function ProfilePageWrapper() {
  const { username } = useParams();
  return <ProfilePage username={username} />;
}

export default App;
