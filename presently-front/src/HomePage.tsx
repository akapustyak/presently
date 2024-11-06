import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import GiftCard from './components/GiftCard';
import Card from './components/InfoCard';

function HomePage() {
  return (
    <div className="App">
      <Logo fontSize='5rem' />
      <GiftCard />
      <Card />
    </div>
  );
}

export default HomePage;
