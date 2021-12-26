export default {
  message: {
    personConfig: {
      tip: "Personal center",
      form: {
        lables: {
          enterprise: "Affiliated company",
          username: "Name",
          accountName: "Login account",
          phoneNum: "cellphone number",
          email: "Email"
        },
        placeholder: {
          enterprise:
            "Can enter Chinese and English, characters within 15 characters",
          phoneNum: "11 digits can be input",
          email: "Please enter the correct email format"
        },
        rules: {
          enterprise: "You must choose your own company",
          username: "Name must be filled in",
          usernameLength: "Please enter characters within 15",
          usernameValidate: "Please enter Chinese and English",
          accountName: "Login account must be filled in",
          accountLength: "Please enter characters within 15",
          accountValidate: "Please enter English numbers",
          phoneNum: "Mobile phone number must be filled in",
          phoneNumValidate: "Please enter an 11-digit pure number",
          email: "Please enter the correct email format"
        }
      },
      modify: "Modify",
      ok: "OK",
      resetPhone: {
        tip: "Verify old phone",
        verifyCodeLabel: "Verification code",
        verifyCodeGet: "Get verification code",
        revError: "Can't receive SMS"
      }
    }
  }
};
