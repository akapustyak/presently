import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  width: 18rem;
  margin: 5rem auto 0;
  text-align: left;
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  margin-top: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const Message = styled.p<{ color: string }>`
  color: ${(props) => props.color};
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

const LoginLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  & a {
    color: #A60321;
  }
`;

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.includes('@') || !email.includes('.')) {
      setError('Неправильний формат електронної пошти');
      return;
    }

    if (password !== confirmPassword) {
      setError('Паролі не співпадають');
      return;
    }

    if (password.length < 6) {
      setError('Пароль має бути довшим за 6 символів');
      return;
    }

    try {
      await axios.post('http://127.0.0.1:8000/auth/users/', {
        username,
        email,
        password
      });
      
      setSuccess('Реєстрація успішна! Тепер ви можете увійти.');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        const apiError = err.response.data;
        setError(apiError.detail || 'Помилка реєстрації');
      } else {
        setError('Щось пішло не так, спробуйте ще раз.');
      }
    }
  };

  return (
    <FormContainer>
      <Title>Реєстрація</Title>
      <Form onSubmit={handleRegister}>
        <FormGroup>
          <Label>Username:</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormGroup> 
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Пароль:</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Підтвердьте пароль:</Label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>
        {error && <Message color="red">{error}</Message>}
        {success && <Message color="green">{success}</Message>}
        <SubmitButton type="submit">Зареєструватись</SubmitButton>
      </Form>
      <LoginLink>
        Уже є акаунт? <Link to="/login">Увійти</Link>
      </LoginLink>
    </FormContainer>
  );
};

export default RegisterForm;
