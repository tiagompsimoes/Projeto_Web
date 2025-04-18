import React from 'react';
import '../assets/css/PagInicial.css';

const PagInicial = () => {
  return (
    <main className="main-content">
      
      <div className="container">

          <h1>Bem-vindo ao ISCTE</h1>
        
          <p className="subtitle">
            Um espaço para crescer, inovar e conviver.<br />
            Agora acessível sempre que quiseres.
          </p>
      
      </div>
      <div className="background-image">
          <div className="buttons">

            <a href="#" className="btn">
              <span className="btn-title">Sou um novo aluno</span>
              <span className="btn-sub">Como chegar ao ISCTE</span>
            </a>
          
            <a href="#" className="btn">
              <span className="btn-title">Já sou aluno</span>
              <span className="btn-sub">Quero fazer o login.</span>
          
            </a>
          </div>
        </div>
      </main>

      
  );
};

export default PagInicial;
