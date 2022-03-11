export const reducer1 = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
        alertVariant: "danger",
        alertClass: "alert alert-danger",
      };

    case "NO_CURRENT_PASSWORD":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your current password"],
      };

    case "NO_NEW_PASSWORD":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your new password"],
      };

    case "NO_CONFIRM_PASSWORD":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please confirm your new password"],
      };

    case "PASSWORDS_DONT_MATCH":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Passwords do not match"],
      };

    case "SUCCESS":
      return {
        showAlert: true,
        alertVariant: "success",
        alertClass: "alert alert-success",
        errMsg: action.payload,
      };

    case "USER_UNAUTHETICATION":
      return {
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: action.payload,
      };

    default:
      throw new Error("no matching action type");
  }
};
