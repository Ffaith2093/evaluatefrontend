// pages/teacher/homeworkDetail/homeworkDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //测试数据，后期作业名字应该从前一个页面传过来的作业id获取
    homeworkName: "微课作业任务一",
    shouldSubmit: "37",
    haveSubmit: "25",
    noSpeech: "9",
    homeworkRatio: "0.2",
    homeworkRequest: "本次作业要求同学们参考教学大纲来进行教学设计。",
    homeworkStandard: ["课堂表现","课堂表现","课堂表现","课堂表现","课堂表现","重点难点解读","重点难点解读","重点难点解读","重点难点解读","重点难点解读",],
    //图片路径
    topImage: "../../../img/teacher/homeworkDetail/infoInput.png",
    detailImage: "../../../img/teacher/homeworkDetail/bianji.png"
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
    wx.reLaunch({
      url: '../homePage/homePage'
    })
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