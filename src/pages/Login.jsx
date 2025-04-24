import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import WatermarkLogin from '../components/WaterMarkLogin';
import '../assets/css/Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Backend
  };

  return (
    <div className='main-container'>
        <Header/>
        <div className='content-wrapper'>
          <div className="forgot-container">

            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Inserir email / Número de Aluno</label>
                <input
                    type="text"
                    placeholder="Inserir email ou número de aluno"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Inserir password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>

            <NavLink to="/forgotpassword" className="link">
                Esqueci-me da palavra-passe
            </NavLink>

            <div className='watermark'>
            <WatermarkLogin/>
            </div>
          </div>
        </div>
    </div>

  );
};

export default Login;