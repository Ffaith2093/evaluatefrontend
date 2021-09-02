let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'
import wxRequest from '../../../utils/wxRequest.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg: "../../../img/teacher/classDetail/star.png",
    selectImg: "../../../img/teacher/classDetail/ziliao.png",

    classID: '',
    className: '',
    number: '',
    ifTerm: '',
    studentList: [],

    /*
    list: [{
      student_name: "陈一",
      student_number: "41812001",
      student_id: "00001"
    },{
      student_name: "陈一",
      student_number: "41812001",
      student_id: "00001"
    },{
      student_name: "陈一",
      student_number: "41812001",
      student_id: "00001"
    }],
    */
    
  },

  //获取班级总人数
  _getNumber() {
    let count = 0;
    if(this.data.studentList){
      count = this.data.studentList.length;
    }
    this.setData({
      number: count
    })
  },

  //结束本班级学期
  clickEnd() {
    wx.showModal({
      title: '是否确认结束该学期',
      success: function (res) {
        if (res.confirm) {    //点击确定后
          wx.request({
            url: url.url.endTerm,   
            method: 'GET',
            data: {
              class_id: this.data.classID
                  },
            header: {
                    'content-type': 'application/json'  //默认值
                  },
            success: function (response) {
                if(response.data.msg == '操作成功') {
                  hint.operSuccess()
                  let pages = getCurrentPages()
                  pages[pages.length -2 ].onLoad()
                  setTimeout(function () {
                    wx.redirectTo({
                    url: '../manage/manage',
                    });
                  }, 3000)
                }
              },
            fail(error) {
              hint.returnError();
            }
          })
        } else {    //点击取消后
          return;
        }
      }
    })
  },

  handleSelect(e) {
    var index = e.currentTarget.dataset.index;
    var studentID = this.data.studentList[index].student_id;
    wx.navigateTo({
      url: '../studentDetail/studentDetail?studentID=' + studentID
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      classID: options.classID,
      className: options.className,
      ifTerm: options.ifTerm
    }),
    //获取当前所有成员
    wx.request({
      url: url.url.classNumber,   
      method: 'POST',
      data: {
        class_id: that.data.classID
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            studentList: response.data.all_student
          })
          that._getNumber();
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