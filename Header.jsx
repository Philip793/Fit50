import React from 'react';
import './Header.css'; // Optional: for styling

function Header() {
  return (
    <header className="header">
      <div className="logo">MySite</div>
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
