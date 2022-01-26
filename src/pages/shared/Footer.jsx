import React from "react";
import { FilePptFill, Github, Linkedin, Twitter } from "react-bootstrap-icons";
import { SiUpwork } from "react-icons/si";
import { RiProfileLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className=" container mt-3 d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
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
            <a href="https://github.com/Babajide777">
              <Github></Github>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.linkedin.com/in/babajide-oyafemi/">
              <Linkedin></Linkedin>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://twitter.com/Jid_BOSS">
              <Twitter></Twitter>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.upwork.com/freelancers/~01efcad1f672850cd8">
              <SiUpwork></SiUpwork>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.codementor.io/@cdemeter007">
              <RiProfileLine></RiProfileLine>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
