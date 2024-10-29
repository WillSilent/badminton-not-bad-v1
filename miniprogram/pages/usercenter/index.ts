// pages/usercenter/usercenter.ts

Page({

  data: {
    logged: false as boolean,
  },

  // 事件处理函数
  onLoad() {
    
  },

  toLoginPage(){
    wx.navigateTo({
      url: '/pages/usercenter/LoginPage/LoginPage'
    })
  },

  onGetUserInfo: function(e : any) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onShow() {
    this.getTabBar().init();
  },
})