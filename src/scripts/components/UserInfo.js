export default class UserInfo {
  constructor({ userNameSelector, userAboutSelector }) {
    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
  }

  getUserInfo() {
    return {userName:  this._userNameSelector.textContent, aboutUser: this._userAboutSelector.textContent}
  }

  setUserInfo(userName, aboutUser) {
    this._userNameSelector.textContent = userName;
    this._userAboutSelector.textContent = aboutUser;
  }
}