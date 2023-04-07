import React, { useState, useEffect, useMemo } from 'react';
import logo from '../images/logo.svg';
import { Link, useHistory, Route } from 'react-router-dom';

function Header({ email }) {
  const history = useHistory();

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    email = '';
    history.push('/sign-in');
  }

  return (
    <header className="header content">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип с надписью место россия"
      />
      <div className='header__box'>

        <Route exact path="/">
          <span className='header__email'>{email || localStorage.getItem('email')}</span>
          <Link
            to='/sign-in'
            onClick={signOut}
            className='header__link'>Выйти</Link>
        </Route>

        <Route path="/sign-up">
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        </Route>

        <Route path="/sign-in">
          <Link className="header__link" to='/sign-up'>
            Регистрация
          </Link>
        </Route>

      </div>
    </header>
  );
}
export default Header;