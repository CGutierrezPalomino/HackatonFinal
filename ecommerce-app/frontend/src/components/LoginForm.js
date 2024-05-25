import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { username, password });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Nombre de Usuario:</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
