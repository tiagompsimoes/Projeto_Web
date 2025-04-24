import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import WatermarkLogin from '../components/WaterMarkLogin';
import '../assets/css/ForgotPassword.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleRecover = (e) => {
    e.preventDefault();
    console.log("Recuperar palavra passe para:", email);
    // Backend
  };

  return (
    <div className='main-container'>
        <Header/>
        <div className='content-wrapper'>
          <div className="forgot-container">

            <h2>Esqueci-me da palavra passe</h2>
            <form onSubmit={handleRecover}>
                <label htmlFor="email">Inserir email / Número de Aluno</label>
                <input
                    type="text"
                    placeholder="Inserir email ou número de aluno"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Recuperar</button>
            </form>

            <NavLink to="/login" className="link">
                Login
            </NavLink>

            <div className='watermark'>
            <WatermarkLogin/>
            </div>
          </div>
        </div>
    </div>

  );
};

export default ForgotPassword;