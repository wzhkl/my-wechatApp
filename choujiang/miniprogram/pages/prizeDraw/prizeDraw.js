// miniprogram/pages/prizeDraw/prizeDraw.js
import { $wuxCalendar } from '../../components/dist/index';
// 初始化数据库
wx.cloud.init();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    drawBgUrl: '../../images/imgFileBg.jpg',
    fileList: [],
    ischoose: false,
    prizeName: '',
    prizePart: '',
    prizeTime: []
  },

  getPrizeTime() {
    $wuxCalendar().open({
      value: this.data.prizeTime,
        onChange: (values, displayValues) => {
            console.log('onChange', values, displayValues)
            this.setData({
              prizeTime: displayValues,
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
    let that = this;
    // wx.cloud.init();
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        wx.cloud.uploadFile({
          cloudPath: 'background.png', // 上传至云端的路径
          filePath: tempFilePaths[0], // 临时文件文件路径
        }).then(res => {
          // 返回文件的 ID
          // console.log(res.fileID)
          db.collection('prizeDrawImage').add({
            data: {
              fileID: res.fileID
            }
          }).then(res => {
            console.log('----', res)
            db.collection('prizeDrawImage').where({
              _openid: 'omuXr4vmJTbXAuIKg04b-LEDnI9I'
            }).get().then(res => {
              console.log('加载的图片', res)
              that.setData({
                drawBgUrl: res.data[0].fileID
              })
              console.log('背景图', that.data.drawBgUrl)
            })
          }).catch(error => {
            console.log(error)
          })
        }).catch(error => {
          console.log(error)
        })
      }
    })
  },

  getPrizeName(e) {
    this.setData({
      prizeName: e.detail.value
    })
  },
  getPrizePart(e) {
    this.setData({
      prizePart: e.detail.value
    })
    // console.log(this.data.prizePart)
  },

  initiated() {
    db.collection('initiatedDraw').add({
      data: {
        prizeName: this.data.prizeName,
        prizeTime: this.data.prizeTime,
        prizePart: this.data.prizePart
      }
    }).then(res => {
      console.log(res)
      wx.showLoading({
        title: '发起抽奖中',
      })

      setTimeout(function () {
        wx.hideLoading()
        wx.showToast({
          title: '发起成功',
          icon: 'success',
          duration: 1000
        })
      }, 2000)

    }).catch(err => {
      console.log(err)
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
    // wx.switchTab({
    //   url: '../index/index'
    // })
    wx.reLaunch({
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