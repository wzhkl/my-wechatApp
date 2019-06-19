// components/case/case.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    prize:{
      type:[],
      value:''
    }
    // indexImgUrl: {
    //   type: null,
    //   value: '../../images/yijiashouji.jpeg'
    // },
    // sponsor: {
    //   type: String,
    //   value: '一加官方商城'
    // },
    // describe: {
    //   type: String,
    //   value: '一加6T手机(颜色可选)'
    // },
    // prizeDay: {
    //   type: null,
    //   value: '05月20日 10:00'
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    attach: function(e) {
      console.log(this.properties.describe)
      console.log('-----',this.data)
      console.log(this.dataset)
    }
  }
})
