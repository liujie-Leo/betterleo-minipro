import ApiArticle from '../../api/api/service/article'
const apiArticle = new ApiArticle()
Page({
  data: {
    list: [],
    isEnd: false,
    isLoading: false,
    page: 1,
    pageSize: 11,
  },

  onLoad: function (options) {
    this.getData();
  },

  async onPullDownRefresh() {
    this.setData({
      page: 1,
      isEnd: false,
    });
    await this.getData();
    wx.stopPullDownRefresh();
    wx.showToast({
      title: "刷新成功",
      icon: "none",
    });
  },

  async onReachBottom() {
    if (this.data.isEnd) {
      return;
    }
    this.setData({
      page: this.data.page + 1,
    });
    await this.getMoreData();
  },

  onShareAppMessage: function () {},
  gotoArticle(content) {
    wx.navigateTo({
      url: `/pages/article/article?id=${content.currentTarget.dataset.id}`,
    });
  },
  getData() {
    apiArticle.getArticle({ pageSize: this.data.pageSize }).then((res) => {
      this.setData({
        list: res.data.list,
      });
    });
  },
  getMoreData() {
    this.setData({
      isLoading: true,
    });
    let params = {
      page: this.data.page,
      pageSize: this.data.pageSize,
    };
    apiArticle.getArticle(params).then((res) => {
      if (this.data.page >= res.data.total) {
        this.setData({
          isEnd: true,
        });
      }
      this.setData({
        list: this.data.list.concat(res.data.list),
        isLoading: false,
      });
    });
  },
  gotoTest() {
    wx.navigateTo({
      url:'/pages/test/test'
    })
  }
});