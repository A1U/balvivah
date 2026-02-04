import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ActionButtonsSection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <Row className="g-4">
          <Col md={4}>
         <Link
      to="/Campaigns"
      className="d-inline-block w-100 py-4 fw-bold shadow-sm rounded-3 text-white text-center bg-primary text-decoration-none"
    >
      Awareness &amp; Campaigns
    </Link>
          </Col>
          <Col md={4}>
            <Link 
              to="/public_dashboard" 
              variant="success" 
              className="d-inline-block w-100 py-4 fw-bold shadow-sm rounded-3 text-white text-center bg-success text-decoration-none"
            >
              Public Dashboard
            </Link>
          </Col>
          <Col md={4}>
            <Link 
              to="/public_link" 
              variant="warning" 
              className="d-inline-block w-100 py-4 fw-bold shadow-sm rounded-3 text-white text-center bg-warning text-decoration-none"
            >
              Public Links
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ActionButtonsSection;
