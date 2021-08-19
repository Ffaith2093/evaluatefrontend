/*所有需要用到的url均封装在此，每个url后面均有作用注释*/
const localHostV1 = 'http://114.117.212.135:5000/docs/api';
const host = localHostV1;
var url = new Object({
  bindIdentity: host + '/auth/bindIdentity', //绑定身份（学生端，教师端，通用）
  myHomework: host + '/auth/myHomework',  // 查看自己提交的作业
  userInfo: host + '/auth/userInfo', //获取用户基本信息(学生，教师通用)
  Homework: host + '/auth/homework',   //获取用户的作业(学生端口的首页)
  wxLogin: host + '/auth/wxLogin',   // 微信小程序登录


  Comment: host + '/comment/Comment',  //评价（学生端，教师端，通用评价学生界面）
  commentDetail: host + '/comment/commentDetail',   //评价详情（教师端,学生端，查看评价详情）
  commentNumber: host + '/comment/commentNumber',   //评价成员（学生端，获取已评价和未评价成员)
  commitComment: host + '/comment/commitComment',   //提交评价（学生端，教师端，提交评价界面）
  endComment: host + '/comment/endComment',   //结束评价（教师端，教师上课结束评价)
  startComment: host + '/comment/startComment',   //开始评价（教师端，教师上课开启评价


  addHomework: host + '/homework/addHomework',  //增加作业(教师端，老师布置作业）
  allWork: host + '/homework/allWork',    //所有的班级和所有的作业(教师端，首页）
  homeworkDetail: host + '/homework/homeworkDetail',   //作业详情(教师端查看该作业的详情)
  termClass: host + '/homework/termClass',   //老师布置作业页面，所需的本学期班级信息（教师端)
  unSpeechStudent: host + '/homework/unSpeechStudent',   //未讲课的同学（教师端，查看未讲课同学名单)


  addClass: host + '/class/addClass',   //增加班级（教师端，创建班级）
  classGrade: host + '/class/classGrade',   //班级成绩（教师端，班级成绩）
  classNumber: host + '/class/classNumber',   //获取班级中的成员(教师端）
  endTerm: host + '/class/endTerm',   //结束本班级的学期（教师端）
  finishedDetail: host + '/class/finishedDetail',   //作业完成详情（教师端，查看已提交视频的同学)
  myClass: host + '/class/myClass',    //老师查看班级（教师端）
  studentDetail: host + '/class/studentDetail',    // 班级成员详情(教师端）
});
exports.url = url;