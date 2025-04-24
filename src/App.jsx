import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import Perfil from './pages/Perfil.jsx';
import Login from './pages/Login.jsx';
import PagInicial from './pages/PagInicial.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import HomePage from './pages/HomePage.jsx'

import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

import './assets/css/styles.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/perfil" element={<Perfil />} /> */}
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inicio" element={<PagInicial />} />
        </Routes>
    </Router>
  );
}
export default App;