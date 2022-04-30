import React, { useContext, useRef } from "react";
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
import { AuthContext } from "../../App";

const Header = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const searchTerm = useRef(null);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/?searchterm=${searchTerm.current.value}&searchtype=name`);
  };

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
                    ref={searchTerm}
                  />
                </Col>
                <Col>
                  <Button
                    variant="outline-light"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Search
                  </Button>
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
