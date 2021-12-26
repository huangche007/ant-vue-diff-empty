export default {
  message: {
    resetPwdInfo: {
      tip: "change Password",
      form: {
        lables: {
          oldPwd: "Verify old password",
          phone: "Input mobile phone number",
          verifyCode: "Verification code",
          newPwd: "Enter a new password",
          twiceNewPwd: "Enter the new password again"
        },
        placeholders: {
          oldPwd:
            "Please enter 8-15 characters, support English/digits/symbols",
          phone: "Please enter 11 pure numbers",
          vPhone: "Please enter the correct phone number",
          verifyCode: "Please enter 6 digits",
          twiceNewPwd: "Enter new password again"
        },
        rules: {
          oldPass: "Old password must be filled",
          oldPassValidate:
            "Support uppercase and lowercase English/numbers/symbols",
          oldPassBlur: "Please enter a password within 8-15 characters",
          phone: "Mobile phone number must be filled in",
          phoneError: "请输入正确的手机号码",
          phoneNotExit: "手机号不存在，请重新输入",
          verifyCode: "Verification code must be filled in",
          newPass: "New password must be filled",
          confirmPass: "Confirm password must be filled in",
          confirmPassValidate:
            "The new password does not match the confirmed password"
        }
      },
      resetPassTypes: {
        password: "Password validation",
        phone: "Phone validation"
      }
    }
  }
};
