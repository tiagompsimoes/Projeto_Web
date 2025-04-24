import React from 'react';
import '../assets/css/HomePage.css';
import Header2 from '../components/Header2';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header2/>

      <div className="boas-vindas">
        <h3>Bem-vindo ao ISCTE</h3>
        <p>
          Na página inicial podes ver as tuas próximas aulas, notificações, próximos eventos e a ementa disponível.
        </p>
        <p>Vai até ao mapa e começa a explorar o campus!</p>
        <div className="comecar">Começar ➔</div>
      </div>

      <div className="secao-horario">
        <div className="secao-horario-header">
          <h4>HORÁRIO</h4>
          <a href="#">Ver tudo ➔</a>
        </div>

        <div className="cartao-horario">
          <span className="hora">09:30</span>
          <div className="info">
            <strong>Programação para Internet</strong>
            <p className="mudanca-sala">Mudança de Sala: P1.02</p>
          </div>
        </div>

        <div className="cartao-horario">
          <span className="hora">14:00</span>
          <div className="info">
            <strong>Bases de Dados</strong>
            <p>Sala P3.03</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
