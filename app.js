import Http from './api/http'
import api_base from './server/baseUrl'
wx.$http = new Http(api_base)
import { promisifyAll } from "./api/wxPromise";
App({
  onLaunch: function () {
    this.globalData = {}
    this.login()
  },
  onShow() {
    promisifyAll();
  },
  towxml: require('/towxml/index'),
  login() {
    // wx.login({
    //   success: function (e) {
    //     console.log(e)
    //   }
    // })
  }
  
})
