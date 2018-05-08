// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    catName:'',
    catType:'',
    sex:'',
    catAttr:'',
    ownImg:'',
    isShow:true,
    showView:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://www.easy-mock.com/mock/5ae2b3c4ab5bad29ce810a51/example/xiaocai",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },

  // 点击跳转到。。。
  routerTo:()=>{
    wx.redirectTo({
      url: '/pages/home/home'
    })
  },
  // 发帖
  sendTo:()=>{
    console.log("发帖")
  },
  
  // 滚动时触发
  scroll: function(){
    var that = this;
    that.setData({
      isShow: false,
      showView:true
    })
  },
  // 到顶部后触发
  upper: function () {
    console.log("123")
    var that = this;
    that.setData({
      isShow: true,
      showView: false
    })
  },
})