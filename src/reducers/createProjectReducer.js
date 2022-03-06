export const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
        alertVariant: "danger",
        alertClass: "alert alert-danger",
      };

    case "NO_NAME_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in your name"],
      };

    case "NO_ABSTRACT_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in the project's abstract"],
      };

    case "NO_AUTHOR_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in the project's author"],
      };

    case "NO_TAG_VALUE":
      return {
        ...state,
        showAlert: true,
        alertVariant: "danger",
        alertClass: "alert alert-danger",
        errMsg: [...state.errMsg, "Please fill in relevant project tags"],
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
