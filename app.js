// app.js
const Utils = require('./utils/util');
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    //获取手机屏幕数据
    try {
      const res = wx.getSystemInfoSync()
      if (res.platform == 'ios') {
        this.globalData.platform = 'ios'
      } else if (res.platform == 'android') {
        this.globalData.platform = 'android'
      }
      // 导航高度
      let navHeight = res.statusBarHeight 
      // 屏幕宽度/高度，单位px
      this.globalData.screenWidth = res.screenWidth
      this.globalData.screenHeight = res.screenHeight
      // 状态栏的高度，单位px
      this.globalData.statusBarHeight = res.statusBarHeight
      // 设备像素比
      this.globalData.pixelRatio = res.pixelRatio
      // 可使用窗口宽度，单位px
      this.globalData.winWidth = res.windowWidth
      // 安卓时，胶囊距离状态栏8px，iOS距离4px
      if (res.system.indexOf('Android') !== -1) {
        this.globalData.navHeight = navHeight + 14 + 32
        this.globalData.navTitleTop = navHeight + 8
        // 视窗高度 顶部有占位栏时
        this.globalData.winHeight = res.screenHeight - navHeight - 14 - 32
        // tab主页视窗高度
        this.globalData.winHeightTab = res.windowHeight - navHeight - 14 - 32
      } else {
        this.globalData.navHeight = navHeight + 12 + 32
        this.globalData.navTitleTop = navHeight + 4
        // 视窗高度 顶部有占位栏时
        this.globalData.winHeight = res.screenHeight - navHeight - 12 - 32
        // tab主页视窗高度
        this.globalData.winHeightTab = res.windowHeight - navHeight - 12 - 32
      }
    } catch (e) {
      console.log(e)
    }
  },
  globalData: {
    sessionID: "",
    //用户身份
    userIdentity: null,
    //首页加载
    indexLoading: false,
    //屏幕数据
    platform: 'ios',
    pixelRatio: 2,
    statusBarHeight: 20,
    navHeight: 64,
    navTitleTop: 26,
    winHeight: 655,
    winWidth: 750,
    screenWidth: 375,
    screenHeight: 812
  }
})
