let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentList: []
    //测试数据
    /*
    studentList: [{
      student_id: "00012",
      student_name: "陈一",
      student_number: "41812021"
    },{
      student_id: "00013",
      student_name: "陈二",
      student_number: "41812021"
    },{
      student_id: "00014",
      student_name: "陈三",
      student_number: "41812021"
    },]
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var homeworkID = options.homeworkID;
    //获取当前未讲课学生名单
    wx.request({
      url: url.url.unSpeechStudent,     
      method: 'POST',
      data: {
              homework_id: homeworkID
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            studentList: response.data.students
          })
        },
      fail(error) {
        hint.returnError();
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