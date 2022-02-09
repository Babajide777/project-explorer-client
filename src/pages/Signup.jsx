import React from "react";
import MainSignUp from "../components/MainSignUp";
import Layout from "./shared/Layout";

const Signup = (props) => {
  return (
    <Layout us={props.us}>
      <MainSignUp></MainSignUp>
    </Layout>
  );
};

export default Signup;
