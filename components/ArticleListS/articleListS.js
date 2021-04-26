Component({
  options: {
    multipleSlots:true
  },
  properties: {
    list: {
      type: Array,
      value:[]
    }
  },
  data: {
    
  },
  methods:{
    gotoArticle(content) {
      wx.navigateTo({
        url:`/pages/article/article?id=${content.currentTarget.dataset.id}`
      })
    }
  }
})