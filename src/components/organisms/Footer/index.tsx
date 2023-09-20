import { Container, Row, Col } from "react-bootstrap";

import logo from "@/styles/assets/svg/logo.svg";
import navIcon1 from "@/styles/assets/svg/nav-icon1.svg";
import navIcon2 from "@/styles/assets/svg/nav-icon2.svg";
import navIcon3 from "@/styles/assets/svg/nav-icon3.svg";
import { MailchimpForm } from "@/components/molcules/MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo.src} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1.src} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2.src} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3.src} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
