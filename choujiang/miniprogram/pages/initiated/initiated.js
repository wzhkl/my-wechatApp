// miniprogram/pages/initiated/initiated.js
wx.cloud.init();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prize: [
      // {
      //   indexImgUrl: '../../images/yijiashouji.jpeg',
      //   sponsor: '一加官方商城',
      //   describe: '一加6T手机',
      //   prizeDay: '06月20日 10:00'
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    db.collection('initiatedDraw').where({
      _openid: 'omuXr4vmJTbXAuIKg04b-LEDnI9I'
    }).get({
      success: function (res) {
        console.log(res)
        that.setData({
          prize: res.data.slice()
        })
      }
    })

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