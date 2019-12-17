import { HTTP } from '../utils/http.js'

class DataModel extends HTTP {
  constructor() {
    super();
  };

  GetDataByList(data, res) {
    var params = {
      url: 'data/GetDataByList',
      method: 'post',
      success: res,
      data
    }
    this.request(params)
  }
};
export { DataModel }
