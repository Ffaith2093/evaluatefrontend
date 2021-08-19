// pages/teacher/signNewHomework/signNewHomework.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断当前评分标准输入index
    nowIndex: 0,
    //当前现有班级（测试数据）
    nowClass: [{
      classID: "00001",
      className: "计算机科学与技术1801班"
    },{
      classID: "00002",
      className: "生科1801班"
    },{
      classID: "00003",
      className: "数科1801班"
    },{
      classID: "00004",
      className: "地科1801班"
    }],
    //输入的数据保存在该数据结构中
    homeworkInfo: {
      classBelong: "",
      homeworkTitle: "",
      homeworkRequest: "",
      gradeRatio: "",
      concernList: [{
        "title": "评分标准一 :",
        "content": ""
    },{
        "title": "评分标准二 :",
        "content": ""
    },{
      "title": "评分标准三 :",
      "content": ""
    },{
      "title": "评分标准四 :",
      "content": ""
    },{
      "title": "评分标准五 :",
      "content": ""
    },{
      "title": "评分标准六 :",
      "content": ""
    },{
      "title": "评分标准七 :",
      "content": ""
    },{
      "title": "评分标准八 :",
      "content": ""
    },{
      "title": "评分标准九 :",
      "content": ""
    },{
      "title": "评分标准十:",
      "content": ""
    }]
    }
  },
  //监听作业标题
  lisenerInputTitle(e) {
    var inputValue = e.detail.value;
    this.setData ({
      homeworkTitle: inputValue
    })
  },
  //监听作业要求
  lisenerInputRequest(e) {
    var inputValue = e.detail.value;
    this.setData ({
      homeworkRequest: inputValue
    })
  },
  //监听作业所占比
  lisenerInputRatio(e) {
    var inputValue = e.detail.value;
    this.setData ({
      gradeRatio: inputValue
    })
  },
  lisenerInputStandard(e) {
    var inputValue = e.detail.value;
    var index = this.data.nowIndex;
    var content = "concernList["+ index + "].content";
    var nextIndex = index + 1;
    this.setData ({
      [content]: inputValue,
      index: nextIndex
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