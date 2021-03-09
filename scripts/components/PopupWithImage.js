import Popup from './Popup.js';
import {popupIllustrationImg, popupIllustrationImgTitle} from '../utils/constants.js';

export class PopupWithImage extends Popup {
  constructor (name, link, popupSelector) {
    super(popupSelector);
    this._name = name;
    this._link = link;
  }

  open() {
    super.open();
    popupIllustrationImgTitle.textContent = this.name;
    popupIllustrationImg.src = this._link;
  }
}