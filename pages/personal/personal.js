const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
      visitors:false,
    },
  },

  quit(){
    wx.showModal({
      title: '确认操作',
      content: '确定要退出吗？',
     
      
      success: function (res) {
         if (res.cancel) {
            //点击取消,默认隐藏弹框
         } else {
            
            
            wx.reLaunch({
              url: '../../pages/login/login'
            })
            wx.showToast({
              title: '退出登录成功！',
              icon:"none"
            })
            wx.removeStorageSync('userInfo')
         }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
   })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  const user =   getApp().storage.getStorage("userInfo")
    this.setData({
      userInfo:user
    })
   // getApp().storage.setStorage("userInfo",this.data.userInfo)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})