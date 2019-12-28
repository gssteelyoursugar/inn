const app = getApp();

// 这是该页面对应的 “路径前缀”
import { OrderModel } from '../../api/order.js';
let list = new OrderModel();
Page({
  data: {
    fileList: [],
    value:5,
    content:'',
    current: 0,
    attitude: true,
    time: true,
    efficiency: true,
    environment: true,
    professional: true,
    housing_id:0,
    order_id:0,
    min: 5,//最少字数
    max: 300, //最多字数 (根据自己需求改变) 
  },


  onChange(event) {
    this.setData({
      value: event.detail
    });
  },

  afterRead(event) {
    var that=this;
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://aa.8yueguihua.com/api/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        var fileList = that.data.fileList;
        fileList.push({url: res.data });
        that.setData({ fileList });
      }
    });
  },
  
  // 留言
  //字数限制  
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len, //当前字数 
      content: value
    });
  },
  // 图片
  choose: function (e) {//这里是选取图片的方法
    var that = this;
    var pics = that.data.pics;
    wx.chooseImage({
      count: 5 - pics.length, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {

        var imgsrc = res.tempFilePaths;
        pics = pics.concat(imgsrc);
        console.log(pics);
        // console.log(imgsrc);
        that.setData({
          pics: pics,
          // console.log(pics),
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  },
  onPost(){

  },
  uploadimg: function () {//这里触发图片上传的方法
    var pics = this.data.pics;
    console.log(pics);
    app.uploadimg({
      url: 'https://........',//这里是你图片上传的接口
      path: pics//这里是选取的图片的地址数组
    });
  },
  onLoad: function (options) {
    this.data.housing_id = options.housing_id
    this.data.order_id=options.order_id
  },
  // 删除图片
  deleteImg: function (e) {
    var pics = this.data.pics;
    var index = e.currentTarget.dataset.index;
    pics.splice(index, 1);
    this.setData({
      pics: pics
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var pics = this.data.pics;
    wx.previewImage({
      //当前显示图片
      current: pics[index],
      //所有图片
      urls: pics
    })
  },
  onPost(){
    var that=this;
    var userinfo=wx.getStorageSync('userInfo')
    var temp={
      user_id: userinfo.id,
      num:that.data.value,
      content:that.data.content,
      housing_id: that.data.housing_id,
      order_id:that.data.order_id
    }
    var tempPost={
      temp,
      fileList:that.data.fileList
    }
    list.postOrderByreview(tempPost,res=>{
      wx.navigateBack({
      })
    })
  }
})