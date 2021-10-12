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
    topImage: "../../../img/student/homePageStu/hugeImg.png",
    arrowImg: "../../../img/student/homePageStu/youjiantou.png",
    
    //接收对应参数
    finished: [],
    waitLecture: [],
    waitCommented: [],

    //导航栏数据
    //选择框下标，默认为0
    selectItem: '0',
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

  //连接后端homework接口
  _getHomework() {
    wx.request({
      url: url.url.homework,     //请求登陆API
      method: 'GET',
      data: {
              sessionID: app.globalData.sessionID,
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success : (res)=> {
        this.setData({
          finished: res.data.finished,
          waitLecture: res.data.waitLecture,
          waitCommented: res.data.waitCommented
        })
        console.log(this.data.finished);
        },
    })
  },

  //跳转到评价成员页面
  switchComment(e) {
    //console.log(e);
    var index = e.currentTarget.dataset.index;
    var homeworkID = this.data.waitCommented[index].homework_id;
    var title = this.data.waitCommented[index].homework_title;
    wx.navigateTo({
      url: '../commentMember/commentMember?homeworkID=' + homeworkID + '&title=' + title
    })
  },
  //跳转到查看评价详情页面
  //need modify
  switchDetail(e) {
    console.log(e)
    var index = e.currentTarget.dataset.index;
    var homeworkID = this.data.finished[index].homework_id;
    wx.navigateTo({
      url: '../commentDetail/commentDetail?homeworkID=' + homeworkID
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that._getHomework();
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