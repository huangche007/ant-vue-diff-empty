export default {
  message: {
    personConfig: {
      tip: "个人中心",
      form: {
        lables: {
          enterprise: "所属企业",
          username: "姓名",
          accountName: "登录账号",
          phoneNum: "手机号码",
          email: "邮箱"
        },
        placeholder: {
          enterprise: "可输入中英文，15个以内的字符",
          phoneNum: "可输入11位数字",
          email: "请输入正确的邮箱格式"
        },
        rules: {
          enterprise: "必须选择所属企业",
          username: "姓名必须填写",
          usernameLength: "请输入15以内的字符",
          usernameValidate: "请输入中英文",
          accountName: "登录账号必须填写",
          accountLength: "请输入15以内的字符",
          accountValidate: "请输入英文数字",
          phoneNum: "手机号必须填写",
          phoneNumValidate: "请输入正确的手机号",
          email: "请输入正确的邮箱格式"
        }
      },
      modify: "修改",
      ok: "确定",
      resetPhone: {
        tip: "验证旧手机",
        verifyCodeLabel: "验证码",
        verifyCodeGet: "获取验证码",
        revError: "无法收到短信"
      }
    }
  }
};
