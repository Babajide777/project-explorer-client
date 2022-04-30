import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./App";

const NonLoginRedirect = (ur) => {
  const { isAuthenticated } = useContext(AuthContext);
  let navigate = useNavigate();
  if (!isAuthenticated) {
    navigate(`${ur}`);
  }
};

export default NonLoginRedirect;
