export const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
      };
    case "NO_FIRSTNAME_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in your first name"],
      };
    case "NO_LASTNAME_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in your last name"],
      };

    case "NO_EMAIL_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in your email"],
      };

    case "NO_PASSWORD_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in your passsword"],
      };

    case "INCORRECT_PROGRAM_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please choose an recognized program"],
      };

    case "NO_MATRIC_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in your matric number"],
      };

    case "INCORRECT_GRADUATION_YEAR_VALUE":
      return {
        ...state,
        showAlert: true,
        errMsg: [...state.errMsg, "Please fill in a correct graduation year"],
      };

    default:
      throw new Error("no matching action type");
  }
};
