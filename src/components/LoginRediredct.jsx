import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const LoginRediredct = (url) => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  if (isAuthenticated) {
    navigate(`${url}`);
  }
};

export default LoginRediredct;
