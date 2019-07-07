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
    goParticipate: function(event) {
      console.log(event.currentTarget.dataset.prizeid);
      // 根据奖品的ID, 跳转到奖品对应的参与详情
      wx.navigateTo({
        url: `../participate/participate?prizeid=${event.currentTarget.dataset.prizeid}`
      });
    }
  }
})
