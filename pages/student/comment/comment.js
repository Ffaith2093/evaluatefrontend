// pages/student/comment/comment.js
import hint from '../../../utils/hint.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存储当前总分
    totalGrade: '0',
    firstLine: [1, 2, 3, 4, 5],
    secondLine: [6, 7, 8, 9, 10],
    //存储每一项得分 + 判断圆点hover效果
    gradeDetail: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    //存储评语
    comment: '',
    //测试数据
    homeworkDetail: {
      commentName: "陈一",
      commentList: [
        "课堂表现",
        "语言组织",
        "教材掌握",
        "情景交互",
        "重点难点解读",
        "课堂表现",
        "语言组织",
        "教材掌握",
        "情景交互",
        "重点难点解读"
      ]
    }
  },
  //点击评分按钮事件
  clickBtn(e) {
    var grade = e.currentTarget.dataset.grade;
    var index = e.currentTarget.dataset.index;
    this.setData({
      [`gradeDetail[${index}]`]: grade
    })
  },
  //处理评语
  handleInput(e) {
    var comment = e.detail.value;
    this.setData({
      comment: comment
    })
  },
  //处理提交按钮
  handleCommit(e) {
    var gradeDetail = this.data.gradeDetail;
    var comment = this.data.comment;
    var totalGrade = 0;
    for(var i = 0; i < 10; i++) {
      if (gradeDetail[i] == '0'){
        hint.inputError("必填内容不可为空哦~");
        return;
      }
      totalGrade += parseInt(gradeDetail[i]);
    }
    if(comment == '') {
      hint.inputError("必填内容不可为空哦~");
      return;
      }
    this.setData({
      totalGrade: totalGrade
    })
    wx.showModal({
      title: '确认提交',
      content: '您目前所给总分为' + totalGrade,
      success: function (res) {
        if (res.confirm) {//点击确定后
          wx.redirectTo({
            url: '../commentMember/commentMember'
          })
        } else {//点击取消后
          return;
        }
      }
    })
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