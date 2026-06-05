import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';

function Menu() {
  return (
    <nav className="menu-nav">
      <ul>
        <img src={logo} alt="logo cencosud" className="logo"/>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/LoginPage">Login</Link>
        </li>

        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu