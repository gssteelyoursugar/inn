import { HTTP } from '../utils/http.js'

class CollModel extends HTTP {
  constructor() {
    super();
  };

  PostCollection(data, res) {
    var params = {
      url: 'Coll/PostCollection',
      method: 'post',
      success: res,
      data
    }
    this.request(params)
  }

  GetUserCollectionByList(data, res) {
    var params = {
      url: 'Coll/GetUserCollectionByList',
      method: 'post',
      success: res,
      data
    }
    this.request(params)
  }

  
};
export { CollModel }
