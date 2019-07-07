//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/liulangdiqiu.jpg',
      '/images/jiongtu.jpg',
      '/images/fengbao.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular:true
  },
  // 跳转页面    
  tofilm: function (){
  wx.navigateTo({
  url: "/pages/film/film"
    })
  } 
})

Page({
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  }
})