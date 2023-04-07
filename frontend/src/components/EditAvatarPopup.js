import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: '', link: '' });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: values.avatar
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
          onChange={handleChange}
          value={values.avatar || ''}
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