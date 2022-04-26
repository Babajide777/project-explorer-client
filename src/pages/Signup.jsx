import React from "react";
import LoginRediredct from "../LoginRediredct";
import MainSignUp from "../components/MainSignUp";
import Layout from "./shared/Layout";

const Signup = () => {
  LoginRediredct("/");
  return (
    <Layout>
      <MainSignUp></MainSignUp>
    </Layout>
  );
};

export default Signup;
