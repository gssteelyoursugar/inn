//app.js

import { UserModel } from '/api/user.js';
let usermodel = new UserModel();
App({

  globalData:{
    day: '',//日期
    intimestamps: '',//入住时间参数
    outtimestamps: '',//离开时间参数
  },
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        var that = this;
        var code = res.code; //返回code
        // console.log(code);
        //获取openid唯一标识
        var appid = 'wxff4be0de0b89016e';
        var secret = '8de87ebbf2080a6f3979b1c7485b3091';
        var temp = {
          appid,
          secret,
          code
        }
        usermodel.GetUserByOenid(temp, res => {
          var openid = res.openid //返回openid
          that.globalData.openid = res.openid
          var temp = {
            openid: openid,
          }
          usermodel.postRegistered(temp, res => {
            that.globalData.user_id = res.id
            wx.setStorage({
              key: 'userInfo',
              data: res,
            })
          })

        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    homeruzhuTime: '',//入住时间
    homelikaiTime: ''//离店时间
  }
})