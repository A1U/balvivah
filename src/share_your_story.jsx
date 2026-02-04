import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FiEdit } from "react-icons/fi";

const SuccessStorySection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5 text-center">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  {/* <i className="fa-solid fa-pen-to-square fa-2x text-primary"></i> */}
                  <FiEdit/>
                </div>

                <h3 className="fw-bold text-primary-custom mb-3">
                  Share Your Success Story
                </h3>

                <p className="text-muted mb-4">
                  Have you been part of our mission? Do you have a story of
                  change to share? We'd love to hear from you!
                </p>

                <div className="d-flex gap-3 justify-content-center">
                  <Button variant="primary" size="lg">
                    <i className="fa-solid fa-edit me-2"></i>
                    Submit Story
                  </Button>

                  <Button variant="outline-primary" size="lg">
                    <i className="fa-solid fa-envelope me-2"></i>
                    Contact Us
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuccessStorySection;
