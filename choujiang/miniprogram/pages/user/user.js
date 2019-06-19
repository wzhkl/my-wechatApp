// miniprogram/pages/user/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '请先登录',
    avatarUrl: '../../images/avatar.png',
    allDrawNum: 30,
    launchNum: 2,
    winningNum: 8
  },

  onGotUserInfo: function (e) {
    let that = this;
    console.log(e)
    console.log(app)
    app.globalData.userName = e.detail.userInfo.nickName,
    this.setData({
      username: app.globalData.userName,
      avatarUrl: e.detail.userInfo.avatarUrl
    })

  },

  goSignIn() {
    wx.navigateTo({
      url: '../signIn/signIn'
    })
  },

  goAllDraw() {
    wx.navigateTo({
      url: '../allDraw/allDraw'
    })
  },
  goInitiated() {
    wx.navigateTo({
      url: '../initiated/initiated'
    })
  },
  goRecord() {
    wx.navigateTo({
      url: '../record/record'
    })
  },
  goBalance() {
    wx.navigateTo({
      url: '../balance/balance'
    })
  },
  goOfficialMall() {
    wx.navigateToMiniProgram({
      appId: 'wxafa4a9e3789623a7',
      path: '',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        console.log('打开成功')
      }
    })
  },
  goPersonal() {
    wx.navigateTo({
      url: '../personal/personal'
    })
  },
  goAdvance() {
    wx.navigateTo({
      url: '../advance/advance'
    })
  },
  goSpread() {
    wx.navigateTo({
      url: '../spread/spread'
    })
  },
  goRecommend() {
    wx.navigateTo({
      url: '../recommend/recommend'
    })
  },
  goMore() {
    wx.navigateTo({
      url: '../more/more'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      wishNum: app.globalData.wishNum
    })
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

  }
})