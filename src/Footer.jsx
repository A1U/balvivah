import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
  FaPhone,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";
import BalVivahChatbot from "./chatbox";




const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          {/* LEFT COLUMN */}
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-3 text-warning">
              Bal Vivah Mukt Rajasthan
            </h5>

            <p className="text-white-50">
              Working towards a child marriage-free Rajasthan through
              awareness, prevention, and community engagement.
            </p>

            <div className="bg-white bg-opacity-10 rounded-3 p-3 mb-3">
              <div className="d-flex align-items-center mb-2">
                <FaEnvelope className="text-warning me-3" />
                <span className="text-white-50 small">
                  info@bvmr.rajasthan.gov.in
                </span>
              </div>
              <div className="d-flex align-items-center">
                <FaMapMarkerAlt className="text-warning me-3" />
                <span className="text-white-50 small">
                  Jaipur, Rajasthan
                </span>
              </div>
            </div>

            <div className="d-flex gap-3">
              {[
                { icon: <FaFacebookF />, title: "Facebook" },
                { icon: <FaTwitter />, title: "Twitter" },
                { icon: <FaInstagram />, title: "Instagram" },
                { icon: <FaLinkedinIn />, title: "LinkedIn" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  title={item.title}
                  className="text-white fs-5 d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle"
                  style={{ width: 40, height: 40 }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Col>

          {/* MIDDLE COLUMN */}
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-3 text-warning">Quick Links</h5>

            <Row>
              <Col xs={6}>
                <ul className="list-unstyled">
                  {["Home", "About the Mission", "Figures at Glance", "Resource"].map(
                    (item, i) => (
                      <li key={i} className="mb-2">
                        <a
                          href="#"
                          className="text-white-50 text-decoration-none d-flex align-items-center"
                        >
                          <FaChevronRight className="me-2 small" />
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </Col>

              <Col xs={6}>
                <ul className="list-unstyled">
                  {[
                    "Directory",
                    "Success Story",
                    "Capacity Building",
                    "Media Gallery",
                  ].map((item, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href="#"
                        className="text-white-50 text-decoration-none d-flex align-items-center"
                      >
                        <FaChevronRight className="me-2 small" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={4} className="mb-4">
            <h5 className="fw-bold mb-3 text-warning">
              Emergency Contact
            </h5>

            <div className="bg-dark text-white p-4 rounded-3 text-center shadow-lg">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-25 rounded-circle mb-3"
                style={{ width: 60, height: 60 }}
              >
                <FaPhone size={28} />
              </div>
              <h4 className="fw-bold">Child Helpline</h4>
              <h1 className="fw-bold">1098</h1>
              <p className="small mb-0">24/7 Emergency Service</p>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary border-opacity-25" />

        {/* BOTTOM BAR */}
        <Row className="align-items-center">
          <Col md={6}>
            <span className="text-white-50 small">
              © 2024 Government of Rajasthan. All rights reserved.
            </span>
          </Col>

          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <Link
                to="/legal-disclaimer"
                className="text-white-50 small text-decoration-none d-flex align-items-center"
              >
                <FaShieldAlt className="me-1" />
                Legal Disclaimer
              </Link>
              <Link
                to="/privacy-policy"
                className="text-white-50 small text-decoration-none d-flex align-items-center"
              >
                <FaLock className="me-1" />
                Privacy Policy
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

<BalVivahChatbot/>

    </footer>
  );
};

export default Footer;
