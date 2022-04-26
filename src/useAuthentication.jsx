import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, url } from "./auth";

export const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    let token = getToken();
    fetch(`${url}home`, {
      method: "POST",
      headers: {
        Authorization: `Bearer${JSON.stringify(token)}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setIsAuthenticated(true);
          setUser(res.data);
          const { program, graduationYear } = res.data;
          if (
            program === undefined &&
            graduationYear === undefined &&
            !window.location.href.includes("continuesignup")
          ) {
            navigate(`/continuesignup/${token}`);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return { isAuthenticated, user };
};
