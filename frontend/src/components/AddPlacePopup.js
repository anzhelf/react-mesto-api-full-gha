import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import useForm from '../hooks/useForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const { values, handleChange, setValues } = useForm({});

  useEffect(() => {
    setValues({ name: '', link: '' });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: values.name,
      link: values.link
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
          onChange={handleChange}
          value={values.name || ''}
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
          onChange={handleChange}
          value={values.link || ''}
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