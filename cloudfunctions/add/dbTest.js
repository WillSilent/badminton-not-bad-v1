const cloud = require('wx-server-sdk')
const db = wx.cloud.database()

function testAdd(){
  console.log(db)
  const userInfo = db.collection('user_info')
  userInfo.add({
    // data 字段表示需新增的 JSON 数据
    data: {
      username: "测试用户2",
      profile_url: "",
      gender: "male",
      description: "learn cloud database",
      birth: new Date("2018-09-01"),
      location: new db.Geo.Point(113, 23),
    }
  })
  .then(res => {
    console.log(res)
  })
}


function testGet(){
  db.collection('user_info').get({
    success: function(res) {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log(res.data)
    }
  })
}