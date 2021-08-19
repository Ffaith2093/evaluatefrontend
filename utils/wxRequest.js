let wxSyncRequest= (url, method, data) =>{
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: method,
      data: data,
      success(res) {
        if (res.statusCode === 200 && (res.data.resp_code === 0||res.data.resp_code === 10)) {
            resolve(res)
        }else{
          console.log("error");
          console.log(url)
          reject(res)
        }
      },
      fail(err){
        console.log("error");
        reject(err)
      },
      finally(){
        reject("出错了")
        console.log("finally")
      }
    })
  })
};
exports.wxRequest = wxSyncRequest;
