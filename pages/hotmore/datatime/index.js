// pages/hotmore/datatime/index.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },
  ready(){
    //当前时间 格式2019-04-03
    var date = new Date();
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var noDate = (Y + M + D);
    console.log("时间戳:" + noDate)
    this.setData({
      noDate: noDate
    })
    this.dateData();
  },

  /**
   * 组件的初始数据
   */
  data: {
    calendar: [],
    // 构建顶部日期时使用
    date: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    inTime: '', //入住时间 格式 04-03
    outTime: '', //离开时间 格式 04-03
    inTimeruzhu: '', //入住时间 格式 04月03
    outTimelikai: '', //离店时间 格式 04月03
    homeruzhuTime: '',  //返回给首页的显示时间 04.03
    homelikaiTime: '', //返回给首页的显示时间 04.03
    Wan: 0, //默认几晚
    noDate: '', //当前时间 格式：2019-04-03
    year: '',
    mouth: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
            isTo: (month < 10 ? '0' + month : month) + '月' + (num < 10 ? '0' + num : num),
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
      var inTimeruzhu = that.data.inTimeruzhu; //当前入住日期-显示出来给首页的 04月03
      var outTimelikai = that.data.outTimelikai; //当前离开日期-显示出来给首页的
      if (inTime == '' || (new Date(eTime) <= new Date(inTime)) || outTime != '') {
        // 如果入住时间为空或选择的时间小于等于入住时间，则选择的时间为入住时间
        app.globalData.intimestamps = eTime
        inTime = eTime; //入住时间等于当前选择时间
        inTimeruzhu = sTime;
        outTimelikai = '';
        outTime = ''; //时间为空
      } else {
        app.globalData.outtimestamps = eTime
        outTime = eTime; //离开时间等于当前选择时间
        outTimelikai = sTime;
      };
      that.setData({
        inTime,
        outTime,
        inTimeruzhu,
        outTimelikai
      })
      //入住离开时间选择
      if (inTime != "") {
        var homeruzhuTime = (inTimeruzhu.replace(/月/g, "."));
        var homelikaiTime = (outTimelikai.replace(/月/g, "."));
        that.setData({
          homeruzhuTime,
          homelikaiTime
        })
      }
      //入住共几晚
      if (outTime != '') {
        var start_date = new Date(inTime.replace(/-/g, "/"));
        var end_date = new Date(outTime.replace(/-/g, "/"));
        //转成毫秒数，两个日期相减
        var days = end_date.getTime() - start_date.getTime();
        console.log(days)
        //转换成天数
        var day = parseInt(days / (1000 * 60 * 60 * 24));
        console.log(day)
        that.setData({
          Wan: day
        })
      }
      else {
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
      var mouth = nowTime.getMonth() + 1;  //当前月
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
      console.log(this.data.calendar)
    },
    //用户点击增加月份
    plusMouth() {
      var year = this.data.year  //当前年
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
      var M = nowTime.getMonth() + 1;  //当前月
      var yms = parseInt(Y.toString() + M.toString());

      var year = this.data.year//当前年
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
    //清空返回
    empty() {
      this.setData({
        homeruzhuTime: '',
        homeruzhuTime: '',
        Wan: 0
      })
      app.globalData.homeruzhuTime = '';
      app.globalData.homelikaiTime = '';
      //关闭弹窗
      wx.navigateBack({
        delta: 1
      })
    },
    //保存跳转
    seavs() {
      var that = this;
      app.globalData.homeruzhuTime = that.data.homeruzhuTime;
      app.globalData.homelikaiTime = that.data.homelikaiTime;
    }
  }
})
