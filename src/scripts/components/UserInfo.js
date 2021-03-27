export default class UserInfo {
  constructor({ userName, userAbout, avatar }) {
    this._userName = userName;
    this._userAbout = userAbout;
    this._avatar = avatar;
  }

  getUserInfo() {
    return {userName:  this._userName.textContent, aboutUser: this._userAbout.textContent}
  }

  setUserInfo(avatar, userName, aboutUser, ) {
    this._userName.textContent = userName;
    this._userAbout.textContent = aboutUser;
    this._avatar.src = avatar;
  }
}