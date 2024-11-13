import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className='mt-5' style={{ width: '18rem', margin: '0 auto', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center' }}>Реєстрація</h2>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div> 
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.3rem' }}>Підтвердьте пароль:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginBottom: '1rem' }}>{success}</p>}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.6rem',
            fontSize: '1rem',
            backgroundColor: '#A67C63',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Зареєструватись
        </button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        Уже є акаунт? <Link to="/login" style={{ color: '#A60321' }}>Увійти</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
