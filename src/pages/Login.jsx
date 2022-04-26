import React from "react";
import Layout from "./shared/Layout";
import BuildLoginForm from "../components/BuildLoginForm";
import LoginRediredct from "../components/LoginRediredct";

const Login = () => {
  LoginRediredct("/");

  return (
    <Layout>
      <BuildLoginForm></BuildLoginForm>
    </Layout>
  );
};

export default Login;
