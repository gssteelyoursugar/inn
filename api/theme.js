import { HTTP } from '../utils/http.js'

class ThemeModel extends HTTP {
  constructor() {
    super();
  };

  GetThemeIdByList(data, res) {
    var params = {
      url: 'theme/GetThemeIdByList',
      method: 'get',
      success: res,
      data
    }
    this.request(params)
  }
};
export { ThemeModel }
