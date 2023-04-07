function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__box popup__card-container">
        <button
          className="popup__close-icon"
          aria-label="Кнопка закрыть"
          onClick={onClose} >
        </button>
        <img
          className="popup__card-image"
          alt={card.name}
          src={card.link}
        />
        <h2 className="popup__card-title">{card.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;