export class Card {

  constructor (cardName, cardLink, cardTemplate) {
    this._cardName = cardName;
    this._cardLink = cardLink;
    this._cardTemplate = cardTemplate;
    this._popupIllustration = document.querySelector('.popup-illustration-container');
  }

  _openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => this._closePopupEscKey(evt, this._popupIllustration));
  }
  _openIllustration(_cardData) {
    this._popupIllustrationImg = this._popupIllustration.querySelector('.popup-illustration__img');
    this._popupIllustrationImgTitle = this._popupIllustration.querySelector('.popup-illustration__title');
    this._popupIllustrationImg.src = this._cardLink;
    this._popupIllustrationImg.alt = this._cardName;
    this._popupIllustrationImgTitle.textContent = this._cardName;
    this._openPopup(this._popupIllustration);
  }
  
  _handleCardLike(evt) {
    evt.target.classList.toggle('card__like_black');
  }
  
  _handleRemoveCard(evt) {
    evt.target.closest('.card').remove();
  }

  _closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEscKey);
  }

  _closePopupEscKey(evt) {
    if (evt.key ==='Escape') {
    this._popupIllustration.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEscKey);
    }
  }

  _getTemplate() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    return this._cardElement;
  }

  _createCard () {
    this._cardElement = this._getTemplate();
    this._cardLike = this._cardElement.querySelector('.card__like');
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._removeCardButton = this._cardElement.querySelector('.card__remove');   
      
    this._cardElement.querySelector('.card__title').textContent = this._cardName;
    this._cardImage .alt = this._cardName;
    this._cardImage .src = this._cardLink;
  
    this._cardLike.addEventListener('click', this._handleCardLike);
    this._removeCardButton.addEventListener('click', this._handleRemoveCard);
    this._cardImage.addEventListener('click', () => this._openIllustration(this._cardData));
    return this._cardElement;
  }

  renderCard(){
    return this._createCard();
  }
}
