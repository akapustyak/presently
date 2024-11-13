import React from 'react';
import styled from 'styled-components';
import { AiOutlineLink, AiOutlineCheck } from 'react-icons/ai';

interface WishCardProps {
  title: string;
  description: string;
  link: string;
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #d7a58e;
  border-radius: 1rem;
  padding: 1.5rem;
  width: 90%;
  max-width: 600px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 2px solid #007aff;
  border-radius: 1rem;
  background-color: #ffffff;
  margin-right: 1rem;
`;

const LinkIconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #a36b5c;
  border-radius: 50%;
  bottom: -10%;
  right: -10%;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  color: #37452e;
  font-size: 1.2em;
  word-wrap: break-word;
  margin: 0;
`;

const Description = styled.p`
  color: #37452e;
  font-size: 0.9em;
  word-wrap: break-word;
  margin: 0.5rem 0 0;
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: #b5002b;
  border-radius: 50%;
  bottom: -7%;
  right: -3%;
`;

const WishCard: React.FC<WishCardProps> = ({ title, description, link }) => {
  return (
    <CardWrapper>
      <CardContainer>
        <ImageWrapper>
          <LinkIconWrapper>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <AiOutlineLink color="white" size={24} />
            </a>
          </LinkIconWrapper>
        </ImageWrapper>

        <TextWrapper>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextWrapper>

        <CheckIconWrapper>
          <AiOutlineCheck color="white" size={30} />
        </CheckIconWrapper>
      </CardContainer>
    </CardWrapper>
  );
};

export default WishCard;
