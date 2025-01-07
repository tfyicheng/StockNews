// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      itemFlag:1,
      changePage:true,
      flag:1,
      list:[
        {
          url:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww1.sinaimg.cn%2Fmw690%2F9da82ba5gy1gs4w7sxmuyj21ha0u0dwj.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1627990901&t=a2ae2b6bb9b43328729c1e566cef0e34",
          desc:"2021年7月4日14时57分,神舟十二号航天员,圆满完成出舱活."
        },
        {
          url:"http://img3.chinadaily.com.cn/images/202107/01/60dd28b8a3101e7c920de60d.jpeg",
          desc:"这是第二张图"
        },
        {
          url:"http://img3.chinadaily.com.cn/images/202107/01/60dd6edaa3101e7c920de81e.jpeg",
          desc:"这是第三张图"
        }
      ],
      center_news:[
        {
          desc:"盛夏时节，中国国家博物馆里人头攒动，“复兴之路”大型主题展馆吸引着各行各业的人们参观学习",
          imgurl:["https://t7.baidu.com/it/u=3435942975,1552946865&fm=193&f=GIF","https://t7.baidu.com/it/u=3691080281,11347921&fm=193&f=GIF","https://t7.baidu.com/it/u=3320851768,3486916246&fm=193&f=GIF"],
          from_where:"新浪",
          user_photo:"https://t7.baidu.com/it/u=1423490396,3473826719&fm=193&f=GIF",
          username:"娃哈哈",
          time:"5小时前",
          pinglun_num:"18850",
          zan_num:"19905"
        }
    ],
      bottom_news:[
        {
          url:"https://t7.baidu.com/it/u=2537031059,793067799&fm=193&f=GIF",
          desc:"美国要出台政策迅速遣返移民反对者怒批“非法”",
          from_where:"头条",
          username:"吃不胖的崽",
          user_photo:"https://t7.baidu.com/it/u=2537031059,793067799&fm=193&f=GIF",
          time:"3小时前"
        },
        {
          url:"https://article-fd.zol-img.com.cn/t_s640x2000/g6/M00/07/03/ChMkKmDhbgeIVcJFAAgyZj0dMq4AARdvgE926gACDJ-433.jpg",
          desc:"中俄轰炸机开展首次联合巡航",
          from_where:"头条",
          username:"吃瓜哈哈哈",
          user_photo:"https://t7.baidu.com/it/u=848096684,3883475370&fm=193&f=GIF",
          time:"6小时前"
        },
      ]
  },
  changeItemFlag(event){
    let index = parseInt(event.currentTarget.dataset.index)
    this.setData({
      itemFlag:index,
    })
  }


})

