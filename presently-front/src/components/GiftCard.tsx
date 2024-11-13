import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 20rem;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  margin-bottom: 1.25rem;
  background-color: #A67C63;
`;

const InnerContainer = styled.div`
  padding: 1rem;
`;

const StyledCard = styled.div`
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledImage = styled.img`
  height: 20rem;
  object-fit: cover;
`;

const GiftCard: React.FC = () => {
  return (
    <Container>
      <Line>
        <InnerContainer>
          <StyledCard>
            <StyledImage src="/gifts.jpg" alt="Gift boxes" />
          </StyledCard>
        </InnerContainer>
      </Line>
    </Container>
  );
};

export default GiftCard;
