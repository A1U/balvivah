import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { FaShieldAlt, FaGraduationCap, FaGavel, FaUsers, FaChartLine, FaHandshake, FaSchool, FaCheckCircle } from "react-icons/fa";



const MissionSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {/* Left Column */}
          <Col lg={8}>
            {/* Mission Overview */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h3 className="text-primary-custom fw-bold mb-4">Mission Overview</h3>
                <p className="mb-3">
                  The Bal Vivah Mukt Rajasthan (BVMR) mission is a comprehensive initiative aimed at eliminating child marriage from the state of Rajasthan. Launched under the guidance of the Government of Rajasthan, this mission seeks to protect the rights of children, particularly girls, and ensure they receive proper education and opportunities for development.
                </p>
                <p className="mb-3">
                  Child marriage is a serious violation of human rights that affects millions of children worldwide. In Rajasthan, this practice has been prevalent due to various socio-economic factors, traditional beliefs, and lack of awareness. The BVMR mission addresses these challenges through a multi-pronged approach involving legal measures, awareness campaigns, and community participation.
                </p>
              </Card.Body>
            </Card>

            {/* Key Objectives */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h3 className="text-primary-custom fw-bold mb-4">Key Objectives</h3>
                <Row className="g-3">
                  {/* Protection */}
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div className="d-inline-flex align-items-center justify-content-center bg-primary text-white rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                          <FaShieldAlt />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-2">Protection</h5>
                        <p className="text-muted small mb-0">
                          Protect children from the practice of child marriage and ensure their safety and well-being.
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* Education */}
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div className="d-inline-flex align-items-center justify-content-center bg-success text-white rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                          <FaGraduationCap />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-2">Education</h5>
                        <p className="text-muted small mb-0">
                          Promote education and awareness about the harmful effects of child marriage.
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* Legal Action */}
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div className="d-inline-flex align-items-center justify-content-center bg-warning text-white rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                          <FaGavel />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-2">Legal Action</h5>
                        <p className="text-muted small mb-0">
                          Strengthen legal framework and ensure strict enforcement of existing laws.
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* Community Engagement */}
                  <Col md={6}>
                    <div className="d-flex align-items-start">
                      <div className="flex-shrink-0">
                        <div className="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle me-3" style={{ width: "40px", height: "40px" }}>
                          <FaUsers />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fw-bold mb-2">Community Engagement</h5>
                        <p className="text-muted small mb-0">
                          Involve communities, religious leaders, and stakeholders in the mission.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Strategy & Approach */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h3 className="text-primary-custom fw-bold mb-4">Strategy &amp; Approach</h3>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <FaChartLine className="me-2 text-primary" />
                      Awareness &amp; Campaigns
                    </Accordion.Header>
                    <Accordion.Body>
                      Conducting widespread awareness campaigns through various media channels, organizing workshops and seminars, and engaging with communities to change mindsets and attitudes towards child marriage.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <FaShieldAlt className="me-2 text-success" />
                      Legal Enforcement
                    </Accordion.Header>
                    <Accordion.Body>
                      Strengthening the legal framework, ensuring strict implementation of the Prohibition of Child Marriage Act (PCMA) 2006, and taking swift action against violators.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <FaHandshake className="me-2 text-warning" />
                      Community Participation
                    </Accordion.Header>
                    <Accordion.Body>
                      Engaging with community leaders, religious heads, and local organizations to build a consensus against child marriage and promote positive social norms.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <FaSchool className="me-2 text-danger" />
                      Education &amp; Empowerment
                    </Accordion.Header>
                    <Accordion.Body>
                      Promoting girls' education, providing skill development opportunities, and empowering young women to become agents of change in their communities.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            {/* Mission Impact */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-primary-custom text-white border-0 text-center">
                Mission Impact
              </Card.Header>
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <h3 className="text-primary-custom fw-bold">850+</h3>
                  <p className="text-muted small mb-0">Child Marriage-Free GPs</p>
                </div>
                <div className="text-center mb-3">
                  <h3 className="text-success fw-bold">1,25,430</h3>
                  <p className="text-muted small mb-0">Pledges Taken</p>
                </div>
                <div className="text-center">
                  <h3 className="text-warning fw-bold">3,78,500</h3>
                  <p className="text-muted small mb-0">People Engaged</p>
                </div>
              </Card.Body>
            </Card>

            {/* Key Initiatives */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3 text-primary-custom">Key Initiatives</h5>
                <ul className="list-unstyled">
                  {[
                    { title: "Child Marriage-Free Villages", desc: "Creating child marriage-free gram panchayats across the state." },
                    { title: "Mass Awareness Campaigns", desc: "Organizing campaigns to educate communities about the legal and health implications." },
                    { title: "Strengthening Legal Framework", desc: "Enhancing the implementation of existing laws and policies." },
                    { title: "Empowerment Programs", desc: "Providing education and skill development opportunities for girls." },
                  ].map((item, idx) => (
                    <li key={idx} className="mb-3 d-flex align-items-start">
                      <FaCheckCircle className="text-success me-2 mt-1" />
                      <div>
                        <strong>{item.title}:</strong>
                        <p className="text-muted small mb-0">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            {/* Contact / Get Involved */}
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="fw-bold mb-3 text-primary-custom">Get Involved</h5>
                <p className="text-muted small mb-3">
                  Join us in the mission to make Rajasthan child marriage-free. Your support can make a difference.
                </p>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="sm">Take Pledge</Button>
                  <Button variant="success" size="sm">Report Child Marriage</Button>
                  <Button variant="warning" size="sm" className="text-white">Volunteer</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionSection;
