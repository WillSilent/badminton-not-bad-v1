const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    avatarUrl: defaultAvatarUrl,
    username:'',
    gender: '',
    birthday: ''
  },
  onChooseAvatar(e:any) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
  },
  onUsernameInput(e:any) {
    console.log(e.detail.value)
    this.setData({
      username: e.detail.value
    });
  },
  onChange(e:any) {
    this.setData({
      gender: e.detail,
    });
  },
  // 日期选择处理
  onDateChange(e:any) {
    this.setData({
      birthday: e.detail.value
    });
  },

  // 表单提交
  submitForm() {
    const { avatarUrl, username, gender, birthday } = this.data;

    if (!username) {
      wx.showToast({
        title: '请填写用户名',
        icon: 'none'
      });
      return;
    }

    if (!birthday) {
      wx.showToast({
        title: '请选择生日',
        icon: 'none'
      });
      return;
    }

    // 处理表单提交逻辑，例如将数据上传到服务器
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    });

    // 可以在这里将数据传给后台或保存本地
    console.log({
      avatarUrl,
      username,
      gender,
      birthday
    });
  }
})