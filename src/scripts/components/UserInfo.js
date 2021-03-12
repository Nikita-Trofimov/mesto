export default class UserInfo {
  constructor({ userName, userAbout }) {
    this._userName = userName;
    this._userAbout = userAbout;
  }

  getUserInfo() {
    return {userName:  this._userName.textContent, aboutUser: this._userAbout.textContent}
  }

  setUserInfo(userName, aboutUser) {
    this._userName.textContent = userName;
    this._userAbout.textContent = aboutUser;
  }
}