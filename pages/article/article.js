const app = getApp()
import ApiArticle from '../../api/api/service/article'
const apiArticle = new ApiArticle()
Page({

  data: {
    article: {},
    articleInfo:{},
    id:''
  },

  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    this.getData()
  },

  onShareAppMessage: function () {

  },
  
  getData() {
    apiArticle.getArticle({ id: this.data.id }).then(res => {
      let result = app.towxml(res.data.list[0]['content'],'markdown',{
        // theme:'dark',				
      });
      this.setData({
        article: result,
        articleInfo:res.data.list[0]
      })
    })
  }
})