import React from "react";
import Layout from "./shared/Layout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import LoginRediredct from "../components/LoginRediredct";

const ForgotPassword = () => {
  LoginRediredct("/");
  return (
    <Layout>
      <ForgotPasswordForm></ForgotPasswordForm>
    </Layout>
  );
};

export default ForgotPassword;
