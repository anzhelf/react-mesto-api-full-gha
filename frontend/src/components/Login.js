import React, { useState } from 'react';

function Login({ onUpdateAuthorization }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAuthorization({
      email: email,
      password: password
    });
  }

  return (
    <div className="authorization">
      <div className="authorization__container">
        <h3 className="authorization__title">Вход</h3>
        <form
          className='authorization__form'
          onSubmit={handleSubmit}
        >
          <label className="authorization__label">
            <input
              value={email || ''}
              className="authorization__input"
              placeholder="Email"
              onChange={handleEmail}
              id="email"
              name="email"
              type="email"
              minLength="2"
              required
            />
            <span className="username-input-error popup__input-error-name"></span>
          </label>

          <label className="authorization__label authorization__label-password">
            <input
              value={password || ''}
              className="authorization__input"
              placeholder="Пароль"
              onChange={handlePassword}
              id="password"
              name="password"
              type="password"
              minLength="6"
              required
            />
            <span className="biography-input-error popup__input-error-job"></span>
          </label>

          <button
            className="authorization__save-button"
            type="submit"
            aria-label="Кнопка сохранить" >
            Войти
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login;