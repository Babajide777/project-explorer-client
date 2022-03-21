import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { setToken } from "../auth";

const Continue = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/user/continuesignup", {
      method: "POST",
      headers: {
        Authorization: `Bearer${JSON.stringify(id)}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const { program, graduationYear } = res.data;
          if (program === undefined && graduationYear === undefined) {
            setUser(res.data);
          } else {
            setToken("user", id);
            navigate("/");
          }
        } else {
          navigate("/errorsignup");
        }
      });
  }, []);

  return (
    <div className="mx-auto w-50 p-3 mw-60">
      <h2>Continue your signup</h2>
    </div>
  );
};

export default Continue;
