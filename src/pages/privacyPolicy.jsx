import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLock, FaInfoCircle } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="pt-5 pb-4 bg-gradient-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="display-5 fw-bold mb-3">
                <FaLock className="me-2" />
                Privacy Policy
              </h1>
              <p className="lead mb-0">
                How we collect, use, and protect your personal information
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              
              {/* Privacy Policy Section */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header 
                  className="border-0 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
                    color: 'white'
                  }}
                >
                  <h3 className="mb-0 fw-bold">
                    <FaLock className="me-2" />
                    Privacy Policy
                  </h3>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="privacy-content">
                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>1. Information We Collect</h5>
                    <p className="text-muted mb-3">
                      We collect information that you provide directly to us, including:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Personal information (name, contact details) when you submit reports or forms</li>
                      <li>Mobile number for OTP verification</li>
                      <li>Information about incidents reported through our reporting system</li>
                      <li>Any other information you choose to provide</li>
                    </ul>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>2. How We Use Your Information</h5>
                    <p className="text-muted mb-3">
                      We use the information we collect to:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Process and investigate reports of child marriage</li>
                      <li>Verify your identity through OTP verification</li>
                      <li>Communicate with you regarding your reports</li>
                      <li>Generate certificates and documentation as requested</li>
                      <li>Improve our services and website functionality</li>
                      <li>Comply with legal obligations</li>
                    </ul>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>3. Confidentiality</h5>
                    <p className="text-muted mb-4">
                      We understand the sensitive nature of child marriage reports. We are committed to maintaining 
                      the confidentiality of reporters' identities to the fullest extent permitted by law. Your personal 
                      information will be protected and shared only with authorized personnel involved in the investigation 
                      and legal proceedings, as required by law.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>4. Data Security</h5>
                    <p className="text-muted mb-4">
                      We implement appropriate technical and organizational measures to protect your personal information 
                      against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                      over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>5. Information Sharing</h5>
                    <p className="text-muted mb-4">
                      We may share your information with:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Law enforcement agencies as required by law</li>
                      <li>Child protection authorities and relevant government departments</li>
                      <li>Authorized service providers who assist us in operating our website</li>
                      <li>Other parties when required by law or to protect rights and safety</li>
                    </ul>
                    <p className="text-muted mb-4">
                      We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>6. Cookies and Tracking</h5>
                    <p className="text-muted mb-4">
                      Our website may use cookies and similar tracking technologies to enhance user experience and analyze 
                      website traffic. You can control cookie preferences through your browser settings.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>7. Your Rights</h5>
                    <p className="text-muted mb-3">
                      You have the right to:
                    </p>
                    <ul className="text-muted mb-4">
                      <li>Access and review your personal information</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request deletion of your information, subject to legal requirements</li>
                      <li>Withdraw consent for data processing, where applicable</li>
                    </ul>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>8. Data Retention</h5>
                    <p className="text-muted mb-4">
                      We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                      Privacy Policy, unless a longer retention period is required or permitted by law. Information related 
                      to child marriage reports may be retained for extended periods as required for legal proceedings and 
                      child protection purposes.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>9. Children's Privacy</h5>
                    <p className="text-muted mb-4">
                      Our website is designed to protect children and prevent child marriage. We take special care to protect 
                      the privacy of children and their information. If you are under 18, please seek assistance from a 
                      trusted adult when using this website or reporting incidents.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>10. Changes to This Policy</h5>
                    <p className="text-muted mb-4">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                      new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this 
                      Privacy Policy periodically for any changes.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>11. Contact Us</h5>
                    <p className="text-muted mb-4">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="p-3 rounded" style={{ backgroundColor: '#FFEBEE', border: '1px solid #b92022' }}>
                      <p className="mb-1"><strong>Department for Child Rights</strong></p>
                      <p className="mb-1">Government of Rajasthan</p>
                      <p className="mb-1">Email: info@childrights.rajasthan.gov.in</p>
                      <p className="mb-0">Helpline: <strong>1098</strong></p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              {/* Additional Information Card */}
              <Card className="border-0 shadow-sm" style={{ backgroundColor: '#FFEBEE' }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <FaInfoCircle className="me-3 mt-1" size={24} style={{ color: '#b92022' }} />
                    <div>
                      <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>
                        Important Notice
                      </h5>
                      <p className="text-muted mb-0">
                        This Privacy Policy is effective as of the date of publication. By using this 
                        website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. 
                        If you do not agree with any part of this policy, please do not use this website.
                      </p>
                      <p className="text-muted mt-3 mb-0">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;

