Page({
    data: {
      list: []
    },
    onLoad: function () {
      var that = this
      wx.request({
        url: 'https://api.getweapp.com/thirdparty/zhihu/themes',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            list: res.data.others
          })
        }
      })
    }
})