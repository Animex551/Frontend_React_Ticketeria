import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';






function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo cencosud" className="logo"/>
      <ul>
        <li><a href="/login">xd</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;