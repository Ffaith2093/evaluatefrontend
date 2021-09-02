let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addImg: "../../../img/teacher/manage/jiahao.png",
    selectImage: "../../../img/teacher/manage/yousanjiaoxing.png",
    starImage: "../../../img/teacher/manage/star.png",

    titleList: [{
      title: "本学期班级",
      selectShow: false, 
    },{
      title: "非本学期班级",
      selectShow: false, 
    }],

    allClass: [],
    //测试数据
    /*
    allClass: [{
      class_name: "计算机科学与技术1801班",
      class_grade: "2018级",
      is_term: true,
      class_number: "00001"
    },{
      class_name: "计算机科学与技术1802班",
      class_grade: "2018级",
      is_term: true,
      class_number: "00002"
    },{
      class_name: "计算机科学与技术1803班",
      class_grade: "2018级",
      is_term: false,
      class_number: "00003"
    },{
        class_name: "计算机科学与技术1804班",
        class_grade: "2018级",
        is_term: false,
        class_number: "00004"
    }],
    */

    tabs:[{
      id:0,
      name:"作业",
      imgUrl:"../../img/teacherTab/homework.png",
      imgUrlActive:"../../img/teacherTab/homework-active.png",
      isActive: false
    },{
      id:1,
      name:"管理",
      imgUrl:"../../img/teacherTab/manage.png",
      imgUrlActive:"../../img/teacherTab/manage-active.png",
      isActive: true
    },{
      id:2,
      name:"汇总",
      imgUrl:"../../img/teacherTab/pictureAll.png",
      imgUrlActive:"../../img/teacherTab/pictureAll-active.png",
      isActive:false
    },{
      id:3,
      name:"我的",
      imgUrl:"../../img/teacherTab/my.png",
      imgUrlActive:"../../img/teacherTab/my-active.png",
      isActive:false
    }],
  },
  //自定义事件
  handleItemChange(e){
    const index= e.detail.index;
    //跳转页面
    switch(index) {
      case 0:
        wx.redirectTo({
          url: '../homePage/homePage',
        })
        break;
      case 1:
        break;
      case 2:
        wx.redirectTo({
          url: '../picAll/picAll',
        })
        break;
      case 3:
        wx.redirectTo({
          url: '../teacherMy/teacherMy',
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
  //跳转到创建班级页面
  handleCreateClass(){
    wx.navigateTo({
      url: '../createClass/createClass'
    })
  },
  //option的显示与否
  selectToggle(e){
    const itemIndex = e.currentTarget.dataset.index;
    //console.log(itemIndex);
    var nowShow = this.data.titleList[itemIndex].selectShow;//获取当前option显示的状态
    nowShow = !nowShow;
    var sItem = "titleList["+ itemIndex + "].selectShow";
    this.setData({
      [sItem]: nowShow,
      tabindex: itemIndex
    })
    //创建动画
    var animation = wx.createAnimation({
        timingFunction:"ease"
    })
    this.animation=animation;
    if(!nowShow){
        animation.rotate(0).step();
        this.setData({
            animationData: animation.export()
        })
      }else{
        animation.rotate(90).step();                
        this.setData({
            animationData: animation.export()
        })
    }
    //console.log(this.data.gradeAllList[itemIndex].selectShow);
  },

  //点击作业item跳转到作业具体信息页
  selectClass(e) {
    //console.log(e.currentTarget.dataset.id);
    //获取当前作业id,并传递给下一个页面
    console.log(e);
    let classID = e.currentTarget.dataset.id;
    let className = e.currentTarget.dataset.name;
    let ifTerm = e.currentTarget.dataset.ifterm;
    if (classID != ''){
      wx.navigateTo({
        url: '../classDetail/classDetail?classID=' + classID + '&className=' + className + '&ifTerm=' + ifTerm 
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取当前所有作业列表
    wx.request({
      url: url.url.myClass,     
      method: 'GET',
      data: {
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            allClass: response.data.all_class
          })
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