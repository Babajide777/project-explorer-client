import React from "react";
import Layout from "./shared/Layout";
import BuildLoginForm from "../components/BuildLoginForm";

const Login = (props) => {
  return (
    <Layout us={props.us}>
      <BuildLoginForm></BuildLoginForm>
    </Layout>
  );
};

export default Login;
