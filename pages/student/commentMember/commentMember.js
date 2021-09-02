let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'
import wxRequest from '../../../utils/wxRequest.js'
let wxrequest = wxRequest.wxRequest

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImage: "../../../img/student/commentMember/dataImg.png",
    starImg: "../../../img/student/commentMember/star.png",
    commentImg: "../../../img/student/commentMember/search.png",
    selectItem : '0',

    homeworkID: '0001',
    title: '',
    uncommented: [],
    commented: [],
    /*
    //测试数据
    homeworkInfo: {
      className: "计算机科学与技术1801班",
      classNumber: "37",
      homeworkID: "00001",
      homeworkName: "微课作业一",
      studentID: "41812021",
    },
    commentInfo: {
      uncommented: [{
            comment_name: "陈一",    //已评价人姓名，
            comment_id:  "41812001"  //已评价人id
          },
          {
            comment_name: "陈二",    
            comment_id:  "41812002"  
            },
            {
              comment_name: "陈三",   
              comment_id:  "41812003"  
              }],
      commented: [{
          name: "陈二",    //未评价人姓名，
          id: "41812002"      //已评价人id
          }],         // (commented和uncommented的键如果不存在说明没有）
    }
    */
  },
  //切换到下标0
  needEvaluate() {
    var index = '0';
    if(index != 'this.data.selectItem'){
      this.setData({
      selectItem: index
    })
    }
  },
  //切换下标1
  haveEvaluate() {
    var index = '1';
    if(index != 'this.data.selectItem'){
      this.setData({
      selectItem: index
    })
    }
  },
  //跳转到评价作业页面
  switchComment(e) {
    var index = e.currentTarget.dataset.index;
    var homeworkID = this.data.homeworkID;
    var commentStudentID = this.data.uncommented[index].comment_id;
    wx.navigateTo({
      url: '../comment/comment?homeworkID=${homeworkID}&commentStudentID=${commentStudentID}'
    })
  },

  _setPara(homeworkID, title) {
    this.setData({
      homeworkID: homeworkID,
      title: title
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //console.log(options);
    const { homeworkID, title } = options;
    that._setPara(homeworkID, title);

    wx.request({
      url: url.url.commentNumber,     //请求登陆API
      method: 'POST',
      data: {
        homework_id: that.data.homeworkID
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success :function (res) {
        //console.log(res.data);
        that.setData({
          commented: res.data.commented,
          uncommented: res.data.uncommented
        })
        },
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