import React from 'react'
import { Container,Row, Col, Card, Badge, Button, Image } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import headerBg from '../../../assets/images/headerbg.png'
import MedisNav from '../medisNav';

const Campingts = () => {
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
   <Row className="g-4 m-5">
    {/* Campaign 1 */}
    <Col lg={6}>
      <Card className="border-0 shadow-sm h-100">
        <Row className="g-0 h-100">
          <Col md={4}>
            <Image
              src="https://picsum.photos/seed/campaign1/300/400.jpg"
              alt="Campaign"
              fluid
              className="h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>

          <Col md={8}>
            <Card.Body className="p-4">
              <Badge bg="success" className="mb-2">
                Ongoing
              </Badge>

              <Card.Title className="fw-bold text-primary-custom mb-3">
                "Beti Padhao, Beti Bachao"
              </Card.Title>

              <Card.Text className="text-muted">
                State-wide campaign focusing on girl child education and
                protection against child marriage.
              </Card.Text>

              <div className="d-flex align-items-center justify-content-between">
                <small className="text-muted">
                  <FaMapMarkerAlt className="me-1" />
                  All Districts
                </small>
                <Button size="sm" variant="outline-primary">
                  Details
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>

    {/* Campaign 2 */}
    <Col lg={6}>
      <Card className="border-0 shadow-sm h-100">
        <Row className="g-0 h-100">
          <Col md={4}>
            <Image
              src="https://picsum.photos/seed/campaign2/300/400.jpg"
              alt="Campaign"
              fluid
              className="h-100"
              style={{ objectFit: "cover" }}
            />
          </Col>

          <Col md={8}>
            <Card.Body className="p-4">
              <Badge bg="primary" className="mb-2">
                Completed
              </Badge>

              <Card.Title className="fw-bold text-primary-custom mb-3">
                "School Chale Hum"
              </Card.Title>

              <Card.Text className="text-muted">
                Campaign to ensure 100% school enrollment and prevent dropouts
                due to child marriage.
              </Card.Text>

              <div className="d-flex align-items-center justify-content-between">
                <small className="text-muted">
                  <FaMapMarkerAlt className="me-1" />
                  Rural Areas
                </small>
                <Button size="sm" variant="outline-primary">
                  Details
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
      </Container>
    </section>


    </>
  )
}

export default Campingts
