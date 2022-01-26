import React from "react";
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

const Header = (props) => {
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
          <Nav id="every">
            {props.us ? (
              <>
                <Nav.Link id="logout" href="/logout">
                  Logout
                </Nav.Link>
                <NavDropdown
                  title={`Hi ${props.us.firstname}`}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href={`/editprofile/${props.us._id}`}>
                    Edit Profile
                  </NavDropdown.Item>
                </NavDropdown>
                <NavItem>
                  <Image
                    src={`${props.us.profilePicture}`}
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
