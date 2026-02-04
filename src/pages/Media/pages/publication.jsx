import { Container, Row, Col, Card, Button } from "react-bootstrap";
import MedisNav from "../medisNav";
import headerBg from '../../../assets/images/headerbg.png'

const PublicationsTab = () => {
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

 <section className="py-4 ">
      <Container>
       
   <MedisNav/>
   <div
      className="tab-pane fade show active"
      id="publications"
      role="tabpanel"
      aria-labelledby="publications-tab"
    >
      <Row className="g-4 m-5">
        <Col lg={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded me-3"
                    style={{ width: 50, height: 50 }}
                  >
                    <i className="fa-solid fa-file-pdf"></i>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <h5 className="fw-bold text-primary-custom mb-2">
                    Annual Report 2023-24
                  </h5>
                  <p className="text-muted small mb-2">
                    Comprehensive report on mission activities and achievements.
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <small className="text-muted">
                      <i className="fa-solid fa-file me-1"></i> PDF (2.5 MB)
                    </small>
                    <Button size="sm" variant="outline-primary">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="border-0 shadow-sm ">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded me-3"
                    style={{ width: 50, height: 50 }}
                  >
                    <i className="fa-solid fa-book"></i>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <h5 className="fw-bold text-primary-custom mb-2">
                    Awareness Materials
                  </h5>
                  <p className="text-muted small mb-2">
                    Collection of IEC materials for awareness campaigns.
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <small className="text-muted">
                      <i className="fa-solid fa-file me-1"></i> PDF (5.8 MB)
                    </small>
                    <Button size="sm" variant="outline-primary">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
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

export default PublicationsTab;
