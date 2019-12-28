const app = getApp();
// 这是该页面对应的 “路径前缀”
const base_path = '../../../images/home/';
const base_pathfa = '../../../images/home/facilities/';
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.min.js');
var qqmapsdk = new QQMapWX({
  key: '4H2BZ-ERFLX-75C44-ZP7O4-J6YX5-THBFJ' //腾讯地图
});
// const base_path = '../../../images/home/city/';
import { CityModel } from '../../../api/city.js';
let list = new CityModel();


import { HomeModel } from '../../../api/home.js';
let homemodel = new HomeModel();
Page({
  data: {
    user_id: undefined,
    homeID: '',//房源ID
    location: '', //获取到的地址
    describe: '', //获取详情内容
    detailslist: [], //详情内容数组
    showTotalBtn: false,
    mode: 'aspectFill', //图片不变形
    bar_url: '', //图片地址
    //可租日期开始
    calendar: [],
    // 构建顶部日期时使用
    date: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    inTime: '', //入住时间 格式 2019-04-03
    outTime: '', //离开时间 格式 2019-04-03
    Wan: 0, //默认几晚
    noDate: '', //当前时间 格式：2019-04-03
    year: '',
    mouth: '',
    //可租日期结束
    //房客评价
    review: [
      {
        name: '南方的大雁',
        time: '2019-04-25',
        points: 5,
        details: '这家店真的很棒！下次来还住这里。'
      }
    ],
    //配套设施
    facilities: [{
      title: '居家',
      contents: [{
        img: base_pathfa + 'refrigerator.png',
        name: '冰箱',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'broom.png',
        name: '打扫工具',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'dryer.png',
        name: '电吹风',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'kettle.png',
        name: '电热水壶',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'TV.png',
        name: '电视',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'Air.png',
        name: '空调',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'yijia.png',
        name: '晾衣架',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'slippers.png',
        name: '拖鞋',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'wifi.png',
        name: '无线网络',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'xiyiji.png',
        name: '洗衣机',
        mode: 'aspectFill'
      }
      ]
    },
    {
      title: '洗浴',
      contents: [{
        img: base_pathfa + 'muyu.png',
        name: '沐浴',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'matong.png',
        name: '马桶',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'maojin.png',
        name: '毛巾',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + '24h.png',
        name: '全天热水',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'yujin.png',
        name: '浴巾',
        mode: 'aspectFill'
      }
      ]
    },
    {
      title: '厨房',
      contents: [{
        img: base_pathfa + 'canju.png',
        name: '餐具',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'daoju.png',
        name: '刀具菜板',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'ranqizao.png',
        name: '燃气灶',
        mode: 'aspectFill'
      }
      ]
    },
    {
      title: '特色及其它',
      contents: [{
        img: base_pathfa + 'baoan.png',
        name: '保安',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'dianti.png',
        name: '电梯',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'mensuo.png',
        name: '智能门锁',
        mode: 'aspectFill'
      }
      ]
    },
    {
      title: '周末配套',
      contents: [{
        img: base_pathfa + 'canting.png',
        name: '餐厅',
        mode: 'aspectFill'
      },
      {
        img: base_pathfa + 'shop.png',
        name: '超市',
        mode: 'aspectFill'
      }
      ]
    }
    ],
    lengths: '', //配套全部数据的长度
    showTota: false,
    ellipsis: true, // 文字是否收起，默认收起
    showLength: '', //顶部轮播
    activeIndex: 0,
    current: '0', //默认第一张
    duration: 1000, //滑动切换时间
    lazyLoad: true, //图片懒加载
    modelHidden: true //弹出层
  },
  /*收起展开按钮*/
  showAll: function () {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value,
      showTotal: !this.data.showTotal
    })
  },
  //弹出层打开
  modelHidden() {
    this.setData({
      modelHidden: false
    })
  },
  //弹出层关闭
  colse() {
    this.setData({
      modelHidden: true
    })
  },
  //点击轮播图获取默认张数
  changeImg(e) {
    this.setData({
      activeIndex: e.detail.current
    })
  },
  //调起电话
  phone(e) {
    wx.makePhoneCall({
      phoneNumber: this.data.detailslist.phone // 仅为示例，并非真实的电话号码
    })
  },
  //Ta的全部房源
  butlers() {
    wx.navigateTo({
      url: "butlers/butlers"
    })
  }, //全部评价
  evaluation(e) {
    console.log(e)
    wx.navigateTo({
      url: "evaluation/evaluation?housing_id=" + e.currentTarget.dataset.housing_id
    })
  },
  //预定信息
  reservation(e) {
    console.log(this.data.user_id)
    var wanNum = this.data.Wan;
    if (wanNum < 1) {
      wx.showToast({
        icon: 'none',
        title: '请选择入住离开日期',
      })
    } else {
      //需要的值
      /*
      图片 标题 2室1厅 宜住4人 夜景 入住离开时间 共几晚 押金 金额
      */
      var title = this.data.detailslist.title
      var door = this.data.detailslist.room
      var scenery = this.data.detailslist.scene
      var inTime = this.data.inTime
      var outTime = this.data.outTime
      var Wan = this.data.Wan
      var live = this.data.detailslist.num
      var images_url = this.data.detailslist.images_url
      var price = this.data.detailslist.price
      var yajin = this.data.detailslist.deposit
      var details_id = this.data.detailslist.id;
      wx.navigateTo({
        url: "/pages/home/reservation/reservation?title=" + title + '&door=' + door + '&scenery=' + scenery + '&inTime=' + inTime + '&outTime=' + outTime + '&Wan=' + Wan + '&live=' + live + '&price=' + price + '&yajin=' + yajin + '&image=' + images_url + '&details_id=' + details_id
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var len = 0;
    var homeID = options.id;
    var location = options.location; //获取到的位置地址
    for (var i = 0; i < this.data.facilities.length; i++) {
      var newArr = this.data.facilities[i].contents;
      for (var i2 = 0; i2 < newArr.length; i2++) {
        len++;
      }
    }
    this.setData({
      lengths: len,
      homeID: homeID,
      location: location,
    })

    //当前时间 格式2019-04-03
    var date = new Date();
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var noDate = (Y + M + D);

    this.setData({
      noDate: noDate
    })
    this.dateData(); //调用初始化日期
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {


  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    var that = this;
    that.data.user_id = app.globalData.user_id

    wx.getSystemInfo({
      success: res => {
        //获取屏幕宽度
        that.data.screenWidth = res.screenWidth
      },
    })
    that.setData({
      describe: this.data.describe
    }, () => {
      let query = wx.createSelectorQuery()
      setTimeout(() => {
        query.select("#des-sh").boundingClientRect(res => {
          let height = res.height * 750 / that.data.screenWidth;
          that.setData({
            lineNum: 3,
            showTotalBtn: height > 130 ? true : false
          })
        }).exec()
      }, 800)

    })

    //后台数据 详情表
    var homeID = this.data.homeID;  //获取到的id
    var bar_url = app.globalData.bar_url;
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
    that.setData({
      bar_url: bar_url
    })
  },

  //可租日期函数内容开始
  dataInit(setYear, setMonth) {
    // 当前时间/传入的时间
    var now = setYear ? new Date(setYear, setMonth) : new Date();
    var year = setYear || now.getFullYear();
    // 传入的月份已经加1
    var month = setMonth || now.getMonth() + 1;
    // 构建某日数据时使用
    var obj = {};
    // 需要遍历的日历数组数据
    var dateArr = [];
    // 需要的格子数，为当前星期数+当月天数
    var arrLen = 0;
    // 该月加1的数值，如果大于11，则为下年，月份重置为1 
    // 目标月1号对应的星期
    var startWeek = new Date(year + '-' + (month < 10 ? '0' + month : month) + '-01').getDay();
    //获取目标月有多少天
    var dayNums = new Date(year, month < 10 ? '0' + month : month, 0).getDate();
    var num = 0;
    // 计算当月需要的格子数 = 当前星期数+当月天数
    arrLen = startWeek * 1 + dayNums * 1;
    for (var i = 0; i < arrLen; i++) {
      if (i >= startWeek) {
        num = i - startWeek + 1;
        obj = {
          /*
           * 返回值说明
           * isToday ： 2018-12-27
           * isTo ： 12月27
           * dateNum :  27
           */
          isToday: year + '-' + (month < 10 ? '0' + month : month) + '-' + (num < 10 ? '0' + num : num),
          dateNum: num
        }
      } else {
        // 填补空缺
        // 例如2018-12月第一天是星期6，则需要补6个空格
        obj = {};
      }
      dateArr[i] = obj;
    };
    return dateArr;
  },
  // 点击了日期，选择入住时间或者离店时间
  dayClick(e) {
    var that = this;
    var eTime = e.currentTarget.dataset.day; //当前选择日期 如2019-04-03
    var sTime = e.currentTarget.dataset.danum; //当前选择日期 如04月03
    var inTime = that.data.inTime; //当前入住日期
    var outTime = that.data.outTime; //当前离开日期
    if (inTime == '' || (new Date(eTime) <= new Date(inTime)) || outTime != '') {
      // 如果入住时间为空或选择的时间小于等于入住时间，则选择的时间为入住时间
      inTime = eTime; //入住时间等于当前选择时间
      outTime = ''; //时间为空
    } else {
      outTime = eTime; //离开时间等于当前选择时间
    };
    that.setData({
      inTime,
      outTime
    })
    //入住共几晚
    if (outTime != '') {
      var start_date = new Date(inTime.replace(/-/g, "/"));
      var end_date = new Date(outTime.replace(/-/g, "/"));
      //转成毫秒数，两个日期相减
      var days = end_date.getTime() - start_date.getTime();
      //转换成天数
      var day = parseInt(days / (1000 * 60 * 60 * 24));
      that.setData({
        Wan: day
      })
    } else {
      that.setData({
        Wan: 0
      })
    }
  },
  //初始化日历时间
  dateData() {
    // 获取本月时间
    var nowTime = new Date(); //当前时间
    var year = nowTime.getFullYear(); //当前年
    var mouth = nowTime.getMonth() + 1; //当前月
    this.updateDays(year, mouth)
  },
  updateDays(year, mouth) {
    var that = this;
    var time = [];
    var timeArray = {};
    year = mouth > 12 ? year + 1 : year;
    mouth = mouth > 12 ? 1 : mouth;

    // 每个月的数据
    time = that.dataInit(year, mouth);
    // 接收数据
    timeArray[year + '年' + (mouth < 10 ? '0' + mouth : mouth) + '月'] = time;
    that.setData({
      calendar: timeArray,
      year: year,
      mouth: mouth
    });
  },
  //用户点击增加月份
  plusMouth() {
    var year = this.data.year //当前年
    var mouth = this.data.mouth //当前月
    mouth++
    if (mouth > 12) {
      mouth = 1
      year++
    }
    this.updateDays(year, mouth)
  },
  //用户点击减少月份
  minusMouth() {
    var nowTime = new Date(); //当前时间
    var Y = nowTime.getFullYear(); //当前年
    var M = nowTime.getMonth() + 1; //当前月
    var yms = parseInt(Y.toString() + M.toString());

    var year = this.data.year //当前年
    var mouth = this.data.mouth //当前月
    var ym = parseInt(year.toString() + mouth.toString());
    if (yms < ym) {
      mouth--
      if (mouth < 1) {
        mouth = 12
        year--
      }
      this.updateDays(year, mouth)
    }
    this.updateDays(year, mouth)
  },


  //可租日期函数内容结束

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
  gotohere: function (res) {
    let lata = '21.42711'; // 获取点击的markers经纬度
    let lona = '109.13761'; // 获取点击的markers经纬度
    let name = ''; // 获取点击的markers名称
    let markerId = res.markerId;// 获取点击的markers  id
    let markers = res.currentTarget.dataset.markers;// 获取markers列表
    wx.openLocation({ // 打开微信内置地图，实现导航功能（在内置地图里面打开地图软件）
      latitude: markers.latitude,
      longitude: markers.longitude,
      name: markers.title,
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },
})