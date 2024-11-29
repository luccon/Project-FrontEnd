import React from 'react';
import './index.css';


const Header = () => {

return (
    <nav>
      <div class="mobile-menu">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <a class="logo" href="/"><img src="src/compoments/Logo/logo.png" ></img></a>
      <ul class="nav-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Meus Pedidos</a></li>
      </ul>
    </nav>    
)
}

export default Header;