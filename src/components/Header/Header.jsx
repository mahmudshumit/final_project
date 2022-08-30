import React from 'react'

import './Header.css';
import { Container } from 'reactstrap';
import {NavLink ,Link} from 'react-router-dom';


const NAV__LINKS = [
    {
      display: "Home",
      url: "/home",
    },
    {
      display: "Market",
      url: "/market",
    },
    {
      display: "Create",
      url: "/create",
    },
    {
      display: "Contact",
      url: "/contact",
    },
    {
        display: "SignIn",
        url: "/signin",
      },
      {
        display: "LogIn",
        url: "/login",
      },
  ];


const Header = () => {
  return <header className="header">
     <Container>
        <div className="navigation">
            <div className="logo">
                <h2 className='d-flex gap-2 align-items-center'><span> <i class="ri-fire-fill"></i></span>CosMos</h2>
            </div>
            <div className="nav_menu">
            <ul className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.url}>{item.display}
                    
                  </NavLink>
                </li>
              ))}
            </ul>
            
            </div>
            <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to="/wallet">Connect Wallet</Link>
            </button>
            </div>
        </div>
        
     </Container>
  </header>
   


}

export default Header;