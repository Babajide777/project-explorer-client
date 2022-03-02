import React from "react";
import BuildResetPasswordForm from "../components/BuildResetPasswordForm";
import Layout from "./shared/Layout";

const ResetPassword = (props) => {
  return (
    <Layout us={props.us}>
      <BuildResetPasswordForm></BuildResetPasswordForm>
    </Layout>
  );
};

export default ResetPassword;
