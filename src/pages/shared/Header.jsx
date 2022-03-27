import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../auth";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    let token = getToken();
    fetch("http://localhost:4000/home", {
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
          if (
            window.location.href.includes("login") ||
            window.location.href.includes("signup") ||
            window.location.href.includes("forgotpassword")
          ) {
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="mb-3 px-3"
      >
        <Navbar.Brand href="/">Project Explorer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form inline>
              <Row>
                <Col>
                  <FormControl
                    type="text"
                    placeholder="Search Projects"
                    className="mr-sm-2"
                  />
                </Col>
                <Col>
                  <Button variant="outline-light">Search</Button>
                </Col>
              </Row>
            </Form>
            <Nav.Link className="header-submit" href="/projects/submit">
              Submit Project
            </Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link id="logout" href="/logout">
                  Logout
                </Nav.Link>
                <NavDropdown
                  title={`Hi ${user.firstName}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href={`/editprofile/${user._id}`}>
                    Edit Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <Image
                    src={`${user.profilePicture}`}
                    roundedCircle
                    style={{ height: 50 + "px", width: 50 + "px" }}
                  />
                </NavItem>
              </>
            ) : (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
