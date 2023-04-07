import React, { useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import useForm from '../hooks/useForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about
    });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: values.name,
      about: values.about
    });
  }

  return (
    <PopupWithForm
      name='edit'
      title='Редактировать профиль'
      buttonSave='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit} >
      <label className="popup__label">
        <input
          onChange={handleChange}
          value={values.name || ''}
          name="name"
          type="text"
          id="username"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          className="popup__input popup__input_type_name"
          required
        />
        <span className="username-input-error popup__input-error-name"></span>
      </label>

      <label className="popup__label popup__label_last-element">
        <input
          onChange={handleChange}
          value={values.about || ''}
          name="about"
          type="text"
          id="biography"
          minLength="2"
          maxLength="200"
          placeholder="Работа"
          className="popup__input popup__input_type_job"
          required
        />
        <span className="biography-input-error popup__input-error-job"></span>
      </label>
    </PopupWithForm>
  )
}
export default EditProfilePopup;