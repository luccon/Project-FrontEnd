import React from 'react';
import './index.css';

const Header = () => {

return (

  <div className="HeaderLogo">
  <nav className="navbar navbar-expand-lg bg-body-tertiary" >
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="src/compoments/Logo/logo.png"></img>
        </a>
      </div>
             
       <form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Pesquisar produto..." aria-label="Search"></input>
       </form>
       <div>
       <ul className="nav nav-underline">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Produtos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categorias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Meus Pedidos</a>
          </li>
        </ul>
        </div>
        </div>
      </div>
  </nav>
  </div>
)
}

export default Header;