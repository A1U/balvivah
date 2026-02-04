import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGavel, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const LegalDisclaimer = () => {
  return (
    <>
      <section className="pt-5 pb-4 bg-gradient-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="display-5 fw-bold mb-3">
                <FaGavel className="me-2" />
                Legal Disclaimer
              </h1>
              <p className="lead mb-0">
                Important information regarding the use of this website
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              
              {/* Legal Disclaimer Section */}
              <Card className="border-0 shadow-sm mb-4">
                <Card.Header 
                  className="border-0 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
                    color: 'white'
                  }}
                >
                  <h3 className="mb-0 fw-bold">
                    <FaExclamationTriangle className="me-2" />
                    Legal Disclaimer
                  </h3>
                </Card.Header>
                <Card.Body className="p-4">
                  <div className="legal-content">
                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>1. General Information</h5>
                    <p className="text-muted mb-4">
                      This website is maintained and operated by the Department for Child Rights, Government of Rajasthan. 
                      The information provided on this website is for general informational purposes only and is subject to 
                      change without notice.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>2. Accuracy of Information</h5>
                    <p className="text-muted mb-4">
                      While we strive to keep the information on this website accurate and up-to-date, we make no 
                      representations or warranties of any kind, express or implied, about the completeness, accuracy, 
                      reliability, suitability, or availability with respect to the website or the information, products, 
                      services, or related graphics contained on the website for any purpose.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>3. No Legal Advice</h5>
                    <p className="text-muted mb-4">
                      The content on this website does not constitute legal advice. While we provide information about 
                      child marriage prevention laws and regulations, users should consult with qualified legal professionals 
                      for specific legal advice regarding their individual circumstances.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>4. Reporting Child Marriage</h5>
                    <p className="text-muted mb-4">
                      Reports submitted through this website are taken seriously and will be processed according to 
                      established procedures. However, the Department for Child Rights, Government of Rajasthan, 
                      cannot guarantee immediate action on all reports and reserves the right to investigate and 
                      respond according to legal procedures and available resources.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>5. Limitation of Liability</h5>
                    <p className="text-muted mb-4">
                      In no event will the Department for Child Rights, Government of Rajasthan, be liable for any 
                      loss or damage including, without limitation, indirect or consequential loss or damage, or any 
                      loss or damage whatsoever arising from loss of data or profits arising out of, or in connection 
                      with, the use of this website.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>6. External Links</h5>
                    <p className="text-muted mb-4">
                      This website may contain links to external websites that are not provided or maintained by or 
                      in any way affiliated with the Department for Child Rights, Government of Rajasthan. We do not 
                      guarantee the accuracy, relevance, timeliness, or completeness of any information on these 
                      external websites.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>7. Emergency Situations</h5>
                    <p className="text-muted mb-4">
                      In case of emergency or immediate threat to a child's safety, please contact emergency services 
                      immediately at <strong>1098</strong> (Child Helpline) or your local police station. This website 
                      should not be used as the primary means of reporting emergency situations.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>8. Intellectual Property</h5>
                    <p className="text-muted mb-4">
                      All content, logos, graphics, and materials on this website are the property of the Department for 
                      Child Rights, Government of Rajasthan, or are used with permission. Unauthorized use or reproduction 
                      of any content from this website is prohibited.
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>9. Governing Law</h5>
                    <p className="text-muted mb-4">
                      This Legal Disclaimer shall be governed by and construed in accordance with the laws of India and 
                      the State of Rajasthan. Any disputes arising from the use of this website shall be subject to the 
                      exclusive jurisdiction of the courts in Rajasthan.
                    </p>
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
                        This Legal Disclaimer is effective as of the date of publication. By using this 
                        website, you acknowledge that you have read, understood, and agree to be bound by these terms. 
                        If you do not agree with any part of these terms, please do not use this website.
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

export default LegalDisclaimer;
