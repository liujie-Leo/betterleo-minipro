Component({
  options: {
    multipleSlots:true
  },
  properties: {
    tagList: {
      type: Array,
      value:[]
    }
  },
  data: {
    activeTag:''
  },
  methods:{
    onClickTag(e) {
      this.setData({
        activeTag:e.currentTarget.dataset.value
      })
      this.triggerEvent("onClickTag",e.currentTarget.dataset.value)
    }
  }
})