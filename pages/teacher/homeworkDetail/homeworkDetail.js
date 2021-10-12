let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //测试数据，后期作业名字应该从前一个页面传过来的作业id获取
    homeworkName: "",
    homeworkID: "",
    shouldSubmit: "",
    haveSubmit: "",
    noSpeech: "",
    homeworkRatio: "",
    homeworkRequest: "",
    homeworkStandard: [],
    //图片路径
    topImage: "../../../img/teacher/homeworkDetail/infoInput.png",
    detailImage: "../../../img/teacher/homeworkDetail/bianji.png"
  },

  listBtn: function() {
    let id = this.data.homeworkID;
    console.log(id);
    wx.navigateTo({
      url: '../shouldSubmit/shouldSubmit?homeworkID=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var workId = options.homeworkID;
    //获取当前所有作业列表
    wx.request({
      url: url.url.homeworkDetail,     
      method: 'POST',
      data: {
              homework_id: workId
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          console.log(response.data)
          that.setData({
            homeworkID: workId,
            homeworkName: response.data.homework_title,
            shouldSubmit: response.data.homework_total,
            haveSubmit: response.data.homework_finished,
            noSpeech: response.data.no_speech,
            homeworkRatio: response.data.rate,
            homeworkRequest: response.data.homework_content,
            homeworkStandard: response.data.homework_evaluation_criterion
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