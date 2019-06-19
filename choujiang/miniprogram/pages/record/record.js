// miniprogram/pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sayings: [
      {content:'她曾经说过，如果有一天我走丢了，就在原地等着，她会来找我',author:'《蓝莓之夜》'},
      {content:'“你好吗”    “我很好”',author:'《情书》'},
      {content:'我向星星许了个愿望。我并不是真的相信它，但是反正也是免费的，而且也没有证据证明它不灵',author:'《加菲猫》'},
      {content:'你的内心肯定有着某种火焰，能把你和其他人区分开来',author:'J·M·库切'},
      {content:'只有那些躺在坑里从不仰望高空的人，才不会再掉进坑里',author:'黑格尔'},
      {content:'海明威说过：“这个世界很美好，我们应该为之奋斗。”    我同意后半句',author:'《七宗罪》'},
      {content:'人永远不知道，谁哪次不经意的跟你说了再见之后，就真的不会再见了',author:'《千与千寻》'},
      {content:'岁月永远年轻，我们慢慢老去，你会发现，童心未泯，是一件值得骄傲的事情。',author:'宫崎骏'},
      {content:'草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。',author:'顾城 《门前》'},
      {content:'人生不过如此，且行且珍惜。自己永远是自己的主角，不要总在别人的戏剧里充当着配角。',author:'林语堂 《人生不过如此》'}
    ],
    content: '',
    author: ''
  },

  goIndex() {
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let i = Math.floor(Math.random() * 10);

    this.setData({
      content: this.data.sayings[i].content,
      author: this.data.sayings[i].author
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