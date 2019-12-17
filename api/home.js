import { HTTP } from '../utils/http.js'

class HomeModel extends HTTP {
  constructor () {
    super();
  };

  GetHomeByData(data, res) {
    var params = {
      url: 'home/GetHomeByData',
      method: 'post',
      success: res,
      data
    }
    this.request(params)
  }
};
export { HomeModel }
