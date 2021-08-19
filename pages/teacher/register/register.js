// pages/teacher/register/register.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infoImgUrl: "../../../img/teacher/register/info-pic.png",
    teacherIDUrl: "../../../img/teacher/register/ziliao.png",
    teacherNameUrl: "../../../img/teacher/register/shenhe.png",
    numberUrl: "../../../img/teacher/register/shuqian.png",
    //用户输入信息
    teacherID: "",
    teacherName: "",
    teacherNumber: "",
  },
  //监听ID输入
  lisenerInputID: function(e) {
    var value = e.detail.value;
    this.setData({
      teacherID: value,
    })
  }, 
  //监听Name输入
  lisenerInputName: function(e) {
    var value = e.detail.value;
    this.setData({
      teacherName: value,
    })
  }, 
  //监听Number输入
  lisenerInputNumber: function(e) {
    var value = e.detail.value;
    this.setData({
      teacherNumber: value,
    })
  }, 
   //点击确认注册按钮
  clickRegister() {
    if (this.data.teacherID == '' || this.data.teacherName == '' || this.data.teacherNumber == ''){
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      })   
    }
    else {
      wx.redirectTo({
        url: '../homePage/homePage',
      })
    }
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