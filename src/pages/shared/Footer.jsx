import React from "react";

const Footer = () => {
  return (
    <>
      <br />
      {/* <footer className="fixed-bottom">
        <div className="container ">
          <div className="bg-light d-flex justify-content-end align-items-center">
            Project Explorer <span>&#169;</span> 2021 .<b>EdConnect</b>
          </div>
        </div>
      </footer> */}

      <div className="container fixed-bottom">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                {/* <use xlink:href="#bootstrap" /> */}
              </svg>
            </a>
            <span className="text-muted">&copy; 2022 Oyafemi Babajide</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#twitter" /> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#instagram" /> */}
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <svg className="bi" width="24" height="24">
                  {/* <use xlink:href="#facebook" /> */}
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
