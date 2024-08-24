import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">upds</Link> {/* Cambia el div a Link */}
      {/* <div className="navbar-logo">upds</div> */}
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="#">Escenas</Link>
          <ul className="dropdown">
            <li><Link to="#">Escena 1</Link></li>
            <li><Link to="#">Escena 2</Link></li>
            <li><Link to="#">Escena 3</Link></li>
          </ul>
        </li>
        <li className="navbar-item">
          <Link to="#">Diseño</Link>
          <ul className="dropdown">
            <li><Link to="/materiales">Materiales</Link></li>
          </ul>
        </li>
        <li className="navbar-item"><Link to="#">Nosotros</Link></li>
        <li className="navbar-item"><Link to="#">Fotos</Link></li>
        <li className="navbar-item"><Link to="#">Grupos</Link></li>
      </ul>
    </nav>
  );
}
