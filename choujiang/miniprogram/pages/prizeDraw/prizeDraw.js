// miniprogram/pages/prizeDraw/prizeDraw.js
import { $wuxCalendar } from '../../components/dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drawBgUrl: '../../images/imgFileBg.jpg',
    fileList: [],
    value1: [],
    value2: [],
    value3: [],
    value4: [],
    ischoose: false
  },

  openCalendar1() {
    $wuxCalendar().open({
        value: this.data.value1,
        onChange: (values, displayValues) => {
            console.log('onChange', values, displayValues)
            this.setData({
                value1: displayValues,
            })
        },
    })
},

  onChange(field, e) {
    this.setData({
      [field]: e.detail.value
    })
  },
  onChange1(e) {
    this.onChange('ischoose', e)
  },

  // 上传图片
  doUpload: function () {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: '', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          // formData: {
          //   'user': 'test'
          // },
          success(res) {
            console.log('this is res',res);
            // const data = res.data
            //do something
          }
        })
      }
    })
    // 选择图片
    // wx.cloud.init();
    // wx.chooseImage({
    //   count: 1,
    //   sizeType: ['compressed'],
    //   sourceType: ['album', 'camera'],
    //   success: function (res) {

    //     wx.showLoading({
    //       title: '上传中',
    //     })
    //     console.log(res.tempFilePaths)
    //     const filePath = res.tempFilePaths[0]
        

    //     // 上传图片
    //     const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
    //     wx.cloud.uploadFile({
    //       cloudPath,
    //       filePath,
    //       success: res => {
    //         console.log('[上传文件] 成功：', res)

    //         app.globalData.fileID = res.fileID
    //         app.globalData.cloudPath = cloudPath
    //         app.globalData.imagePath = filePath

    //         wx.navigateTo({
    //           url: '../storageConsole/storageConsole'
    //         })
          },
  //         fail: e => {
  //           console.error('[上传文件] 失败：', e)
  //           wx.showToast({
  //             icon: 'none',
  //             title: '上传失败',
  //           })
  //         },
  //         complete: () => {
  //           wx.hideLoading()
  //         }
  //       })

  //     },
  //     fail: e => {
  //       console.error(e)
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideTabBar()
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
    wx.switchTab({
      url: '../index/index'
    })
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