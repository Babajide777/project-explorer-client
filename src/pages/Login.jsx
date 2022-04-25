import React, { useContext } from "react";
import Layout from "./shared/Layout";
import BuildLoginForm from "../components/BuildLoginForm";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/");
  }

  return (
    <Layout>
      <BuildLoginForm></BuildLoginForm>
    </Layout>
  );
};

export default Login;
