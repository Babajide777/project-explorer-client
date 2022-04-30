import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../auth";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    removeToken();
    navigate("/");
  }, [navigate]);

  return <></>;
};

export default Logout;
