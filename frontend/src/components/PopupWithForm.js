import React from 'react';

function PopupWithForm({ name, title, children, buttonSave, isOpen, onClose, onSubmit }) {
  function closeByOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      onClick={closeByOverlay}
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__box popup__container popup__container_${name} `}>
        <button
          className="popup__close-icon"
          aria-label="Кнопка закрыть"
          onClick={onClose}>
        </button>
        <div className="popup__content">
          <h3 className="popup__title">{title}</h3>
          <form
            onSubmit={onSubmit}
            className={`popup__form popup__form_${name} `}
            name={name}
          >
            {children}
            <button
              className={`popup__save-button popup__save-button_${name}`}
              type="submit"
              aria-label="Кнопка сохранить" >
              {buttonSave}</button>
          </form>
        </div>
      </div>
    </div >
  );
}
export default PopupWithForm;