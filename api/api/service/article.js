import baseService from '../base'

export default class apiArticle extends baseService {
  constructor() {
    super('/api/article')
  }

  /**
   * 获取文章列表
   * @param {*} data
   */
  getArticle (data) {
    return super.get('getArticle', data)
  }
}