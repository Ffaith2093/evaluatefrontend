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
    //判断是否为教师
    ifTeacher: '',
    //判断用户是否已经注册,若成功直接跳转到对应到身份页面
    ifSignin: false,
  },
  
  Register() {
    let that= this
    wx.getUserProfile({ //获取用户微信信息
      desc: '登录授权',
      success: (res) => {
        that.myUserInfo = res.userInfo   //用户信息
        let nickName = that.myUserInfo.nickName
        let avatarUrl = that.myUserInfo.avatarUrl
        wx.login({ //获取微信code
          provider: 'weixin',//微信小程序
          success: function(loginRes) {
            that.getToken(loginRes.code, duijianren, nickName, avatarUrl)
          }
        });
      },
      fail: (res) => {
        console.log("用户拒绝登录", res)
      }
    });
  },
  getToken(code, duijianren, nickName, avatarUrl) { //登录获取token
    var that= this;
    this.$http.request('测试接口').then(function(res) {
      if (res.code == 200) {
        wx.setStorageSync('Token', res.data.data.token);//保存token
        wx.showToast({
          title: '登录成功'   //提示登录成功
        });
        return
      }
      uni.showToast({
        title: '登录失败',
        icon: "none"
      });
    }).catch(function(err) {
      console.log(err)
    })
  },

  // 请求数据并进行处理
  getMsg() {
    let that = this;
    //用户配置请求
    this._wxLogin()
},
//获取用户配置-内部函数
  _wxLogin() {
    wxrequest(
        url.url.wxLogin,
        "GET",
        {sessionID:app.globalData.sessionID}
    ).then((res)=>{
      console.log(res);
        }).catch((err)=>{
            app.globalData.indexRefresh=false;
            setTimeout(() => {
                if(err.data &&err.data.resp_code){
                    hint.returnError();
                }else{
                  hint.networkError();
                  app.globalData.indexLoading = null;
                }
            }, 500)
        })
    },

  //按钮按下教师
  switchTeacher() {
    let ifTeacher = "1";
    this.setData({
      ifTeacher: ifTeacher
    })
  },
  //按钮按下学生
  switchStudent() {
    let ifTeacher = "0";
    this.setData({
      ifTeacher: ifTeacher
    })
  },
  //跳转到学生注册页
  submit() {
    if (this.data.ifTeacher == "0"){
      wx.redirectTo({
        url: '../student/registerStu/registerStu??source=identity',
    })
    }
    else if (this.data.ifTeacher == "1"){
      wx.redirectTo({
        url: '../teacher/register/register?source=identity',
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
    this.getMsg();
    this.Register();
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