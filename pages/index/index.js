// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: '游 客 登 陆',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
      visitors:true,
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },

  onLoad(){
    // this.setData({
    //   userInfo: res.userInfo,
    //   hasUserInfo: true
    // })

    // if(getApp().globalData.userInfo){
    //   this.setData({
    //     userInfo: getApp().globalData.userInfo
    //   })
    // }
  },

  //登陆之后跳转日志界面
  bindViewTap() {
  //  console.log("登陆之后跳转日志界面")
  wx.navigateTo({
    url: '../logs/logs'
   })
  },

  toIndex(){
     wx.switchTab({
      url: '../../pages/zhuye/zhuye',
    })
  },

  reMark(){
    this.setData({
      hasUserInfo: false
    })
  },

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
    getApp().storage.setStorage("userInfo",this.data.userInfo)
  },

  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
    //console.log("test",getApp().storage)
    getApp().storage.setStorage("userInfo",this.data.userInfo)
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log("getUserProfile",res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        getApp().storage.setStorage("userInfo",this.data.userInfo)
      }
    })
  },


  test(e){
    console.log( getApp().storage.getStorage("userInfo"))
    console.log(getApp().globalData)
  }
})
