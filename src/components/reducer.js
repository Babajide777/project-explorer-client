export const reducer = (state, action) => {
  switch (action.type) {
    case "NO_EMAIL_VALUE":
      return {
        showAlert: true,
        errMsg: "Email field can not be empty",
      };

    case "NO_PASSWORD_VALUE":
      return {
        showAlert: true,
        errMsg: "Password field can not be empty",
      };

    case "REFRESH":
      return {
        ...state,
        showAlert: false,
      };
    case "USER_UNAUTHETICATION":
      return {
        showAlert: true,
        errMsg: action.payload,
      };

    default:
      throw new Error("no matching action type");
  }
};
