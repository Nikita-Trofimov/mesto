class UserInfo {
  constructor(userNameSelector, userAboutSelector) {
    this._userNameSelector = userNameSelector;
    this._userAboutSelector = userAboutSelector;
  }

  getUserInfo() {
    return {userName:  this._userNameSelector, aboutUser: this._userAboutSelector}
  }

  setUserInfo(userName, aboutUser) {
    /// 
  }
}