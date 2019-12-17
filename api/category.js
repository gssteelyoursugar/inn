
import { HTTP } from '../utils/http.js'

class CategoryModel extends HTTP {
  constructor() {
    super()
  }

  GeCategoryByList( res) {
    let params = {
      url: 'Category/GeCategoryByList',
      method: 'get',
      success: res,
    }
    this.request(params)
  }
};


export { CategoryModel }