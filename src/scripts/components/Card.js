export class Card {
  constructor (myId, cardOwnerId, cardName, cardLink, cardId,  likes, cardTemplate, 
    handleCardClick, handleDeleteIconClick, handleLikeCard) {
    this._myId = myId;
    this._cardId = cardId;
    this._cardOwnerId = cardOwnerId;
    this._cardName = cardName;
    this._cardLink = cardLink;
    this._cardNumbersLikes = likes.length;
    this._likes = likes;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeCard = handleLikeCard;
  }
 
  setLikeInfo(){
    this.isLiked = !this.isLiked;
  }

  _getTemplate() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    return this._cardElement;
  }

  _setEventListeners() {
    this._cardLike.addEventListener('click',(evt) => this._handleLikeCard(evt, this._cardId, this));
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardName, this._cardLink)
    });
    if (this._myId !== this._cardOwnerId){
      this._removeCardButton.classList.add('card__remove_display-none');
    }else {
      this._removeCardButton.addEventListener('click', (evt) => this._handleDeleteIconClick(evt));
    }
  }

  _cardIsLiked() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._myId) return true;
    }
    this.isLiked = false;
    return false
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
    if (this._cardIsLiked()){
      this._cardLike.classList.add('card__like_black');
      this.isLiked = true;
    }
    this._setEventListeners();
    return this._cardElement;
  }

  renderCard(){
    return this._createCard();
  }
}
