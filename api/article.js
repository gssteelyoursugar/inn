import { HTTP } from '../utils/http.js'

class ArticleModel extends HTTP {
  constructor() {
    super();
  };

  GetDataByInfo(id, res) {
    var params = {
      url: 'article/GetDataByInfo',
      method: 'get',
      success: res,
      data: { id}
    }
    this.request(params)
  }


};
export { ArticleModel }
