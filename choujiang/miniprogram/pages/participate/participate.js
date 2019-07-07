// miniprogram/pages/participate/participate.js
const app = getApp();
// 初始化数据库
wx.cloud.init();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    prize: {},
    participateStatus: '参加抽奖'
    
  },

  onShareAppMessage: function (res) {
    return {
      title: '让抽奖更公正，便捷，有趣',
      desc: '抽奖助手',
      path: '/index'//这是一个路径
    }
  },
  participate () {
    wx.showToast({
      title: '参与成功',
      icon: 'success',
      duration: 1000
    })
    // console.log(prizeParticipator)
    this.setData({
      participateStatus: '参与成功'
    });
    app.globalData.allDrawNum++;
    // console.log('之后',prizeParticipator);

    db.collection('DrawPrizeInfo').add({
      data: {
        prizeid: this.data.prize.id,
        indexImgUrl: this.data.prize.indexImgUrl,
        sponsor: this.data.prize.sponsor,
        describe: this.data.prize.describe,
        prizeDay: this.data.prize.prizeDay
      }
    }).then(res => {
      console.log('----', res)
    }).catch(err => {
      console.log(err)
    })
    console.log(app.globalData.allDrawNum)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 调用云函数 根据id， 获取对应的详情页面中的数据
    wx.cloud.callFunction({
      name:'getPrizeID',
      data: {
        prizeid: options.prizeid
      }
    }).then(res => {
      console.log('----',res);
      this.setData({
        prize: JSON.parse(res.result)
      })
    }).catch(err => {
      console.log(err);
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