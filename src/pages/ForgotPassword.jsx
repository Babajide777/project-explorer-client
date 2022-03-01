import React from "react";
import Layout from "./shared/Layout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const ForgotPassword = (props) => {
  return (
    <Layout us={props.us}>
      <ForgotPasswordForm></ForgotPasswordForm>
    </Layout>
  );
};

export default ForgotPassword;
