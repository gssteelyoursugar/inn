// pages/login/index.js

import { UserModel } from '../../api/user.js';
let usermodel = new UserModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,

    nameID:'',//身份证
    name:'',//用户真实姓名
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
  //输入真实姓名
  onName(e){
    this.setData({
      name: e.detail
    })
  },
  //输入身份证号码
  onNameId(e) {
    this.setData({
      nameID: e.detail
    })
  },
 
  //输入手机号码
  onPhone(e) {
    this.setData({
      phone: e.detail
    })
  },
  getUserInfo(e) {

    var userinfo = wx.getStorageSync('userInfo')
    var contact={
      mobile:this.data.phone,
      nameID: this.data.nameID,
      name: this.data.name,
      user_id: userinfo.id
    }
    var temp={
      user: e.detail.userInfo,
      contact,
    }
    usermodel.postBind(temp,res=>{
      wx.showToast({
        title: '绑定成功',
        icon: 'none',
      })
      var vtemp={
        openid: userinfo.openid,
      }
      usermodel.postRegistered(vtemp, res => {
        wx.setStorage({
          key: 'userInfo',
          data: res,
        })

        wx.switchTab({
          url: '/pages/index/index'
        })
      })
    
    })
  
  },
})