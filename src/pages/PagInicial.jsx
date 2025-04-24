import React from 'react';
import '../assets/css/PagInicial.css';
import Header from '../components/Header';

const PagInicial = () => {
  return (
    <main className="main-content">
      <Header />
      
      <div className="background-image" />

      <div className="container">
        <h1>Bem-vindo ao ISCTE</h1>
        <p className="subtitle">
          Um espaço para crescer, inovar e conviver.<br />
          Agora acessível sempre que quiseres.
        </p>
      </div>

      <div className="buttons">
        <a href="#" className="botao">
          <span className="botao-title">Sou um novo aluno</span>
          <span className="botao-sub">Como chegar ao ISCTE</span>
        </a>
        <a href="#" className="botao">
          <span className="botao-title">Já sou aluno</span>
          <span className="botao-sub">Quero fazer o login.</span>
        </a>
      </div>
    </main>
  );
};

export default PagInicial;
