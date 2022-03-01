export const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
        alertVariant: "danger",
        alertClass: "alert alert-danger",
      };

    case "NO_PASSWORD_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your passsword"],
      };

    case "NO_CONFIRMPASSWORD_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in the confirmPassword field"],
      };

    case "PASSWORDS_DO NOT_MATCH":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "passwords do not match"],
      };

    default:
      throw new Error("no matching action type");
  }
};
