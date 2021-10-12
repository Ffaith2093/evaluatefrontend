// pages/teacher/errorData/errorData.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error_data: '',
    //评价分数中位数
    std_grade:'',
    //评价分数平均值
    avg_grade:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var std = parseFloat(options.std_grade).toFixed(2)
    var avg = parseFloat(options.avg_grade).toFixed(2)
    this.setData({
      error_data: app.globalData.error_data,
      std_grade: std,
      avg_grade: avg
    })
    console.log(this.data.error_data)
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