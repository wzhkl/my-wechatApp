// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
var rp = require('request-promise');

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  // 请求接口 
  return rp(`https://www.easy-mock.com/mock/5ce3e5389c7de85c5be2b724/drawPrize/prize-info/id=${event.prizeid}`)
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.log(err);
    });
}