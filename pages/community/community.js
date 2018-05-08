// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catArray: [{
      id: 1,
      img: '../../images/cat_1.jpg',
      name: '咖啡猫儿',
      time: '2018.5.01',
      owner: '阳叔'
    }, {
      id: 2,
      img: '../../images/cat_2.jpg',
      name: '虎汴',
      time: '2018.4.28',
      owner: '错过'
    }, {
      id: 3,
      img: '../../images/cat_3.jpg',
      name: '噗噗',
      time: '2018.4.27',
      owner: '产品萌新-新月'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'test.php',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res);
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    wx.setNavigationBarTitle({
        title: '喵与猫寻',
      }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#cd9054',
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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