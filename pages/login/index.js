// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    phone: '', //手机号码
    valicode: '', //验证码
    username: '', //用户名
    password:'', // 第一次密码
    re_password: '' // 第二次密码
  },

  toggleSign() {
    this.setData({ isLogin: !this.data.isLogin})
    console.log(this.data.isLogin)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

})