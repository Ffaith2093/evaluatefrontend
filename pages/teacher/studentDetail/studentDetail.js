// pages/teacher/studentDetail/studentDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图标数据
    topImage: "../../../img/teacher/studentDetail/infoImg.png",
    classImg: "../../../img/teacher/studentDetail/biaoqian.png",
    idImg: "../../../img/teacher/studentDetail/ziliao.png",
    submitImg: "../../../img/teacher/studentDetail/zuoyetijiao.png",
    homerorkLength: '',
    //测试数据
    studentInfo: {
      studentName: "陈一一",
      studentID: "41812021",
      className: "计算机科学与技术1801班",
      homeworkList: [{
        name: "微课作业任务一",
        //该status有三种状态，0表示已经提交，1表示已讲课但未提交，2表示未讲课
        status: "0",
      },
      {
        name: "微课作业任务二",
        //该status有三种状态，0表示已经提交，1表示已讲课但未提交，2表示未讲课
        status: "1",
      },
      {
        name: "微课作业任务三",
        //该status有三种状态，0表示已经提交，1表示已讲课但未提交，2表示未讲课
        status: "2",
      }]
    }
  },
  //判断作业项数
  judgeClassItem() {
    var length = this.data.studentInfo.homeworkList.length;
    this.setData({
      homerorkLength: length,
    })
  },
  //点击查看视频，进入查看视频页面
  swichVideo() {
    wx.navigateTo({
      url: '../videoDetail/videoDetail?studentID=' + this.data.studentInfo.studentID
    })
  },
  //点击查看评价，进入查看评价页面
  switchEvaluate() {
    wx.navigateTo({
      url: '../evaluateDetail/evaluateDetail?studentID=' + this.data.studentInfo.studentID
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.judgeClassItem();
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