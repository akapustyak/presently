import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';
import axios from 'axios';

interface ProfileProps {
  username: string;
  followers: string;
  following: string;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  margin: 2.5rem 0;
  background-color: #dcb39c;
  width: 100%;
  font-size: 2em;
`;

const UserName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  font-size: 0.9em;
`;

const StatItem = styled.div`
  text-align: center;
  margin-right: 1.5rem;

  &:last-child {
    margin-right: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100%;
`;

const StyledButton = styled.button`
  background-color: #a67a60;
  border: none;
  color: white;
  font-size: 0.75em;
  padding: 0.5rem 1rem;
  width: 45%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #8e634d;
  }
`;

const LinkText = styled.span`
  color: white;
  text-decoration: none;
`;

const ProfileCard: React.FC<ProfileProps> = ({ username, followers, following }) => {
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/auth/users/me/', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurrentUsername(data.username);
        } else {
          console.error('Failed to fetch current user data');
        }
      } catch (error) {
        console.error('Error fetching current user data:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/homepage', { replace: true });
  };

  const handleFollow = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/users/?search=${username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.data && response.data.length > 0) {
        const userId = response.data[0].id;

        const followResponse = await axios.post(
          `http://127.0.0.1:8000/users/${userId}/follow/`,
          { username: '' },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        console.log('Follow response:', followResponse.data);

        if (followResponse.status === 200) {
          console.log('Підписка успішна');
        } else {
          console.error('Не вдалося підписатися');
        }
      } else {
        console.error('Користувач не знайдений');
      }
    } catch (error) {
      console.error('Помилка при підписці:', error);
    }
  };

  return (
    <CardContainer>
      <FaUserCircle color="white" size={250} />
      <div>
        <UserName>@{username}</UserName>
        <StatsContainer>
          <StatItem>
            <p>{followers}</p>
            <small>Слідкувачі</small>
          </StatItem>
          <StatItem>
            <p>{following}</p>
            <small>Слідкування</small>
          </StatItem>
        </StatsContainer>
        {currentUsername === username ? (
          <ButtonContainer>
            <StyledButton>
             <Link style={{textDecoration: "none"}} to={'/CreatingPage'}>
                <LinkText>Додати</LinkText>
              </Link>
            </StyledButton>
            <StyledButton onClick={handleLogout}>Вийти</StyledButton>
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <StyledButton onClick={handleFollow}>Слідкувати</StyledButton>
          </ButtonContainer>
        )}
      </div>
    </CardContainer>
  );
};

export default ProfileCard;
