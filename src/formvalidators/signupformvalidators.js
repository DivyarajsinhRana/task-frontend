export const signUpFormValidators = {
    firstname: {
      required: {
        value: true,
        message: "Please enter firstname",
      },
      pattern: {
        value: "^[A-Za-z]*$",
        message: "Numbers and special characters are not allowed",
      },
    },
    lastname: {
      required: {
        value: true,
        message: "Please enter lastname",
      },
      pattern: {
        value: "^[A-Za-z]*$",
        message: "Numbers and special characters are not allowed",
      },
    },
      email: {
        required: {
          value: true,
          message: "Please enter email",
        },
        pattern: {
          value: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
          message: "Please enter valid email address",
        },
      },
      password: {
        required: {
          value: true,
          message: "Please enter password",
        },
      },
    };