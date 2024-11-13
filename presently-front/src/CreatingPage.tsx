import React from 'react';
import styled from 'styled-components';
import AddingCard from './components/AddingCard';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CreatingPage: React.FC = () => {
    return (
        <CenteredContainer>
            <AddingCard />
        </CenteredContainer>
    );
};

export default CreatingPage;
