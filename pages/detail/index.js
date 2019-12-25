// pages/detail/index.js
import {
  getWeek
} from '../../api/user.js'





import { HomeModel } from '../../api/home.js';
let homemodel = new HomeModel();





import { PayModel } from '../../api/pay.js';
let payModel = new PayModel();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    detailslist:{},
    details_id:'',
    is_realname: false, //是否实名注册
    homeruzhuTime: '', //入住时间
    homelikaiTime: '', //离店时间
    wan: 0, // 默认0晚
    inWeek: '',
    outWeek: '',
    str: '', //用来判断页面数据
    star: 5,
    swiperList: [{
        id: 1,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210014561336_1100_733.jpg'
      },
      {
        id: 2,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008014002_1100_733.jpg'
      },
      {
        id: 3,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008053276_1100_733.jpg'
      },
      {
        id: 4,
        images_url: 'https://pic.tujia.com/upload/landlordunit/day_191021/thumb/201910210008284436_1100_733.jpg'
      },
    ],
    interval: 1500,
    circular: true,
    showBox: true,
    tabs: ['详情', '点评', '须知', '推荐'],
    curIndex: 0,
    showMoreText: false,
    star: 5,
    user_star: 5,
    is_coll: false,
    house_id: ''
  },

  clickTabs(e) {
    let {
      index
    } = e.currentTarget.dataset
    this.setData({
      curIndex: index
    })
  },


getInfo(){
  var that=this;
  //后台数据 详情表
  var homeID = this.data.details_id;  //获取到的id
  homemodel.GetBydetailsID(homeID, res => {
    that.setData({
      detailslist: res.data
    })

    that.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
      markers: [{
        id: 0,
        title: res.data.title,
        latitude: res.msg.lat,
        longitude: res.msg.lng,
        iconPath: '../../../images/home/placeholder.png', //图标路径
        width: 30,
        height: 30
      }],
      poi: { //根据自己data数据设置相应的地图中心坐标变量名称
        latitude: res.msg.lat,
        longitude: res.msg.lng,
      }
    });
  })
},
  toggleMoreText() {
    this.setData({
      showMoreText: !this.data.showMoreText
    })
  },
  // 
  preventPop() {
    return;
  },
  // 点击收藏
  clickToCollect() {
    console.log(123)
    this.setData({
      is_coll: !this.data.is_coll
    })

  },
  // 点击信息
  clickToMsg() {
    console.log(123)
    this.setData({
      is_coll: !this.data.is_coll
    })

  },
  // 跳转选择时间
  clickToPickTime() {
    wx.navigateTo({
      url: '/pages/component/datatime/index',
    })
  },
  // 立即预定 
  clickToComfirm() {
    var userinfo = wx.getStorageSync('userInfo')
    let temp ={
      openid: userinfo.openid
    }


    payModel.toPay(temp, dres => {
      wx.requestPayment({
        timeStamp: dres.timeStamp,
        nonceStr: dres.nonceStr,
        package: dres.package,
        signType: 'MD5',
        paySign: dres.paySign,
        success(res) {
            console.log(res)

        },
        fail(res) {
          temp.order.status = 1
          ordermodel.PostOrderByData(temp, res => {
            wx.redirectTo({
              url: '/pages/home/order/index',
            })
            wx.setStorageSync('cart', [])
          })
        }
      })
      return;
    })
    console.log(temp)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.details_id = options.details_id
    // let {
    //   house_id
    // } = options.detail
    // this.setData({
    //   house_id
    // })
    // console.log(this.data.house_id)
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

    let query = wx.createSelectorQuery();
    query.select('.more-detail-bar').boundingClientRect(res => { //获取元素1距离页面顶部高度
    }).exec()

    var userInfo = wx.getStorageSync('userInfo')
    if (userInfo.realname === null) {
      this.setData({
        is_realname: false
      })
    } else {
      this.setData({
        is_realname: true
      })
    }
    let that = this;
    let homeruzhuTime = wx.getStorageSync('dataRuzhu')
    let homelikaiTime = wx.getStorageSync('dataLikai')
    let wan = wx.getStorageSync('wan')
    let inWeek = new Date(homeruzhuTime).getDay()
    let outWeek = new Date(homelikaiTime).getDay()
    if (homeruzhuTime !== that.str || homelikaiTime !== that.str) {
      console.log(inWeek, outWeek)
      that.setData({
        homeruzhuTime: homeruzhuTime.substring(5),
        homelikaiTime: homelikaiTime.substring(5),
        wan,
        inWeek,
        outWeek
      });
    }
    this.getInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})