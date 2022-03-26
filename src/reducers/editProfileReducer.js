export const reducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        showAlert: false,
        errMsg: [],
        alertVariant: "danger",
        alertClass: "alert alert-danger",
      };

    default:
      throw new Error("no matching action type");
  }
};
