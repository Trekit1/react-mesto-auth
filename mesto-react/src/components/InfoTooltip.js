function InfoTooltip({ name, onClose, image, title, isOpen }) {
  return (
    <div
      className={
        isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`
      }
    >
      <form
        className={`popup__container popup__container_${name}`}
        name={`${name}-form`}
      >
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img src={image} className="popup__image" />
        <h2 className="popup__title popup__title_infoTooltip">{`${title}`}</h2>
      </form>
    </div>
  );
}

export default InfoTooltip;
