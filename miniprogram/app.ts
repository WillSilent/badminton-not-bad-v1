// app.ts

export interface IAppOption {
  //$loginAsync?: $loginAsync
  //initEnv: () => Promise<void>
  //initUiGlobal: () => void
  //login: () => $loginAsync
  //initConfig: () => Promise<void>
  globalData: {
    statusHeight: number
    navHeight: number
    contentHeight: number
  },
  
}


App<IAppOption>({
  globalData: {
    statusHeight: 0,
    navHeight: 44,
    contentHeight: 0
  },
  onLaunch() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: '你的环境ID',
        env: 'badmintonnotbad-4gdy6j24abe0d671',
        traceUser: true,
      })
    }

    const res = wx.getWindowInfo()
    this.globalData.statusHeight = res.statusBarHeight
    this.globalData.contentHeight =
      res.screenHeight - res.statusBarHeight - this.globalData.navHeight

  },

})