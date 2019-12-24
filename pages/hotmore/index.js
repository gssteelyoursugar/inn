// pages/hotmore/index.js

// pages/home/city/detailsCity/detailsCity.js
const app = getApp();
// 这是该页面对应的 “路径前缀”
import {
  CityModel
} from '../../api/city.js';
let list = new CityModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    reachbottom:true,
    str:'',
    nameCity:'北海',
    value:'',
    homeruzhuTime: '',//展示入住时间     格式  12月21
    homelikaiTime: '',//展示离店时间
    dataLikai:'', //存入数据库的入住时间   格式 2019-12-21
    dataLikai:'',//存入数据库的离开时间
    stor:1,//排序
    show: false, //筛选弹框
    showMenu:true,
    user_id:undefined,
    // resource:['1'],
    hotlist: [
     
    ],
    listQuery:{
      limit:3,
      page:1,
    },
    temp:[] //筛选条件
  },
  //获取滑动距离，隐藏搜索框
  onPageScroll: function (res) {
    if (res.scrollTop > 100) {
      this.setData({
        reachbottom:false
      })
    } else {
      this.setData({ 
        reachbottom: true 
      })
    }
  },
  showData() {
    wx.navigateTo({
      url: "/pages/component/datatime/index"
    })
  },
  toggleCity() {
    wx.navigateTo({
      url: "/pages/city/index"
    })
  },
  //获取子组件的值，更改收藏状态
  getAddInfo(e) {
    let { index,show_id} = e.detail
    var temp={
      user_id:1,
      housing_id: show_id
    }
    list.PostDataByCollection(temp,res=>{
      console.log(res)
    })
    //data中获取列表
    let hotlist = this.data.hotlist
    for (let i in hotlist) {
      //遍历列表数据      
      if (i == index) {
        //根据下标找到目标,改变状态  
        if (hotlist[i].count_coll === 0) {
          hotlist[i].count_coll = parseInt(hotlist[i].count_coll) + 1
        }
        else{
          hotlist[i].count_coll = parseInt(hotlist[i].count_coll) - 1
        }
      }
    }
      //数组重新赋值
      this.setData({
        hotlist
      })
  },

  //获取筛选子组件的值
  getAddscreen(e) {
    let that = this;
    let { show,temp } = e.detail
    console.log(e.detail)
    that.setData({
      show,
      temp
    })
  },

  btnShowmenu: function () {
    var showMenu = !this.data.showMenu
    this.setData({
      showMenu
    })
  },
  //输入框点击完成时获取的值
  bindConfirm(e) {
    let that = this
    let value = e.detail.value;
    that.setData({
      value
    })
  },
  //排序
  cilckSotr() {
    if (this.data.stor===1){
      let stor = 2;
      this.setData({
        stor
      })
    }
    else{
      let stor = 1;
      this.setData({
        stor
      })
    }
  },
  //筛选弹窗
  showPopup() {
    this.setData({
      show:!this.data.show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      value:options.names
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this
    let str = this.data.str
    let homeruzhuTime = wx.getStorageSync('homeruzhuTime')
    let homelikaiTime = wx.getStorageSync('homelikaiTime')
    let dataRuzhu = wx.getStorageSync('dataRuzhu')
    let dataLikai = wx.getStorageSync('dataLikai')
    if (homeruzhuTime !== that.str || homelikaiTime !== that.str) {
      that.setData({
        homeruzhuTime,
        homelikaiTime,
        dataRuzhu,
        dataLikai
      });
    }
    let nameCity = wx.getStorageSync('nameCity')
    if (nameCity !== '') {
      that.setData({
        nameCity
      })
    }
    else{
      that.setData({
        nameCity:'北海'
      })
    }

    var userinfo=wx.getStorageSync('userInfo')
    this.data.user_id=userinfo.id
    this.getData();
  },


  getData(){
    this.data.listQuery.user_id=this.data.user_id
    list.GetBydetailscityID(this.data.listQuery, res => {
      var data = res.data
      var arr = this.data.hotlist;
      for(let i=0;i<data.length;i++){
        console.log(i)
        arr.push(data[i])
      }
      if (arr.length === res.total){
        wx.showToast({
          title: '已经没有更多数据啦!',
          icon:'none'
        })
        return;
      }
      
      this.setData({
        hotlist: arr
      })
      
    })
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onReachBottom: function () {
      this.data.listQuery.page++
      this.getData();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})