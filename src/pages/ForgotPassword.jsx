import React, { useContext } from "react";
import Layout from "./shared/Layout";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <Layout>
      <ForgotPasswordForm></ForgotPasswordForm>
    </Layout>
  );
};

export default ForgotPassword;
