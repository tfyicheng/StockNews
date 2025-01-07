// app.js
const storage = require('./utils/storage.js');

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    const user = wx.getStorageSync('userInfo') || []
    
    if(user && user.visitors){
      console.log("保持登陆")
      wx.switchTab({
        url: '../../pages/zhuye/zhuye',
      })
    }else{

    }
   

  },
  globalData: {
   // userInfo: JSON.parse(storage.getStorage("userInfo")) 
    userInfo: storage.getStorage("userInfo")
  },
  storage:storage
})
