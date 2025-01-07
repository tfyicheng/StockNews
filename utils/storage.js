const setStorage = (key,data) => {
  wx.setStorage({
    key: key, // 本地存储的键名
    data: data,   // 需要存储的数据，可以是任意类型
    success: function () {
      // 存储成功后的回调函数
      console.log('存储成功');
      return true
    },
    fail: function (err) {
      // 存储失败后的回调函数
      console.error('存储失败', err);
      return false
    }
  });
 //  setStorageSync(key,data)
} 

const getStorage = key => {
  // wx.getStorage({
  //   key: key, // 本地存储的键名
  //   success: function (res) {
  //     // 获取成功后的回调函数，res.data 包含存储的数据
  //     console.log('获取成功', res.data);
  //     return res.data
  //   },
  //   fail: function (err) {
  //     // 获取失败后的回调函数
  //     console.error('获取失败', err);
  //     return null
  //   }
  // });
  return wx.getStorageSync(key)
} 



module.exports = {
  setStorage,
  getStorage
}

