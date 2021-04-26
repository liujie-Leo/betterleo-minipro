export default class Http {
  constructor(api_base) {
    this.api_base = api_base
  }

  request(config) {
    return new Promise((resolve, reject) => {
      wx.request({
        ...config,
        url: this.api_base + config.api_path,
        success: (res) => {
          if (res.statusCode === 200) {
            if (res.data.status === 10000) {
              resolve(res.data)
            }
          } else {
            if (config.ignoreError) {
              return resolve(res.data)
            } else {
              wx.showModel({
                title: '错误提醒',
                content: res.data.message,
                showCancel:false
              })
            }
          }
        },
        fail: (error) => {
          reject(error)
        }
      })
    })
  }

  get(api_path, data) {
    const header = {
      'content-type':'application/json'
    }
    return this.request({
      api_path,
      data,
      header,
      method:'GET'
    })
  }

  post() {
    
  }

  uploadFile() {
    
  }
}