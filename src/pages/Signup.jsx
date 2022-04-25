import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import MainSignUp from "../components/MainSignUp";
import Layout from "./shared/Layout";

const Signup = () => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <Layout>
      <MainSignUp></MainSignUp>
    </Layout>
  );
};

export default Signup;
