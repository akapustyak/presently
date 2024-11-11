import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import GiftCard from './components/GiftCard';
import Card from './components/InfoCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

function HomePage() {
  return (
    <Container className="App">
      <Logo fontSize='5rem' />
      <GiftCard />
      <Card />
    </Container>
  );
}

export default HomePage;
