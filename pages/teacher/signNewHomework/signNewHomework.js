let app = getApp();
import url from '../../../utils/urlSet.js'
import hint from '../../../utils/hint.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [],
    //输入的数据保存在以下数据中
    classID: "",
    homeworkTitle: "",
    homeworkRequest: "",
    gradeRatio: "",
    concernTitle: [ "评分标准一 :", "评分标准二 :", "评分标准三 :", "评分标准四 :", "评分标准五 :",
                      "评分标准六 :", "评分标准七 :", "评分标准八 :", "评分标准九 :","评分标准十:"],
    concernList: new Array(10).fill('')
  },
  //传递当前选中班级id
  getDate:function(e){
    let index = e.detail.index;
    let id = this.data.selectArray[index].class_id;
    this.setData({
      classID: id
    })
    console.log(this.data.classID)
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
  //监听作业标准
  lisenerInputStandard(e) {
    let inputValue = e.detail.value;
    let index = e.currentTarget.dataset.index;
    let content = "concernList["+ index + "]";
    this.setData ({
      [content]: inputValue,
    })
  },
  //获取当前学期班级
  _getTermClass() {
    const that = this;
    wx.request({
      url: url.url.termClass,     
      method: 'GET',
      data: {
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          that.setData({
            selectArray: response.data.term_class
          })
        },
      fail(error) {
        hint.returnError();
      }
    })
  },
  //点击按钮事件
  handleSubmit() {
    if(this.data.classID === '' || this.data.homeworkTitle == '' || 
        this.data.homeworkRequest == '' || this.data.gradeRatio == '') {
      hint.inputError('请填写完整哦')
    }
    else{
      let i = 0;
      let array = this.data.concernList
      console.log(array)
      for (; i<10; i++) {
        if(array[i] == ''){
          hint.inputError('请填写完整哦')
          return
        }
      }
      this._uploadDetail();
      }
  },
  //上传作业详情
  _uploadDetail() {
    const that = this;
    wx.request({
      url: url.url.addHomework,     
      method: 'POST',
      data: {
        sessionID: app.globalData.sessionID,
        class_id: that.data.classID,
        title: that.data.homeworkTitle,
        content: that.data.homeworkRequest,
        rate: that.data.gradeRatio,
        evaluation_criterion: that.data.concernList
            },
      header: {
              'content-type': 'application/json'  //默认值
            },
      success: function (response) {
          console.log(response)
          if (response.data.msg == "布置作业成功") {
            hint.operSuccess('布置作业成功');
            setTimeout(function () {
              wx.navigateBack({
                delta: 0,
              })
            }, 1000)
            
          }
          else{
            hint.returnError();
          }
        },
      fail(error) {
        hint.returnError();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getTermClass();
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