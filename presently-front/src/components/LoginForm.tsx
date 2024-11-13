import React, { useState } from 'react';
import axios from 'axios';

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
    <div className='mt-5' style={{ width: '18rem', margin: '0 auto', textAlign: 'left' }}>
      <h2 style={{ textAlign: 'center' }}>Вхід</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Увійти</button>
      </form>
    </div>
  );
};

export default LoginForm;
