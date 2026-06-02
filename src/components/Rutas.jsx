import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginPage from '../Pages/LoginPage';

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Rutas;