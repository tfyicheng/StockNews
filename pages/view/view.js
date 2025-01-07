// pages/ding/ding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemFlag:1,
    // --------------------------------------------
    isShow:true,
    videoSrc:'https://sucai.suoluomei.cn/sucai_zs/video/20200319110726-bm-video2.mp4',   // 视频
    videoCoverImg:'http://img5.imgtn.bdimg.com/it/u=1672477765,2527992874&fm=26&gp=0.jpg',   // 视频封面图
    videoCoverImg1:"/images/video_img/bac.jpg",
    videoCoverImg2:"/images/video_img/bac1.jpg",
    videoCoverImg3:"/images/video_img/bac2.jpg",
    videoCoverImg4:"/images/video_img/bac3.jpg",
    videoCoverImg5:"/images/video_img/bac4.jpg",
    videoCoverImg6:"/images/video_img/bac5.jpg",
    videoCoverImg7:"/images/video_img/bac6.jpg",
    videoCoverImg8:"/images/video_img/bac7.jpg",
    videoPlayIcon:'https://sucai.suoluomei.cn/sucai_zs/images/20200321105958-suspended%403x.png'
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // ----------------------------------------
    this.setData({
      onevideo: "https://v.qq.com/x/page/m3256y02npv.html"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  

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
  changeItemFlag(event){
    let index = parseInt(event.currentTarget.dataset.index)
    this.setData({
      itemFlag:index
    })
  },




  // 点击cover播放
  videoPlay: function (e) {
    console.log('点击播放');
    console.log(e);
    //隐藏封面图和播放图标
    this.setData({
      tab_image: "none"    //tab_image 来控制封面图 
      
    }),
    this.videoCtx.play();
    console.log('xxxxxxxxx');
  },
  
  videoPlaytwo: function (a) {
    console.log('点击播放');
    console.log(a);
    //隐藏封面图和播放图标
    this.setData({
      tab_image1: "none"    //tab_image 来控制封面图 
      
    }),
    this.videoCtx1.play();
  },
  onReady() {
    this.videoCtx = wx.createVideoContext('myVideo')  //根据id绑定
    this.videoCtx1 = wx.createVideoContext('myVideo11')  //根据id绑定
    // -----------------------------------
    this.videoContext = wx.createVideoContext('myVideo_')
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

  },
  // -----------------------
  videoplayer(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg1
    })
  },
  videoplayer1(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg2
    })
  },
  videoplayer2(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg3
    })
  },
  videoplayer3(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg4
    })
  },
  videoplayer4(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg5
    })
  },
  videoplayer5(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg6
    })
  },
  videoplayer6(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg7
    })
  },
  videoplayer7(){
    wx.navigateTo({
      url: '/pages/videoplayer/videoplayer?pic='+this.data.videoCoverImg8
    })
  },
  bindplay() {
    this.setData({
      isShow:false
    })
    this.videoContext.play()
    console.log('play')
  },
  
  // 监听播放到末尾时触发
  bindended(){
    console.log('bindended')
    this.setData({
      isShow: true
    })
    this.videoContext.ended();
  },
  
  // 监听暂停播放时触发
  bindpause(){
    console.log('pause')
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        onevideo: "https://v.qq.com/x/page/m3256y02npv.html"
      })
    }
})