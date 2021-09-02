let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

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

    homeworkLength: '',
    student_name: '',
    student_number: '',
    student_id: '',
    student_class: '',
    homework_detail: ''

    //测试数据
    /*
    student_name: "陈一一",
    student_number: "41812021",
    student_id: "000345",
    student_class: "计算机科学与技术1801班",
    homework_detail: [{
      homework_name: "微课作业任务一",
      homework_status: "已经提交",
    },{
      homework_name: "微课作业任务二",
      homework_status: "未展示",
    },{
      homework_name: "微课作业任务三",
      homework_status: "正在评价",
    }]
    */
  },
  
  //判断作业项数
  judgeClassItem() {
    let length = 0;
    if(this.data.homework_detail) {
      length = this.data.homework_detail.length;
    }
    this.setData({
      homeworkLength: length
      })
  },
  /*
  //点击查看视频，进入查看视频页面
  swichVideo() {
    wx.navigateTo({
      url: '../videoDetail/videoDetail?studentID=' + this.data.student_number
    })
  },
  */
  //点击查看评价，进入查看评价页面
  swichEvaluate: function(e) {
    let homeworkId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../evaluateDetail/evaluateDetail?homeworkID=' + homeworkId + '&studentID=' + this.data.student_id + '&studentName=' + this.data.student_name
    })
  },

  //todo 进入评价页面进行评价操作
  getEvaluate: function(e) {
    let homeworkId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../student/comment/comment?homeworkID=' + homeworkId
    })
  },

  //开放评价
  openEvaluate: function(e) {
    let homeworkId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '是否确认开放评价',
      success: function (res) {
        if (res.confirm) {    //点击确定后
          wx.request({
            url: url.url.startComment,   
            method: 'POST',
            data: {
              homework_id: homeworkId,
              student_number: this.data.student_number
                  },
            header: {
                    'content-type': 'application/json'  //默认值
                  },
            success: function (response) {
                if(response.data.msg == 'success') {
                  hint.operSuccess()
                  setTimeout(function () {
                    //刷新本页面
                    location.reload();
                  }, 2000)
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

  //todo  结束评价
  endEvaluate: function(e) {
    let homeworkId = e.currentTarget.dataset.id;
    wx.showModal({
      title: '是否确认结束评价',
      success: function (res) {
        if (res.confirm) {    //点击确定后
          wx.request({
            url: url.url.endComment,   
            method: 'POST',
            data: {
              homework_id: homeworkId,
              student_id: this.data.student_id
                  },
            header: {
                    'content-type': 'application/json'  //默认值
                  },
            success: function (response) {
                if(response.data.msg == 'success') {
                  hint.operSuccess()
                  setTimeout(function () {
                    //刷新本页面
                    location.reload();
                  }, 2000)
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var studentID = options.studentID;
    that.setData({
      student_id: studentID
    })

    //获取当前学生作业信息
    wx.request({
      url: url.url.studentDetail,  
      method: 'POST',
      data: {
              student_id: studentID
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            student_name: response.data.student_name,
            student_number: response.data.student_number,
            student_class: response.data.student_class,
            homework_detail: response.data.homework_detail
          })
          that.judgeClassItem()
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