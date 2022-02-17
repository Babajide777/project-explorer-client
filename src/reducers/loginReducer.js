export const reducer = (state, action) => {
  switch (action.type) {
    case "NO_EMAIL_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Email field can not be empty"],
      };

    case "NO_PASSWORD_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Password field can not be empty"],
      };

    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
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
