export class Card {
  constructor (cardName, cardLink, cardNumbersLikes, cardTemplate, handleCardClick) {
    this._cardName = cardName;
    this._cardLink = cardLink;
    this._cardNumbersLikes = cardNumbersLikes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }
  
  _handleCardLike(evt) {
    evt.target.classList.toggle('card__like_black');
  }
  
  _handleRemoveCard(evt) {
    evt.target.closest('.card').remove();
  }

  _getTemplate() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click', this._handleCardLike);
    this._removeCardButton.addEventListener('click', this._handleRemoveCard);
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardName, this._cardLink)
    });
  }

  _createCard () {
    this._cardElement = this._getTemplate();
    this._cardLike = this._cardElement.querySelector('.card__like');
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._removeCardButton = this._cardElement.querySelector('.card__remove');   
    this._cardElement.querySelector('.card__title').textContent = this._cardName;
    this._cardElement.querySelector('.card__likes-number').textContent = this._cardNumbersLikes;
    this._cardImage.alt = this._cardName;
    this._cardImage.src = this._cardLink;
    this._setEventListeners();
    
    return this._cardElement;
  }

  renderCard(){
    return this._createCard();
  }
}
