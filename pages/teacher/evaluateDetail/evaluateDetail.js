let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconImg: "../../../img/teacher/evaluateDetail/bianji.png",

    studentName: '',
    studentID: '',
    homeworkID: '',
    grade: '',
    commmentList: []

    //测试数据
    /*
    commmentList: [{
      comment_name: "陈一",
      comment_grade: "82",
      comment_content: "该同学课堂表现力较强，语言表达准确，不足在于知识点讲得过于繁杂。",
    },{
      comment_name: "陈二",
      comment_grade: "82",
      comment_content: "该同学课堂表现力较强，语言表达准确，不足在于知识点讲得过于繁杂。",
    }],
    */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      studentID: options.studentID,
      homeworkID: options.homeworkID,
      studentName: options.studentName
    })

    //获取当前学生作业评价信息
    wx.request({
      url: url.url.commentDetail,  
      method: 'POST',
      data: {
              sessionID: app.globalData.sessionID,
              homework_id: that.data.homeworkID,
              student_id: that.data.studentID
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            commmentList: response.data.all_comment,
            grade: response.data.grade
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