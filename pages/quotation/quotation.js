// pages/home/home.js

const utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: utils.formatTime(new Date())
  },
  login(){
    // wx.showLoading()
    // wx.getUserProfile({
    //   desc: '用于信息展示',
    //   success:res=>{
    //     wx.hideLoading()
    //     this.setData({args:res.userInfo})
    //     wx.setStorageSync('args', res.userInfo)
    //   }
    // })
    console.log("111")
    wx.navigateTo({
      url: '../login/login',
    })
  },//登录 使用 wx.getUserProfile 方法来获取用户信息，这通常用于实现登录功能。成功获取用户信息后，使用 setData 更新页面数据，并使用 wx.setStorageSync 将用户信息存储到本地。

  exit(){
    this.setData({
      args: ""
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let args=wx.getStorageSync('args')
    if(args){
      this.setData({args})
    }
    // 新闻
    wx.request({//这是微信小程序提供的API，用于发起网络请求。
      url: 'https://news.10jqka.com.cn/tapp/news/push/stock/?page=1&tag=&track=website&pagesize=3',//这个URL包含了查询参数，用于请求第一页的、每页3条的、带有特定追踪标记的新闻数据。
      method: 'GET',
      success: res => {
        this.setData({ news: res.data.data.list })
      }
    })//通过接口从网页中取得三条新闻数据
    // 大盘
    wx.request({
      url: 'https://hq.sinajs.cn/rn=1717128210890&list=s_sh000001,s_sz399001,s_sh000300,s_bj899050,s_sz399006',
      method: 'GET',
      success: res => {
        let str = res.data
        let shang_z = str.split('\n')[0].split('=')[1].split(',')
        let shen_z = str.split('\n')[1].split('=')[1].split(',')
        let k_c = str.split('\n')[4].split('=')[1].split(',')
        shang_z[1] = Number(shang_z[1]).toFixed(2)
        shen_z[1] = Number(shen_z[1]).toFixed(2)
        k_c[1] = Number(shen_z[1]).toFixed(2)
        this.setData({
          shang_z,
          shen_z,
          k_c
        })
      }
    })//通过接口获取数据，分别是上证指数、深证成指和沪深300的数据，通过解析 str 字符串获得。调用setdate渲染到前端
    // 排行
    wx.request({
      url: 'https://vip.stock.finance.sina.com.cn/quotes_service/api/json_v2.php/Market_Center.getHQNodeData?page=1&num=40&sort=changepercent&asc=0&node=hs_a&symbol=&_s_r_a=init',
      method: 'GET',
      success: res => {
        this.setData({ list: res.data })
      }
    })/*
    num=40: 每页请求40条数据。
    sort=changepercent: 按照涨跌幅排序。
    asc=0: 降序排序。
    node=hs_a: 节点类型，这里代表A股。
    symbol: 股票代码
    每页请求40条数据按涨跌幅降序排列 通过setdate渲染到前端*/
    // 数量
    wx.request({
      url: 'https://push2.eastmoney.com/api/qt/ulist.np/get?cb=jQuery112303162279136282231_1717490188886&fltt=2&secids=1.000001%2C0.399001&fields=f1%2Cf2%2Cf3%2Cf4%2Cf6%2Cf12%2Cf13%2Cf104%2Cf105%2Cf106&ut=b2884a393a59ad64002292a3e90d46a5&_=1717490188887',
      method: 'GET',
      success: res => {
        let str = res.data
        str = str.split('diff')
        str = str[1].substring(0, str[1].length - 5)
        str = str.substring(3)
        str = str.split(':')
        let num_add = Number(str[8].split(',')[0]) + Number(str[18].split(',')[0])
        let num_sub = Number(str[9].split(',')[0]) + Number(str[19].split(',')[0])//: 分别计算添加和删除的数量
        let sub_len = (num_sub / (num_add + num_sub)) * 100+'%'
        let add_len = (num_add / (num_add + num_sub)) * 100+'%'
        this.setData({ num_add, num_sub, sub_len,add_len })
      }
    })
  },
  go_test(e) {
    let index = e.currentTarget.dataset.index
    wx.setStorageSync('list', this.data.list[index])
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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