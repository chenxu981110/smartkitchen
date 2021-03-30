const app = getApp()

Page({

  data: {
    items: [
      { name: 'USA', value: '电灯' },
      { name: 'CHN', value: '风扇', checked: 'true' },
      { name: 'BRA', value: '热水壶' },
     
     
    ],
    name: 'name1'
  },
  
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  getDataBindTap: function (e) {
    var result = e.detail.value;
    console.log(result)
  },
  onLoad: function () {
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  switch2Change: function (e) {
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }
})
