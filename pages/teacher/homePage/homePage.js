// pages/teacher/homePage/homePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //导航栏数据
    tabs:[{
      id:0,
      name:"作业",
      imgUrl:"../../img/teacherTab/homework.png",
      imgUrlActive:"../../img/teacherTab/homework-active.png",
      isActive:true,
    },{
      id:1,
      name:"管理",
      imgUrl:"../../img/teacherTab/manage.png",
      imgUrlActive:"../../img/teacherTab/manage-active.png",
      isActive:false
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
    //图标路径
    addImg: "../../../img/teacher/homePage/jiahao.png",
    selectImage: "../../../img/teacher/homePage/yousanjiaoxing.png",
    seeImage: "../../../img/teacher/homePage/chakan.png",
    tabindex: '',
    //测试数据
    gradeAllList:[{
      gradeID: "0004",
      gradeName: "2018级",
      selectShow: false, 
      homework: [{
        homeworkID: "000001",
        name: "微课设计作业一",
      },
      {
        homeworkID: "000002",
        name: "微课设计作业二",
      },
      {
        homeworkID: "000003",
        name: "微课设计作业三",
    }]
    },
    {
      gradeID: "0003",
      gradeName: "2017级",
      selectShow: false, 
      homework: [{
        homeworkID: "000004",
        name: "微课设计作业一",
      },
      {
        homeworkID: "000005",
        name: "微课设计作业二",
      },
      {
        homeworkID: "000006",
        name: "微课设计作业三",
    }]
    },
    {
      gradeID: "0002",
      gradeName: "2016级",
      selectShow: false, 
      homework: [{
        homeworkID: "000007",
        name: "微课设计作业一",
      },
      {
        homeworkID: "000008",
        name: "微课设计作业二",
      },
      {
        homeworkID: "000009",
        name: "微课设计作业三",
    }]
    },
    ]
  },
  //自定义事件
  handleItemChange(e){
    const index= e.detail.index;
    console.log(index)
    //跳转页面
    switch(index) {
      case 0:
        break;
      case 1:
        wx.redirectTo({
          url: '../manage/manage',
        })
      case 2:
        wx.redirectTo({
          url: '../picAll/picAll',
        })
      case 3:
        wx.redirectTo({
          url: '../teacherMy/teacherMy',
        })
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
  //跳转到布置作业页面(后面应增加携带参数)
  signNewHomework() {
    wx.navigateTo({
      url: '../signNewHomework/signNewHomework',
    })
  },

  //option的显示与否
  selectToggle(e){
    const itemIndex = e.currentTarget.dataset.index;
    //console.log(itemIndex);
    var nowShow = this.data.gradeAllList[itemIndex].selectShow;//获取当前option显示的状态
    nowShow = !nowShow;
    var sItem = "gradeAllList["+ itemIndex + "].selectShow";
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
  selectHomework(e){
    var nowIdx = e.currentTarget.dataset.index;//当前点击的索引
    var tabindex = this.data.tabindex;
    //获取当前作业id,并传递给下一个页面
    var homeworkID = this.data.gradeAllList[tabindex].homework[nowIdx].homeworkID; 
    if (homeworkID != ''){
      wx.navigateTo({
        url: '../homeworkDetail/homeworkDetail?homeworkID=' + homeworkID
      })
    }
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