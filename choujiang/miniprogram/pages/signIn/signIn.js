// miniprogram/pages/signIn/signIn.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daily: [
      {dayNum: '一', wishNum: 1},
      {dayNum: '二', wishNum: 1},
      { dayNum: '三', wishNum: 2 },
      { dayNum: '四', wishNum: 3 },
      { dayNum: '五', wishNum: 5 },
      { dayNum: '六', wishNum: 8 },
      { dayNum: '七', wishNum: 13 }
    ],
    task: [
      { work: '参与首页抽奖3次',
        riseNum: 1,
        finishedNum: 0,
        totalNum: 3
       },
      { work: '参与首页抽奖7次',
        riseNum: 1,
        finishedNum: 0,
        totalNum: 7 },
      { work: '参与首页抽奖15次',
        riseNum: 2,
        finishedNum: 0,
        totalNum: 15 },
      { work: '参与首页抽奖30次及以上',
        riseNum: 7,
        finishedNum: 0,
        totalNum: 30 }
    ],
    exchangeShop: [
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i2/725677994/TB2PUettRyWBuNkSmFPXXXguVXa_!!725677994.jpg_160x160q90.jpg',
        name: '双汇王中王火腿肠30g*8支',
        cost: 1
      },
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i1/725677994/O1CN01Ffqem028vIfOfFDgx_!!725677994.jpg_160x160q90.jpg',
        name: '百事可乐碳酸汽水饮料整箱330ml*24',
        cost: 2
      },
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i3/725677994/O1CN010yNrQe28vIgPUem2z_!!0-item_pic.jpg_160x160q90.jpg',
        name: '杜蕾斯避孕套激爽四合一32只',
        cost: 3
      },
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i3/725677994/TB2zpQOAL9TBuNjy0FcXXbeiFXa_!!725677994.jpg_160x160q90.jpg',
        name: '日本资生堂洗面奶120g男女深层清洁',
        cost: 2
      },
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i3/725677994/O1CN01Sw0MAQ28vIgSWLHI7_!!725677994.jpg_160x160q90.jpg',
        name: '飞天茅台酒国产白酒43度500ml酱香型白酒',
        cost: 5
      },
      {
        shopUrl: 'http://img.alicdn.com/bao/uploaded/i3/725677994/TB2gzu7bH2pK1RjSZFsXXaNlXXa_!!725677994.jpg_160x160q90.jpg',
        name: '水星家纺蚕丝被春秋被芯',
        cost: 3
      }
    ],
    // heartNum: 2,
    wishNum: app.globalData.wishNum,
    gotIt: false,
    signInStatus: true
  },

  signInGet() {
    this.setData({
      signInStatus: false,
      gotIt: true
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