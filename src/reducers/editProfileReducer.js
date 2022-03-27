export const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
        alertVariant: "danger",
        alertClass: "alert alert-danger",
      };
    case "NO_FIRSTNAME_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your first name"],
      };
    case "NO_LASTNAME_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your last name"],
      };

    case "NO_EMAIL_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your email"],
      };

    case "INCORRECT_PROGRAM_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please choose an recognized program"],
      };

    case "NO_MATRIC_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your matric number"],
      };

    case "INCORRECT_GRADUATION_YEAR_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in a correct graduation year"],
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
