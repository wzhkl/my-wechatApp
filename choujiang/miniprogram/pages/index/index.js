//index.js
const app = getApp()
wx.cloud.init();

Page({
  data: {
    a:'123',
    prize: [],
    wishNum: 0
  },

  getPrizeInfo () {
    wx.showLoading({
      title: '好运加载中',
      icon: 'loading',
      duration: 1000
    })
    wx.cloud.callFunction({
      name: 'prizeInfo'
    }).then(res => {
      console.log(res)
      this.setData({
        // res.result 是个字符串 需要转换成对象，再给到prize
        prize: JSON.parse(res.result).prize
      })
      // wx.hideLoading();
    }).catch(err => {
      console.log(err)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.getPrizeInfo()
  },

  goSignIn() {
    wx.navigateTo({
      url: '../signIn/signIn'
    })
  },

  upIndex() {
    wx.navigateTo({
      url: '../upIndex/upIndex'
    })
  },

  onShareAppMessage: function (res) {
    // if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target, '122121')
    // }
    return {
      title: '让抽奖更公正，便捷，有趣',
      desc: '抽奖助手',
      path: '/index'//这是一个路径
    }
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      wishNum: app.globalData.wishNum
    })
    this.getPrizeInfo();
  },
  
  /**
 * 页面上拉触底事件的处理函数
 */
  onReachBottom: function () {
    
  },
})
