//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/流浪地球.jpg',
      '/images/囧途.jpg',
      '/images/风暴.jpg'
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