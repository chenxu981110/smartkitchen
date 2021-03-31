const app = getApp();
Page({
  //跳转
  goq: function (event) {
    wx.navigateTo({
      url: '/q/q',
    })
  },
  gow: function (event) {
    wx.navigateTo({
      url: '/w/w',
    })
  },
  goe: function (event) {
    wx.navigateTo({
      url: '/e/e',
    })
  },

  data: {
      //轮播图
      indicatordots:true,
      autoplay:true,
      //左侧抽屉
      open: false,
    //点我1（0为展开，1为收缩）
    unfold: null,

  },
//点我1
  unfold() {
    var unfold = this.data.unfold
    if (unfold === null) { //默认为收缩
      unfold = 1
    }
    if (unfold == 0) {   //点击后改变展开样式
      unfold = 1
    } else {
      unfold = 0
    }
    this.setData({  //赋值
      unfold: unfold
    })
  },

  onLoad: function (options) {
  
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
//侧边抽屉
  tap_ch: function (e) {
    if (this.data.open) {
      this.setData({
        open: false
      });
    } else {
      this.setData({
        open: true
      });
    }
  }
})