import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    setAvatar('');
  }, [isOpen]);

  function handleAvatarProfile(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonSave='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label popup__label_last-element">
        <input
          onChange={handleAvatarProfile}
          value={avatar}
          name='avatar'
          type="url"
          id="avatar"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_avatar"
          required />
        <span className="avatar-input-error popup__input-error-job"></span>
      </label>
    </PopupWithForm>
  )
}
export default EditAvatarPopup;