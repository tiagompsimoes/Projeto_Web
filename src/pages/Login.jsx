import React from 'react';
import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';
import WatermarkLogin from '../components/WaterMarkLogin';

const Login = () => {
  return (
    <div className="d-flex flex-column min-vh-100 align-items-center bg-light">
      <div className="card shadow-lg w-100" style={{ maxWidth: '420px' }}>
        
        <div className="card-body p-3 flex-column">
          <h5 className="text-center mb-3" style={{ color: "#0046AD", fontWeight: '600' }}>Login</h5>
          
          <form>
            <FormInput
              id="email"
              label="Email / Número de Aluno"
              type="text"
              placeholder="Inserir email ou número de aluno"
            />

            <FormInput
              id="password"
              label="Password"
              type="password"
              placeholder="Inserir password"
            />

            <SubmitButton />
          </form>
          
          {/* Forgot Password */}
          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none" style={{ color: "#0046AD" }}>
              Esqueci-me da palavra-passe
            </a>
          </div>
          
        </div>

        <div className="card-footer border-0 p-0">
          <WatermarkLogin />
        </div>    

      </div>
    </div>
  );
};

export default Login;