// pages/order/index.js

// 这是该页面对应的 “路径前缀”
import { OrderModel } from '../../api/order.js';
let list = new OrderModel();
import Toast from '../../vant-weapp/dist/toast/toast';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    img: [
      'https://image.xiaozhustatic3.com/00,800,533/51,0,59,48397,1800,1201,28c427c6.jpg',
      'https://image.xiaozhustatic3.com/00,800,533/9,0,3,5096,1800,1200,25afc714.jpg'
    ],
    orderList: [
      {
        id: 1,
        name: '【木离】侨港银滩海景中式简约风格一居室',
        start_date: '11月03日',
        start_time: '周日 14:00',
        end_date: '11月04日',
        end_time: '周一 12:00',
        price: '316.00',
        images_url: 'https://image.xiaozhustatic3.com/00,800,533/9,0,3,5096,1800,1200,25afc714.jpg',
        status: '1'
      },
      {
        id: 2,
        name: '【木离】侨港银滩海景中式简约风格一居室',
        start_date: '11月03日',
        start_time: '周日 14:00',
        end_date: '11月04日',
        end_time: '周一 12:00',
        price: '316.00',
        images_url: 'https://image.xiaozhustatic3.com/00,800,533/51,0,59,48397,1800,1201,28c427c6.jpg',
        status: '2'
      },
    ]
  },
  // 再次预订
  clickToOrderAgain (e) {
    let {id} = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  },
  // 查看评论 
  clickToCheckComment(e) {
    let { id } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  },
  // 删除订单
  clickToDelOrder(e) {
    let { id,index } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    let list = this.data.orderList
    list.splice(index, 1)
    this.setData({ orderList: list })
    Toast('删除成功')
  },
  // 查看订单
  clickToCheckOrder(e) {
    let { id } = e.currentTarget.dataset
    let temp = {
      order_id: id,
      user_id: 1
    }
    console.log(temp)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
    var that=this;
    var userinfo = wx.getStorageSync('userInfo')
    var temp = {};
    temp.user_id = userinfo.id; //获取到用户的id
    
    temp.mobile = userinfo.realname.mobile; //获取到用户的id

    // if (type === 1) {
    //   temp.mobile = mobile
    // }
    list.postOrderall(temp, res => {
      console.log(res)
      // that.setData({
      //   orderList: res
      // })
    })
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