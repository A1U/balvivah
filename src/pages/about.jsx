



import { Container, Row, Col } from "react-bootstrap";
import headerBg from "../assets/images/headerbg.png";
import MissionSection from "../missionOverView";


const AboutHero = () => {
  return (
    <>
    <section className="pt-3 bg-gradient-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h1 className="display-5 fw-bold mb-3">
              About the Mission
            </h1>
            <p className="lead mb-0">
              Working towards a child marriage-free Rajasthan through
              comprehensive strategies and community engagement
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
    <section>

    <MissionSection/>
    </section>

    </>
  );
};

export default AboutHero;
