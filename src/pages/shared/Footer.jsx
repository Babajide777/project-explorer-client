import React from "react";
import { FilePptFill, Github, Linkedin, Twitter } from "react-bootstrap-icons";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="container fixed-bottom mt-3">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-primary text-decoration-none lh-1"
            >
              <FilePptFill></FilePptFill>
            </a>
            <span className="text-muted">&copy; 2022 Oyafemi Babajide</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="" href="#">
                <Github></Github>
              </a>
            </li>
            <li className="ms-3">
              <a className="" href="#">
                <Linkedin></Linkedin>
              </a>
            </li>
            <li className="ms-3">
              <a className="" href="#">
                <Twitter></Twitter>
              </a>
            </li>
            <li className="ms-3">
              <a className="" href="#">
                <SiUpwork></SiUpwork>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
