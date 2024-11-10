import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled.div`
  padding: 2rem;
  width: 28rem;
  background-color: #f2d1bd;
  border-radius: 1.25rem;
  box-shadow: none;
`;

const ImagePlaceholder = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  background-color: #e9ecef;
  flex-shrink: 0;
`;

const FlexGrowContainer = styled.div`
  flex-grow: 1;
  margin-left: 1rem;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1.25rem;
  width: 100%;
  margin-bottom: 0.5rem;
`;

const StyledTextArea = styled.textarea`
  background-color: #b87c61;
  border: none;
  color: white;
  height: 7rem;
  border-radius: 1rem;
  font-size: 1.125rem;
  padding: 0.75rem;
  resize: none;
  width: 100%;
`;

const InputGroup = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const StyledLinkInput = styled.input`
  border-radius: 1rem 0 0 1rem;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  flex: 1;
`;

const StyledButtonText = styled.span`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0 1rem 1rem 0;
  background-color: #b87c61;
  color: white;
`;

const StyledButton = styled.button`
  background-color: #b87c61;
  border: none;
  width: 100%;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

const AddingCard: React.FC = () => {
  const [wishName, setWishName] = useState('');
  const [wishDescription, setWishDescription] = useState('');
  const [wishLink, setWishLink] = useState('');

  const handleAddWish = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/wishes/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          name: wishName,
          description: wishDescription,
          link: wishLink,
          image: null,
        }),
      });

      if (response.ok) {
        setWishName('');
        setWishDescription('');
        setWishLink('');
        alert('Бажання додано успішно!');
      } else {
        console.error('Failed to add wish');
      }
    } catch (error) {
      console.error('Error adding wish:', error);
    }
  };

  return (
    <Container>
      <StyledCard>
        <div style={{ display: 'flex' }}>
          <ImagePlaceholder />
          <FlexGrowContainer>
            <StyledInput
              type="text"
              placeholder="Введіть назву бажання"
              value={wishName}
              onChange={(e) => setWishName(e.target.value)}
            />
            <StyledTextArea
              placeholder="Введіть опис..."
              maxLength={200}
              rows={3}
              value={wishDescription}
              onChange={(e) => setWishDescription(e.target.value)}
            />
            <InputGroup>
              <StyledLinkInput
                type="url"
                placeholder="Введіть посилання..."
                value={wishLink}
                onChange={(e) => setWishLink(e.target.value)}
              />
              <StyledButtonText>
                <i className="bi bi-link" style={{ fontSize: '1rem' }}></i>
              </StyledButtonText>
            </InputGroup>
            <StyledButton onClick={handleAddWish}>Підтвердити</StyledButton>
          </FlexGrowContainer>
        </div>
      </StyledCard>
    </Container>
  );
};

export default AddingCard;
