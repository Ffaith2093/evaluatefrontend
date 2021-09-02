//提示类方法

function returnError(text="出错了，重新试试吧～",icon="none",duration=1500) {
  //返回数据有误
  wx.showToast({
      icon:icon,
      title:text,
      duration : duration
  })
}

function networkError(text="请检查网络连接",icon="none") {
  //网络有误
  wx.showToast({
      icon:icon,
      title:text
  })
}

function inputError(text="请输入完整哦",icon="none",duration=1500) {
  //输入不完整
  wx.showToast({
      icon:icon,
      title:text,
      duration:duration
  })
}

function operSuccess(text="操作成功", icon="success") {
  //操作成功
  wx.showToast({
      icon:icon,
      title:text
  })
}

exports.networkError = networkError;
exports.returnError = returnError;
exports.inputError = inputError;
exports.operSuccess = operSuccess;