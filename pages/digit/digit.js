import ApiArticle from '../../api/api/service/article'
const apiArticle = new ApiArticle()
import {digitSubType} from '../../json/data'
Page({

  data: {
    tagList: digitSubType,
    page: 1,
    pageSize:11,
    isLoading: false,
    isEnd: false,
    subType: '',
  },

  onLoad: function (options) {
    this.getData()
  },

  onReady: function () {

  },

  onShow: function () {

  },


  async onPullDownRefresh() {
    this.setData({
      page: 1,
      isEnd: false,
    })
    await this.getData()
    wx.stopPullDownRefresh()
    wx.showToast({
      title: '刷新成功',
      icon: 'none'
    })
  },

  onReachBottom: function () {
    if (this.data.isEnd) {
      return
    }
    this.setData({
      page:this.data.page+1
    })
    this.getMoreData()
  },

  onShareAppMessage: function () {

  },
  getData() {
    apiArticle.getArticle({pageSize:this.data.pageSize,type:'digit',subType:this.data.subType}).then(res => {
      this.setData({
        list:res.data.list
      })
    })
  },
  getMoreData() {
    this.setData({
      isLoading:true
    })
    let params = {
      page: this.data.page,
      type: 'digit',
      pageSize: this.data.pageSize,
      subType:this.data.subType
    }
    apiArticle.getArticle(params).then(res => {
      if (this.data.page >= res.data.total) {
        this.setData({
          isEnd:true
        })
      }
      this.setData({
        list: this.data.list.concat(res.data.list),
        isLoading:false
      })
    })
  },
  onClickTag(value) {
    this.setData({
      subType: value.detail,
      page: 1,
      isEnd:false
    })
    this.getData()
  },
})