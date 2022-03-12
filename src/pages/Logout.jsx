import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../auth";

const Logout = () => {
  let navigate = useNavigate();
  useEffect(() => {
    removeToken();
    navigate("/");
  }, []);

  return <div>Logout</div>;
};

export default Logout;
