let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'
import wxRequest from '../../../utils/wxRequest.js'
let wxrequest = wxRequest.wxRequest

Page({
  /**
   * 页面的初始数据
   */
  data: {
    infoImgUrl: "../../../img/teacher/register/info-pic.png",
    studentIDUrl: "../../../img/teacher/register/ziliao.png",
    studentNameUrl: "../../../img/teacher/register/shenhe.png",
    numberUrl: "../../../img/teacher/register/shuqian.png",
    //用户输入信息
    studentID: "",
    studentName: "",
    studentNumber: "",
  },
  //监听ID输入
  lisenerInputID: function(e) {
    var value = e.detail.value;
    this.setData({
      studentID: value
    })
  }, 
  //监听Name输入
  lisenerInputName: function(e) {
    var value = e.detail.value;
    this.setData({
      studentName: value
    })
  }, 
  //监听Number输入
  lisenerInputNumber: function(e) {
    var value = e.detail.value;
    this.setData({
      studentNumber: value
    })
  }, 
   //点击确认注册按钮
  clickRegister() {
    if (this.data.studentID == '' || this.data.studentName == '' || this.data.studentNumber == ''){
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      })   
    }
    else {
      this.postUserInfo()
    }
  },
  //将学生用户注册信息post到服务器上
  postUserInfo(){
    wx.request({
      url: url.url.bindIdentity,     //请求登陆API
      method: 'POST',
      data: {
              sessionID: app.globalData.sessionID,
              identity: 'student',
              number: this.data.studentID,
              name: this.data.studentName,
              my_class: this.data.studentNumber
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          if(response.data.msg == '绑定成功') {
            hint.operSuccess('绑定成功');
            wx.redirectTo({
              url: '../homePageStu/homePageStu',
            })
          }
          else if(response.data.msg == '没有该班级') {
            hint.returnError('没有该班级，请联系老师')
          }
          else {
            hint.returnError('绑定失败')
          }
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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