// pages/hotmore/screen/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value:0,
    valueMoney:0, //区间价格
    hotCheckboxArr: [
      {
        name: '近地铁',
        checked: false
      },
      {
        name: '超赞',
        checked: false
      },
      {
        name: '市中心',
        checked: false
      },
      {
        name: '优惠',
        checked: false
      },
      {
        name: '近菜市场',
        checked: false
      }
    ],
    checkboxArr: [
      {
        name: '一居',
        checked: false
      }, 
      {
        name: '二居',
        checked: false
      },
      {
        name: '三居',
        checked: false
      },
      {
        name: '四居',
        checked: false
      },
      {
        name: '其他',
        checked: false
      }
    ],
    numArr: [
      {
        name: '1',
        checked: false
      },
      {
        name: '2',
        checked: false
      },
      {
        name: '3',
        checked: false
      },
      {
        name: '4',
        checked: false
      },
      {
        name: '5',
        checked: false
      },
      {
        name: '6',
        checked: false
      }
    ],
    hotlist:[],
    checkValue:[],
    numList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //滑动价格区间
    onChange(e) {
      let valueMoney = e.detail*30;
      this.setData({
        valueMoney
      })
    },
    checkbox: function(e) {
      let {index,ide} = e.currentTarget.dataset; //获取当前点击的下标
      if(ide==='1'){
        var hotCheckboxArr = this.data.hotCheckboxArr; //选项集合
        hotCheckboxArr[index].checked = !hotCheckboxArr[index].checked; //改变当前选中的checked值
        this.setData({
          hotCheckboxArr
        });
      }
      if(ide==='2'){
        var checkboxArr = this.data.checkboxArr; //选项集合
        checkboxArr[index].checked = !checkboxArr[index].checked; //改变当前选中的checked值
        this.setData({
          checkboxArr
        });
      }
      if (ide === '3') {
        var numArr = this.data.numArr; //选项集合
        numArr[index].checked = !numArr[index].checked; //改变当前选中的checked值
        this.setData({
          numArr
        });
      }
      
    },
    //热门选中数据
    hotCkboxChange: function(e) {
      var hotlist = e.detail.value;
      this.setData({
        hotlist
      });
    },
    //居室选中数据
    checkboxChange: function (e) {
      var checkValue = e.detail.value;
      this.setData({
        checkValue
      });
    },
    //人数选中数据
    numCkboxChange: function (e) {
      var numList = e.detail.value;
      this.setData({
        numList
      });
    },

    //清空筛选内容
    emptyBtn() {
      let that = this;
      let hotCheckboxArr = that.data.hotCheckboxArr; //选项集合
      var checkboxArr = this.data.checkboxArr;
      var numArr = this.data.numArr;
      for (let i = 0; i < hotCheckboxArr.length;i++){
        hotCheckboxArr[i].checked = false
      }
      for (let i = 0; i < checkboxArr.length; i++) {
        checkboxArr[i].checked = false
      }
      for (let i = 0; i < numArr.length; i++) {
        numArr[i].checked = false
      }
      that.setData({
        hotCheckboxArr,
        checkboxArr,
        numArr,
        value:0,
        valueMoney: 0,
        checkValue:[],
        hotlist:[],
        numList:[],
      })
      let temp = []
      this.triggerEvent('screenCon', { show:false,temp })//通过triggerEvent将参数传给父组件
    },
    //确定提交
    confirm: function() {
      let checkValue = this.data.checkValue;
      let hotlist = this.data.hotlist;
      let numList = this.data.numList;
      let valueMoney = this.data.valueMoney;
      let temp = {
        checkValue,
        hotlist,
        numList,
        valueMoney
      }
      // console.log(temp); //所有选中的项的value
      this.triggerEvent('screenCon', { show: false, temp })//通过triggerEvent将参数传给父组件
    }
  }
})