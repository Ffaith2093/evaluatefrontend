// pages/student/homePageStu/homePageStu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImage: "../../../img/student/homepageStu/hugeImg.png",
    arrowImg: "../../../img/student/homepageStu/youjiantou.png",
    //选择框下标，默认为0
    selectItem: '0',
    needEvaluateList :[],
    needSubmitList :[],
    haveDoneList :[],
    //测试数据，应从后台获取到的作业列表信息
    studentInfo: {
      studentName: "陈一一",
      studentID: "41812021",
      className: "计算机科学与技术1801班",
      homeworkList: [{
        name: "微课作业任务一",
        //该status有三种状态，0表示已经提交，1表示已讲课但未提交，2表示未讲课
        status: "1",
      },
      {
        name: "微课作业任务二",
        //该status有三种状态，0表示已经提交，1表示已讲课但未提交，2表示未讲课
        status: "0",
      }]
    },
    //测试数据，应从后台获取到的应评价作业
    commentHomeworkInfo: {
      studentName: "陈一一",
      studentID: "41812021",
      className: "计算机科学与技术1801班",
      classID: "00001",
      //注意下标，最好再写一个函数重新筛选出未评价的作业，涉及到index，先看后端数据怎么定义的
      list: [{
        studentName: "陈一",
        commentStudentID: "41712001",
        homeworkID: "00002",
        homeworkName: "微课作业任务二",
        commentStatus: "0"  //0表示未评价该作业，1表示已评价
      },
      {
        studentName: "陈一",
        commentStudentID: "41712001",
        homeworkID: "00002",
        homeworkName: "微课作业任务三",
        commentStatus: "0" 
      },
      {
        studentName: "陈一",
        commentStudentID: "41712001",
        homeworkID: "00002",
        homeworkName: "微课作业任务二",
        commentStatus: "0"  
      },
      {
        studentName: "陈一",
        commentStudentID: "41712001",
        homeworkID: "00002",
        homeworkName: "微课作业任务二",
        commentStatus: "1" 
      }]
    },
    //导航栏数据
    tabs:[{
      id:0,
      name:"作业",
      imgUrl:"../../img/studentTab/homework.png",
      imgUrlActive:"../../img/teacherTab/homework-active.png",
      isActive:true,
    },{
      id:1,
      name:"我的",
      imgUrl:"../../img/studentTab/my.png",
      imgUrlActive:"../../img/studentTab/my-active.png",
      isActive:false
    },]
  },
  //自定义事件
  handleItemChange(e){
    const index= e.detail.index;
    //跳转页面
    switch(index) {
      case 0:
        break;
      case 1:
        wx.redirectTo({
          url: '../studentMy/studentMy',
        })
        break;
      default:
        console.log('error');
    }
    //修改ui
    let tabs =  this.data.tabs;
    //4 数组循环
    //  1 给每一个循环项 选中属性 改为false 
    //   2 就给当前索引的项 添加激活选中效果就可以了
    //4 数组循环 forEach 遍历数组时, 修改了 v 会导致源数组被修改
    tabs.forEach((v,i)=> i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs: tabs
    });
  },
  //切换下标0
  needEvaluate() {
    var index = '0';
    if(index != 'this.data.selectItem'){
      this.setData({
      selectItem: index
    })
    }
  },
  //切换下标1
  needSubmit() {
    var index = '1';
    if(index != 'this.data.selectItem'){
      this.setData({
      selectItem: index
    })
    }
  },
  //切换下标2
  haveDone() {
    var index = '2';
    if(index != 'this.data.selectItem'){
      this.setData({
      selectItem: index
    })
    }
  },
  //跳转到评价页面
  switchComment(e) {
    var index = e.currentTarget.dataset.index;
    var homeworkID = this.data.commentHomeworkInfo.list[index].homeworkID;
    var commentSudentID = this.data.commentHomeworkInfo.list[index].commentSudentID;
    var studentID = this.data.commentHomeworkInfo.studentID;
    wx.navigateTo({
      url: '../commentMember/commentMember?homeworkID=' + homeworkID  + "&studentID=" + studentID
    })
  },
  //跳转到查看评价详情页面
  //need modify
  switchDetail(e) {
    wx.navigateTo({
      url: '../commentDetail/commentDetail?homeworkID='
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