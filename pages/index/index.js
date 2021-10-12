let app = getApp();
import url from '../../utils/urlSet.js'
import wxRequest from '../../utils/wxRequest.js'
import hint from '../../utils/hint.js'
let wxrequest = wxRequest.wxRequest

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageStu: '../../img/identity/chengyuan.png',
    imageTea: '../../img/identity/jiaolian.png',
    imageGet: '../../img/identity/queren.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //用户信息
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false,
    //wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  //按钮按下教师
  switchTeacher() {
    let identity = 'teacher';
    app.globalData.userIdentity = identity;
  },
  //按钮按下学生
  switchStudent() {
    let identity = 'student';
    app.globalData.userIdentity = identity;
  },
  //跳转到对应身份注册页
  submit() {
    if (app.globalData.userIdentity == 'student'){
      wx.navigateTo({
        url: '../student/registerStu/registerStu',
    })
    }
    else if (app.globalData.userIdentity == 'teacher'){
      wx.navigateTo({
        url: '../teacher/register/register',
      })
    }
    //未确认身份时跳出弹窗警告
    else{
      wx.showToast({
        title: '请选择身份',
        icon: 'none',
        duration: 2000
      })      
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取用户信息
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
      app.globalData.userInfo = that.data.userInfo
    }
    //判断是否直接跳转到首页
    //若本地有缓存信息则直接跳转
    //若无缓存信息则可能缓存被清除，此时则向服务器发送请求，若身份不为空则也跳转，若身份为空才进入身份选择页  
    wx.getStorage({
      userIdentity: 'userIdentity',
      success: function (res) {
        if (userIdentity == 'teacher') {
          app.globalData.userIdentity = 'teacher';
          wx.redirectTo({
            url: '../teacher/homepage/homepage',
        })
        }
        else if(userIdentity == 'student') {
          app.globalData.userIdentity = 'student';
          wx.redirectTo({
            url: '../student/homePageStu/homePageStu',
        })
        }
      },
      fail(error){
        that.handleLogin();
      }
    })
  },

  async handleLogin() {
    //从服务器获取用户信息
    await app.getUser().then(() => {
      console.log(app.globalData.userIdentity);
      if (app.globalData.userIdentity == 'teacher') {
        wx.redirectTo({
          url: '../teacher/homePage/homePage',
        })
      }
      else if(app.globalData.userIdentity == 'student') {
        wx.redirectTo({
          url: '../student/homePageStu/homePageStu',
        })
      }
      else if(app.globalData.userIdentity == undefined) {
        return;
    }
    }).catch((err) => {
      console.log("错误了")
      console.log(err)
      setTimeout(() => {
          wx.hideLoading();
          if(err.data &&err.data.resp_code){
              hint.returnError();
          }else{
            hint.networkError();
          }
      }, 500)
  })
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      },
      fail: () => {
        console.log('error')
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})