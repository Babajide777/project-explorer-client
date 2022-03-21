import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import { setToken } from "../auth";

const Continue = () => {
  const [programs, setPrograms] = useState([]);
  const [graduationYears, setGraduationYears] = useState([]);
  const [user, setUser] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/home/programs")
      .then((res) => res.json())
      .then((res) => setPrograms(res.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/home/graduationyears")
      .then((res) => res.json())
      .then((res) => setGraduationYears(res.data))
      .catch((err) => console.log(err));

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
      <h1 className="text-primary mb-4">Continue your signup process</h1>
      <Form>
        <Form.Group>
          <Form.Label className="fw-bold text-primary">
            Matric Number
          </Form.Label>
          <Form.Control name="matricNumber" />
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold text-primary">Program</Form.Label>
          <Form.Select name="program">
            <option>Select Option</option>
            {programs.map((prog) => (
              <option key={prog} value={prog}>
                {prog}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="fw-bold text-primary">
            Graduation Year
          </Form.Label>
          <Form.Select as="select" name="graduationYear">
            <option>Select Option</option>
            {graduationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Continue;
