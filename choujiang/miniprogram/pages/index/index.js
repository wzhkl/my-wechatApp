//index.js
const app = getApp()

Page({
  data: {
    a:'123',
    prize: [
      {
        indexImgUrl: '../../images/yijiashouji.jpeg',
        sponsor: '一加官方商城',
        describe: '一加6T手机',
        prizeDay: '06月20日 10:00'
      },
      {
        indexImgUrl: 'http://img11.360buyimg.com/babel/s352x352_jfs/t1/4522/8/12858/225377/5bd52796E0ead8fc5/9a3c6379a353aafe.jpg',
        sponsor: '抽奖助手官方商城',
        describe: '索尼（SONY）KD-65X7500F 65英寸 4K HDR 智能网络 液晶电视 腾讯视频（黑色）',
        prizeDay: '06月22日 16:00'
      },
      {
        indexImgUrl: 'http://img14.360buyimg.com/n3/jfs/t949/27/995682656/66332/137eadb3/55655c54N15ce5207.jpg',
        sponsor: 'ReadHub',
        describe: '天梭(TISSOT)力洛克系列机械情侣表女表T41.1.183.33',
        prizeDay: '06月22日 07:00'
      }
    ],
    wishNum: 0

  },

  onLoad: function() {
    // if (!wx.cloud) {
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    // }

    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           this.setData({
    //             avatarUrl: res.userInfo.avatarUrl,
    //             userInfo: res.userInfo
    //           })
    //         }
    //       })
    //     }
    //   }
    // })

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
    if (res.from === 'button') {
      // 来自页面内转发按钮
      // console.log(res.target, '122121')
    }
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
  },
  
  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
