import { Container,Row, Col, Card, Badge, Button, Image } from "react-bootstrap";

import headerBg from '../../../assets/images/headerbg.png'
import MedisNav from '../medisNav';

const EventsTab = () => {
  return (
    <>



   <section className="pt-3 bg-gradient-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h1 className="display-5 fw-bold mb-3">
        Media Gallery
            </h1>
            <p className="lead mb-0">
             Visual stories of our mission, campaigns, and the impact we're making across Rajasthan


            </p>
          </Col>

          <Col lg={4} className="text-center">
            <img
              src={headerBg}
              alt="About Mission"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>

 <section className="py-4">
      <Container>
       
   <MedisNav/>
   <div
      className="tab-pane fade show active"
      id="events"
      role="tabpanel"
      aria-labelledby="events-tab"
    >
      <Row className="g-4 m-5">
        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle mb-3"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa-solid fa-calendar-day fa-2x text-primary"></i>
              </div>

              <h5 className="fw-bold text-primary-custom mb-2">
                State Level Workshop
              </h5>
              <p className="text-muted small mb-3">
                Annual workshop for all stakeholders and officials.
              </p>
              <p className="text-muted small mb-0">
                <i className="fa-solid fa-calendar me-1"></i> April 15, 2024
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded-circle mb-3"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa-solid fa-users fa-2x text-success"></i>
              </div>

              <h5 className="fw-bold text-primary-custom mb-2">
                Community Meeting
              </h5>
              <p className="text-muted small mb-3">
                Monthly community meetings across all districts.
              </p>
              <p className="text-muted small mb-0">
                <i className="fa-solid fa-calendar me-1"></i> Every Month
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded-circle mb-3"
                style={{ width: 80, height: 80 }}
              >
                <i className="fa-solid fa-award fa-2x text-warning"></i>
              </div>

              <h5 className="fw-bold text-primary-custom mb-2">
                Award Ceremony
              </h5>
              <p className="text-muted small mb-3">
                Recognizing champions of child rights.
              </p>
              <p className="text-muted small mb-0">
                <i className="fa-solid fa-calendar me-1"></i> June 1, 2024
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
      </Container>
    </section>




    </>
  );
};

export default EventsTab;
