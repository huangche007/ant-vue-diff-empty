export default {
  message: {
    resetPwdInfo: {
      tip: "修改密码",
      form: {
        lables: {
          oldPwd: "验证旧密码",
          phone: "输入手机号",
          verifyCode: "验证码",
          newPwd: "输入新密码",
          twiceNewPwd: "再次输入新密码"
        },
        placeholders: {
          oldPwd: "格式错误，请输入8-18位的字符",
          phone: "请输入正确的手机号码",
          vPhone: "请输入正确的手机号码",
          verifyCode: "请输入6位纯数字",
          twiceNewPwd: "再输入一次新密码"
        },
        rules: {
          oldPass: "旧密码必须填写",
          oldPassValidate: "您输入的密码格式有误",
          oldPassBlur: "格式错误，请输入8-18位的字符",
          phone: "手机号码必须填写",
          phoneError: "请输入正确的手机号码",
          phoneNotExit: "此账号无效或不受支持",
          verifyCode: "验证码必须填写",
          newPass: "新密码必须填写",
          confirmPass: "确认密码必须填写",
          confirmPassValidate: "两次输入密码不一致，请重新输入"
        }
      },
      resetPassTypes: {
        password: "密码验证",
        phone: "手机验证"
      }
    }
  }
};
