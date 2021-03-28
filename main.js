(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,c,u,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._myId=e,this._cardId=i,this._cardOwnerId=n,this._cardName=r,this._cardLink=o,this._cardNumbersLikes=a.length,this._likes=a,this._cardTemplate=c,this._handleCardClick=u,this._handleDeleteIconClick=s,this._handleLikeCard=l}var n,r;return n=t,(r=[{key:"updateLikes",value:function(e,t){t.target.classList.toggle("card__like_black"),t.target.closest(".card__like-info-container").querySelector(".card__likes-number").textContent=e.length}},{key:"setLikeInfo",value:function(){this.isLiked=!this.isLiked}},{key:"_getTemplate",value:function(){return this._cardElement=this._cardTemplate.cloneNode(!0),this._cardElement}},{key:"_setEventListeners",value:function(){var e=this;this._cardLike.addEventListener("click",(function(t){return e._handleLikeCard(t,e._cardId,e)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._cardName,e._cardLink)})),this._myId!==this._cardOwnerId?this._removeCardButton.classList.add("card__remove_display-none"):this._removeCardButton.addEventListener("click",(function(t){return e._handleDeleteIconClick(t)}))}},{key:"_cardIsLiked",value:function(){for(var e=0;e<this._likes.length;e++)if(this._likes[e]._id===this._myId)return!0;return this.isLiked=!1,!1}},{key:"_createCard",value:function(){return this._cardElement=this._getTemplate(),this._cardLike=this._cardElement.querySelector(".card__like"),this._cardImage=this._cardElement.querySelector(".card__image"),this._removeCardButton=this._cardElement.querySelector(".card__remove"),this._cardElement.querySelector(".card__title").textContent=this._cardName,this._cardElement.querySelector(".card__likes-number").textContent=this._cardNumbersLikes,this._cardImage.alt=this._cardName,this._cardImage.src=this._cardLink,this._cardIsLiked()&&(this._cardLike.classList.add("card__like_black"),this.isLiked=!0),this._setEventListeners(),this._cardElement}},{key:"renderCard",value:function(){return this._createCard()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e,t){o._errorElement=o._formValidation.querySelector(".".concat(e.name,"-input-error")),e.classList.add(o._configValidation.inputErrorClass),o._errorElement.textContent=t,o._errorElement.classList.add(o._configValidation.errorClass)})),r(this,"_hideInputError",(function(e){o._errorElement=o._formValidation.querySelector(".".concat(e.name,"-input-error")),e.classList.remove(o._configValidation.inputErrorClass),o._errorElement.classList.remove(o._configValidation.errorClass),o._errorElement.textContent=""})),r(this,"enableValidation",(function(){o._setEventListeners()})),this._configValidation=t,this._formValidation=n}var t,o;return t=e,(o=[{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._configValidation.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton(this._buttonElement,this._configValidation):(this._buttonElement.classList.remove(this._configValidation.inactiveButtonClass),this._buttonElement.removeAttribute("disabled","disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formValidation.querySelectorAll(this._configValidation.inputSelector)),this._buttonElement=this._formValidation.querySelector(this._configValidation.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&n(t.prototype,o),e}(),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},a=document.querySelector(".popup-illustration-container"),c=document.querySelector(".popup-edit-profile"),u=c.querySelector(".popup__input_type_name"),s=c.querySelector(".popup__input_type_profession"),l=c.querySelector(".popup__form"),f=l.querySelector(".popup__submit-button"),p=document.querySelector(".profile"),d=p.querySelector(".profile__edit-button"),h=p.querySelector(".profile__title"),_=p.querySelector(".profile__subtitle"),y=p.querySelector(".profile__photo"),v=document.querySelector(".popup-add-card"),m=v.querySelector(".popup__form"),b=m.querySelector(".popup__submit-button"),k=p.querySelector(".profile__add-button"),g=document.querySelector(".cards"),E=document.querySelector(".card-template").content,S=(document.querySelector(".popup-remove-confirm"),document.querySelector(".popup-edit-avatar")),w=S.querySelector(".popup__form"),L=w.querySelector(".popup__input_type_avtar-link"),C=w.querySelector(".popup__submit-button");function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close(),t.target.classList.contains("popup__close-button")&&e.close()}))}}])&&O(t.prototype,n),e}();function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._link=e.querySelector(".popup-illustration__img"),t._title=e.querySelector(".popup-illustration__title"),t}return t=a,(n=[{key:"open",value:function(e,t){q(T(a.prototype),"open",this).call(this),this._title.textContent=e,this._link.src=t}}])&&P(t.prototype,n),a}(I);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupSelector=e,n._handleFormSubmit=t,n._form=n._popupSelector.querySelector(".popup__form"),n._inputValues=n._popupSelector.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputValues.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){U(F(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;U(F(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){return e._handleFormSubmit(t,e._getInputValues())}))}}])&&x(t.prototype,n),a}(I);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return(z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=K(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=K(r);if(o){var n=K(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleConfirmButton=t,n._confirmForm=e.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;z(K(a.prototype),"setEventListeners",this).call(this,this._confirmButton),this._confirmForm.addEventListener("submit",(function(t){e._handleConfirmButton(t,e._cardToRemove,e._cardId)}))}},{key:"open",value:function(e,t){z(K(a.prototype),"open",this).call(this),this._cardToRemove=e,this._cardId=t}}])&&M(t.prototype,n),a}(I);function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t){var n=t.userName,r=t.userAbout,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._userAbout=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,aboutUser:this._userAbout.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=t,this._userAbout.textContent=n,this._avatar.src=e}}])&&W(t.prototype,n),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderedItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&Y(t.prototype,n),e}();function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"_fetch",value:function(e){return fetch("".concat(this._baseUrl).concat(e),{headers:this._headers}).then(this._checkResponse)}},{key:"_getInitialCards",value:function(e){return this._fetch(e)}},{key:"_getProfile",value:function(e){return this._fetch(e)}},{key:"getInitialData",value:function(){return Promise.all([this._getInitialCards("/cards"),this._getProfile("/users/me")])}},{key:"updateProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"udpateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&ee(t.prototype,n),e}();function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re=new J(S,(function(e){fe(C),e.preventDefault(),le.udpateAvatar(L.value).then((function(e){se.setUserInfo(e.avatar,e.name,e.about),re.close()})).catch((function(e){return console.log("Ошибка "+e)}))}));re.setEventListeners();var oe=new Q(document.querySelector(".popup-remove-confirm"),(function(e,t,n){e.preventDefault(),le.removeCard(n).then((function(e){t.remove(),oe.close()})).catch((function(e){return console.log("Ошибка "+e)}))}));oe.setEventListeners();var ie=new J(c,(function(e,t){e.preventDefault(),fe(f),le.updateProfile(t.name,t.proffesion).then((function(e){se.setUserInfo(e.avatar,e.name,e.about),ie.close()})).catch((function(e){return console.log("Ошибка "+e)}))}));ie.setEventListeners();var ae=new B(a);ae.setEventListeners();var ce=new J(v,(function(e,t){e.preventDefault(),fe(b),le.addCard(t.name,t.image).then((function(e){var t,n,r=pe(e.owner._id,e.name,e.link,e._id,e.likes);de.addItem(r,g),ce.close(),n=i,(t=b).classList.add(n.inactiveButtonClass),t.setAttribute("disabled","disabled")})).catch((function(e){return console.log("Ошибка "+e)}))}));ce.setEventListeners();var ue,se=new X({userName:h,userAbout:_,avatar:y}),le=new te({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-21",headers:{authorization:"2e08f9f0-442c-48d2-af92-1c14d5165bb1","Content-Type":"application/json"}});function fe(e){e.textContent="Сохранение...",e.setAttribute("disabled","disabled")}function pe(e,n,r,o,i){return new t(ue,e,n,r,o,i,E,he,_e,ye).renderCard()}le.getInitialData().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];se.setUserInfo(i.avatar,i.name,i.about),ue=i._id,de.renderedItems(o)})).catch((function(e){return console.log("Ошибка "+e)}));var de=new Z({renderer:function(e){var t=pe(e.owner._id,e.name,e.link,e._id,e.likes);de.addItem(t)}},g);function he(e,t){ae.open(e,t)}function _e(e){oe.open(e.target.closest(".card"),this._cardId)}function ye(e,t,n){n.isLiked?le.removeLike(t).then((function(t){n.updateLikes(t.likes,e)})).catch((function(e){return console.log("Ошибка "+e)})):le.likeCard(t).then((function(t){n.updateLikes(t.likes,e)})).catch((function(e){return console.log("Ошибка "+e)})),n.setLikeInfo()}d.addEventListener("click",(function(){f.textContent="Сохранить",u.value=se.getUserInfo().userName,s.value=se.getUserInfo().aboutUser,me.resetValidation(),ie.open()})),k.addEventListener("click",(function(){b.textContent="Сохранить",ve.resetValidation(),ce.open()})),y.addEventListener("click",(function(){C.textContent="Сохранить",be.resetValidation(),re.open()}));var ve=new o(i,m),me=new o(i,l),be=new o(i,w);ve.enableValidation(),me.enableValidation(),be.enableValidation()})();
//# sourceMappingURL=main.js.map