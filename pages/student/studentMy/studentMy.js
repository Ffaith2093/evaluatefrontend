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
    //底部导航栏数据
    tabs:[{
      id:0,
      name:"作业",
      imgUrl:"../../img/studentTab/homework.png",
      imgUrlActive:"../../img/teacherTab/homework-active.png",
      isActive: false
    },{
      id:1,
      name:"我的",
      imgUrl:"../../img/studentTab/my.png",
      imgUrlActive:"../../img/studentTab/my-active.png",
      isActive: true
    }],
    //用户信息
    userName: "",
    studentID: "",
    backPicture: "../../../img/teacher/teacherMy/back2.png",
    userProfile: "../../../img/teacher/teacherMy/myfile.JPG",
    schoolImg: "../../../img/teacher/teacherMy/school.png",
    numberImg: "../../../img/teacher/teacherMy/number.png",
  },
  //自定义事件
  handleItemChange(e){
    const index= e.detail.index;
    //跳转页面
    switch(index) {
      case 0:
        wx.redirectTo({
          url: '../homePageStu/homePageStu',
        })
        break;
      case 1:
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: url.url.userInfo,     //请求登陆API
      method: 'GET',
      data: {
              sessionID: app.globalData.sessionID,
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (res) {
          if(res.data.name != '' && res.data.name != '') {
            that.setData({
              userName: res.data.name,
              studentID: res.data.number
            })
          }
          else {
            hint.returnError('请求服务器失败')
          }
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