// miniprogram/pages/spread/spread.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    card: [
      { url: '../../images/weixin.png', title: '个人微信号加粉', content: '在首页自助福利投放抽奖，图文全方位展示公众号吸引用户关注;使用高级版抽奖自行推广,性能稳定、永久保存'},
      { url: '../../images/public.png', title: '公众号推广和促活', content: '从抽奖助手小程序跳转公众号文章、展示公众号二维码/名称吸引粉丝关注在首页每日福利、自助福利投放抽奖，图文全方位展示公众号;在「互动广告」快速持续海量吸引粉丝关注' },
      { url: '../../images/yinliu.png', title: '小程序引流', content: '通过跳转赞助商小程序，定位到小程序特定页面或发放优惠券，直接导入新用户和购买转化' },
      { url: '../../images/xuyuan.png', title: '品牌宣传和推广', content: '根据品牌与产品特性量身定制「全场景引流方案」，介绍品牌特性与产品优势，吸引用户了解与转化' },
      { url: '../../images/lianjie.png', title: 'H5 链接引流', content: '可跳转赞助商H5链接，打开特定的手机网页' },
      { url: '../../images/hezuo.png', title: '更多合作', content: '如有其他合作意向，或成为公众号「心愿孵化器」赞助商，欢饮联系我们' }
    ],
    partner: [
      {
        img: '../../images/dazhongdianping.png',
        name: '大众点评'
      },
      {
        img: '../../images/lenovo.png',
        name: '联想'
      },
      {
        img: '../../images/baoma.png',
        name: '华晨宝马'
      },
      {
        img: '../../images/yijia.png',
        name: '一加'
      },
      {
        img: '../../images/naike.png',
        name: '耐克'
      },
      {
        img: '../../images/xingqiu.png',
        name: '知识星球'
      },
      {
        img: '../../images/aimashi.png',
        name: '爱马仕'
      },
      {
        img: '../../images/zhijin.png',
        name: '清风'
      },
      {
        img: '../../images/MAC.png',
        name: '阿玛尼'
      },
      {
        img: '../../images/OPPO.png',
        name: 'OPPO'
      },
      {
        img: '../../images/sanumbrella.png',
        name: '天堂'
      },
      {
        img: '../../images/erji.png',
        name: 'beats'
      },
      {
        img: '../../images/sanzhisongshu.png',
        name: '三只松鼠'
      },
      {
        img: '../../images/xiaomi.png',
        name: '小米'
      },
      {
        img: '../../images/daier.png',
        name: '戴尔'
      },
      {
        img: '../../images/hongjiufang.png',
        name: '红酒坊'
      }
    ],
    ellipsis: true
  },

  ellipsis () {
    this.setData({
      ellipsis: !this.data.ellipsis
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