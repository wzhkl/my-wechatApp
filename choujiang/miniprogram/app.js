//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      userName: '请先登录',
      winningNum: 0,
      allDrawNum: 0,
      launchNum: 0,
      wishNum: 20
    }
  }
})
