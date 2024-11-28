import React from 'react';
import './index.css';

const Header = () => {

return (
    <nav>
      <div className="mobile-menu">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <a className="logo" href="/"><img src="src/compoments/Logo/logo.png" ></img></a>
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Meus Pedidos</a></li>
      </ul>
    </nav>
)
}

export default Header;