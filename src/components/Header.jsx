import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header__link" to="/">
              List
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__lick" to="/registration">
              Registration
            </Link>
          </li>
          <li className="header__item">
            <Link className="header__link" to="/info">
              Info
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
