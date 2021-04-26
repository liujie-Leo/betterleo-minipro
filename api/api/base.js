export default class BaseService {
  constructor(api_path) {
    this.api_path = api_path
  }

  get(api_path,data) {
    return wx.$http.get(this.api_path+'/'+api_path,data)
  }

  post() {
    
  }
}