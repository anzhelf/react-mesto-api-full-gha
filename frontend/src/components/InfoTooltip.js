import React from 'react';
import iconOk from '../images/iconOk.png';
import iconError from '../images/iconError.png';

function InfoTooltip({ requestStatus, isOpen, onClose }) {
  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <div onClick={closeByOverlay} className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button
          className="popup__close-icon"
          aria-label="Кнопка закрыть"
          onClick={onClose}>
        </button>
        <div className="popup__content popup__status-content">
          <img
            className="popup__status-icon"
            src={requestStatus ? iconOk : iconError}
            alt="Логотип с надписью место россия" />
          <h3 className="popup__status-title">
            {requestStatus ? `Вы успешно зарегистрировались!`
              : `Что-то пошло не так! Попробуйте ещё раз.`}
          </h3>
        </div>
      </div>
    </div >
  )
}
export default InfoTooltip;