let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg: "../../../img/teacher/createClass/pic.png",
    //存储输入信息
    gradeBelong: "",
    newClassName: "",
  },
  //监听输入的所属年级
  listenGrade(e) {
    var inputValue = e.detail.value;
    this.setData ({
      gradeBelong: inputValue
    })
  },
  //监听输入的新建班级名
  listenClassName(e) {
    var inputValue = e.detail.value;
    this.setData ({
      newClassName: inputValue
    })
  },
  _postInfo() {
    //上传新建班级数据
    wx.request({
      url: url.url.addClass,     
      method: 'POST',
      data: {
              grade: this.data.gradeBelong,
              class_name: this.data.newClassName
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          console.log(response.data)
          if(response.data.msg == "创建成功") {
              let classNumber = response.data.class_number;
              hint.operSuccess('创建班级成功!' + '该班级编号为' + classNumber)
          }
      },
      fail(error) {
        hint.returnError();
      }
    })
  },
  handleSubmit() {
    if(this.data.gradeBelong != '' && this.data.newClassName != '') {
      this._postInfo();
      wx.redirectTo({
        url: '../manage/manage',
      })
    }
    else {
      wx.showToast({
        title: '请将信息输入完整',
        icon: 'none',
        duration: 2000
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