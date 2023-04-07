import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [nameCard, setNameCard] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setNameCard('');
    setLink('');
  }, [isOpen]);

  function handleChangeNameCard(e) {
    setNameCard(e.target.value);
  }

  function handleLinkCard(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: nameCard,
      link: link
    });
  }

  return (
    <PopupWithForm
      name='add'
      title='Новое место'
      buttonSave='Создать'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <label className="popup__label">
        <input
          onChange={handleChangeNameCard}
          value={nameCard}
          name='name'
          type="text"
          id="namecard"
          minLength="2"
          maxLength="30"
          placeholder="Название"
          className="popup__input popup__input_type_name"
          required />
        <span className="namecard-input-error popup__input-error-name"></span>
      </label>

      <label className="popup__label popup__label_last-element">
        <input
          onChange={handleLinkCard}
          value={link}
          name='link'
          type="url"
          id="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_job"
          required />
        <span className="link-input-error popup__input-error-job"></span>
      </label>
    </PopupWithForm>
  )
}
export default AddPlacePopup;