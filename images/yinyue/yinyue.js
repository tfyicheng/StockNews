// components/yinyue/yinyue.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    itemFlag:1,
    bottom_news:[
      {
        desc:"歌手千小库养成易瘦体质分享减肥菜单1年狂甩7公斤",
        from_where:"头条",
        user_photo:"../../images/redian/1.jpg",
        username:"吃不胖的崽",
        time:"4小时前",
        imgurl:"../../images/redian/2.png"
      },
      {
        desc:"全民嗨唱PK'亚洲摇滚歌王'抢票活动火爆开启",
        from_where:"头条",
        user_photo:"../../images/redian/1.jpg",
        username:"啥玩意",
        time:"3小时前",
        imgurl:"../../images/redian/3.png"
      },
      {
        desc:"全民嗨唱PK'亚洲摇滚歌王'抢票活动火爆开启",
        from_where:"微博",
        user_photo:"../../images/redian/1.jpg",
        username:"啥玩意",
        time:"3小时前",
        imgurl:"../../images/redian/3.png"
      }
    ],
    recom_list:[
      {
        url:"https://imagev2.xmcdn.com/group55/M03/17/A0/wKgLf1xQ-vzRaNcNAAB0we-4MtY066.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
        song_name:"我们相同的梦",
        singer_name:"高合一"
      },
      {
        url:"https://imagev2.xmcdn.com/group76/M00/5F/43/wKgO3l5eC3OD9QWNAAER4K4K8sY349.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
        song_name:"宇宙之光",
        singer_name:"张珊珊"
      },
      {
        url:"https://imagev2.xmcdn.com/storages/b6d5-audiofreehighqps/FD/07/CMCoOSUEIkFbAABoiQCR1-w6.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
        song_name:"我流浪人生",
        singer_name:"小尾巴"
      },
      {
        url:"https://img-qn.51miz.com/Element/00/58/75/53/938e5294_E587553_ba14a1d6.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/630",
        song_name:"时光尽头",
        singer_name:"刘大大"
      },
      {
        url:"https://imagev2.xmcdn.com/group40/M06/B5/E7/wKgJVFrHiE3QPDgEAAH9lZYedFI343.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
        song_name:"New boy",
        singer_name:"朴树"
      },
      
    ]
,
  recom_list1:[
    {
      url:"https://imagev2.xmcdn.com/group16/M02/5D/54/wKgDbFcpubOAcFbpAAFgmIO_2l8844.jpg!strip=1&quality=7&magick=webp&op_type=3&columns=290&rows=290",
      song_name:"夜色钢琴曲",
      singer_name:"赵海洋"
    },
    {
      url:"https://imagev2.xmcdn.com/storages/1fba-audiofreehighqps/0A/CD/CMCoOSYEQe8QAAE15wCbKEdd.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
      song_name:"冬",
      singer_name:"隽林"
    },
    {
      url:"https://imagev2.xmcdn.com/storages/3e50-audiofreehighqps/5B/44/CKwRIRwEndL5AAF8CwC5xoaT.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
      song_name:"此生已过半",
      singer_name:"小尾巴"
    },
    {
      url:"https://imagev2.xmcdn.com/group78/M05/91/D3/wKgO4F5h-vnCZ7WjAALfS3UsxtU046.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios",
      song_name:"时光尽头",
      singer_name:"刘大大"
    },
    {
      url:"https://img-qn.51miz.com/Element/00/58/75/53/938e5294_E587553_ba14a1d6.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/630",
      song_name:"New boy",
      singer_name:"朴树"
    } 
  ]
},
 /**
   * 组件的方法列表
   */
  methods: {
    changeItemFlag(event){
      let index = parseInt(event.currentTarget.dataset.index)
      this.setData({
        itemFlag:index
      })
    }
  }
})
