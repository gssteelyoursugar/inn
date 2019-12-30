// pages/home/reservation/reservation.js
const base_path = '../../../static/img/';
const app = getApp();
// 这是该页面对应的 “路径前缀”
import { OrderModel } from '../../../api/order.js';
let list = new OrderModel();

import { PayModel } from '../../../api/pay.js';
let payModel = new PayModel();



Page({

  /**
   * 页面的初始数据
   */
  data: {
    details_id: '', //房源详情id
    bar_url: '', //图片地址
    lazyLoad: true, //图片懒加载
    openid: '', //用户id
    image: '',
    title: '',
    price: '',
    door: "",
    live: '',
    scenery: '',
    mode: 'aspectFill',
    inTime: '', //入住时间
    outTime: '', //离开时间
    Wan: '', //入住几晚
    price: '', //房间单价
    yajin: 0, //房间押金
    num: 1, //入住人数
    jia: base_path + 'jia.png', mode: 'aspectFill',
    jian: base_path + 'jian.png', mode: 'aspectFill',
    you: base_path + 'you.png', mode: 'aspectFill',
    phone: '', //联系电话
    zongprice: '', //房费加押金
    charge: "", //全部房费
    detailModel: false,
    name: '', //入住人姓名
    nameid: '', //入住人id
    chlist: 0, //优惠券金额
    id: '',//获取到的优惠券id(根据id删除使用的优惠券))
    vouchlist: 0, //优惠券长度
  },
  //获取电话
  bindKeyInput(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  //点击增加
  jia(e) {
    var num = this.data.num;
    if (num < 30) {
      num++;
    }
    this.setData({
      num: num
    })
  },

  //点击减少
  jian(e) {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    this.setData({
      num: num
    })
  },
  //选择入住人
  person() {
    wx.navigateTo({
      url: "/pages/home/person/person"
    })
  },
  //优惠券
  coupons() {
    wx.navigateTo({
      url: "/pages/home/vouchers/vouchers"
    })
  },
  //明细弹出
  detail() {
    this.setData({
      detailModel: !this.data.detailModel
    })
  },
  //支付页面
  Paybuttom(e) {
    var userInfo = wx.getStorageSync('userInfo')
    var temp = {
      user_id: app.globalData.user_id, //用户id
      housing_id: this.data.details_id, //房源id
      number: this.data.num, //入住人数
      contact_id: this.data.nameid, //入住人id
      phone: this.data.phone, //入住电话
      inTime: this.data.inTime, //入住时间
      outTime: this.data.outTime, //离开时间
      total_price: this.data.charge, //房费
      zongprice: this.data.zongprice, //总金额（房费加押金）
      yajin: this.data.yajin, //押金
      wan: this.data.Wan, //入住几晚
    }
    var name = this.data.name
    var phone = this.data.phone
   if (phone == '') {
      wx.showToast({
        icon: 'none',
        title: '还没添加号码',
      })
    } else {
      //1.提交数据 2.跳转支付成功页面
      var that = this;

     var paytemp={
       openid: userInfo.openid,
        price:this.data.zongprice
    }
     payModel.toPay(paytemp, dres => {
       wx.requestPayment({
         timeStamp: dres.timeStamp,
         nonceStr: dres.nonceStr,
         package: dres.package,
         signType: 'MD5',
         paySign: dres.paySign,
         success(res) {
           temp.status = 2
           temp.out_trade_no = dres.out_trade_no
          //  ordermodel.PostOrderByData(temp, res => {
          //    that.data.pay = true
          //    wx.redirectTo({
          //      url: '/pages/home/order/index',
          //    })
          //    wx.setStorageSync('cart', [])
          //  })

           list.postOrder(temp, res => {
        that.setData({
          imgCity: res
        })
        if (res) {
          var id = res.id;
          wx.navigateTo({
            url: "/pages/orderinfo/index?id=" + id
          })
        }
      })
         },
         fail(res) {
           temp.order.status = 1
           list.postOrder(temp, res => {
             wx.redirectTo({
               url: "/pages/orderinfo/index?id=" + id
             })
             wx.setStorageSync('cart', [])
           })
         }
       })
       return;
     })

     

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userInfo = wx.getStorageSync('userInfo')
    var title = options.title;
    var price = options.price;
    var door = options.door;
    var live = options.live;
    var scenery = options.scenery;
    var inTime = wx.getStorageSync('dataRuzhu')
    var outTime = wx.getStorageSync('dataLikai')
    var yajin = options.deposit
    var image = options.image
    var Wan = wx.getStorageSync('wan')
    var details_id = options.details_id;
   
    
    var chlist = this.data.chlist
      this.setData({
        title: title,
        price: price,
        door: door,
        live: live,
        scenery: scenery,
        inTime: inTime,
        outTime: outTime,
        yajin: yajin,
        image: image,
        Wan: Wan,
        phone:userInfo.realname.mobile,
        details_id: details_id,
        charge: parseInt(options.price) * parseInt(Wan),
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    var that = this;
    var price = this.data.price;
    var yajin = this.data.yajin;
    var Wan = this.data.Wan;
    var chlist = this.data.chlist;
    var bar_url = app.globalData.bar_url;
    this.setData({
      zongprice: (parseInt(price) * parseInt(Wan))
    })
    that.setData({
      bar_url: bar_url
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})