// pages/teacher/classDetail/classDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg: "../../../img/teacher/classDetail/star.png",
    selectImg: "../../../img/teacher/classDetail/ziliao.png",
    //测试数据(与后端连接时应当通过输入上一页面传来的班级ID来获取班级信息)
    classInfo: {
      classID: "00001",
      className: "计算机科学与技术1801班",
      memberNum: "37",
      memberDetail: [{
        studentID: "41812001",
        studentName: "陈一"
      },
      {
        studentID: "41812002",
        studentName: "陈二"
      },
      {
        studentID: "41812003",
        studentName: "陈三"
      },
      {
        studentID: "41812004",
        studentName: "陈四"
      },
    ]
    }
    
  },
  handleSelect(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var studentID = this.data.classInfo.memberDetail[index].studentID;
    wx.navigateTo({
      url: '../studentDetail/studentDetail?studentID=' + studentID
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