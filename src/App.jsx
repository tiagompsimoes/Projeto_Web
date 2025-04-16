import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import Perfil from './pages/Perfil.jsx';
import Login from './pages/Login.jsx';

import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/perfil" element={<Perfil />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* <Navbar /> */}
      {/* <Footer /> */}
    </Router>
  );
}
export default App;