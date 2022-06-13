class UserInfo {
  constructor(profileInfo) {
    this._name = document.querySelector(profileInfo.profileTitle);
    this._jobInfo = document.querySelector(profileInfo.profileSubtitle);
  }
  getUserInfo() {
    this._infoObject = {
      name: this._name.textContent,
      job: this._jobInfo.textContent,
    };
    return this._infoObject;
  }
  setUserInfo(data) {
    this._name.textContent = data.name;
    this._jobInfo.textContent = data.profession;
  }
}

export { UserInfo };
