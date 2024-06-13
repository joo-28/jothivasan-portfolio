import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
const FooterBar = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 py-lg-2 border-top">
              <div className="col-md-4 d-flex align-items-center">
                <span className="my-3 mb-md-0 text-secondary">
                  © 2024 All rights reserved. Jothivasan.
                </span>
              </div>

              <ul className="nav my-3 col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://www.linkedin.com/in/jothi-vasan-6b1720242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiFQZLvf%2FRDmVW82FCw2MZA%3D%3D"
                  >
                    <span>
                      <i className="bi bi-linkedin"></i>
                    </span>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://github.com/joo-28"
                  >
                    <span>
                      <i class="bi bi-github"></i>
                    </span>
                  </a>
                </li>
                <li className="ms-3">
                  <a
                    className="text-body-secondary"
                    href="https://www.instagram.com/ig_joo/"
                  >
                    <span>
                      <i class="bi bi-instagram"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FooterBar;
