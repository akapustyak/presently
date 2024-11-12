import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom/dist';

const FormContainer = styled.div`
  width: 18rem;
  margin: 3rem auto;
  text-align: left;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  background-color: #A67C63;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const LinkContainer = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const LinkText = styled.span`
  color: #A60321;
`;

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', {
        email,
        password
      });
      
      const token = response.data.access;
      localStorage.setItem('token', token);
      window.location.href = '/homepage';
    } catch (err) {
      setError('Неправильний логін або пароль');
    }
  };

  return (
    <FormContainer>
      <Title>Вхід</Title>
      <Form onSubmit={handleLogin}>
        <div>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
          />
        </div>
        <div>
          <Label>Пароль:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
          />
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Увійти</SubmitButton>
      </Form>
      <LinkContainer>
        Вперше на сайті? <Link to="/signup"><LinkText>Реєстрація</LinkText></Link>
      </LinkContainer>
    </FormContainer>
  );
};

export default LoginForm;
