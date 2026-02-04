import { Row, Col, Form, Button } from "react-bootstrap";
import logo from '../assets/images/logo_english.png'

const Login = () => {








  return (
    <div className="login-container">
      <div className="login-card">
        <Row className="g-0">
          {/* Left Side */}
          <Col lg={5} className="login-left">
            <div className="position-relative" style={{ zIndex: 1 }}>
              <div className="text-center mb-4">
                <h3 className="mt-3 fw-bold">Welcome Back</h3>
                <p className="opacity-75">Secure Portal Access</p>
              </div>

              <div className="mb-4">
                <h5 className="fw-bold mb-3">Portal Features</h5>

                <div className="feature-item">
                  <i className="fas fa-shield-alt me-3"></i>
                  <span>Secure &amp; Encrypted Access</span>
                </div>

                <div className="feature-item">
                  <i className="fas fa-chart-line me-3"></i>
                  <span>Real-time Dashboard</span>
                </div>

                <div className="feature-item">
                  <i className="fas fa-file-alt me-3"></i>
                  <span>Report Management</span>
                </div>

                <div className="feature-item">
                  <i className="fas fa-users me-3"></i>
                  <span>Stakeholder Collaboration</span>
                </div>
              </div>

              <div className="text-center mt-auto">
                <div className="bg-white bg-opacity-25 rounded-3 p-3">
                  <h6 className="fw-bold mb-1">Need Help?</h6>
                  <p className="small mb-2">24/7 Support Available</p>
                  <a href="tel:1098" className="btn btn-light btn-sm">
                    <i className="fas fa-phone me-2"></i>1098
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Side */}
          <Col lg={7} className="login-right">
            <div className="logo-section text-center">
              <img
                src={logo}
                alt="BVMR Logo"
                className="mb-2"
              />
              <h4 className="fw-bold text-primary-custom">
                Bal Vivah Mukt Rajasthan
              </h4>
              <p className="text-muted">Government of Rajasthan Portal</p>
            </div>

            <Form>
              <div className="mb-3 input-icon">
                <i className="fas fa-user"></i>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Username or Email"
                  required
                />
              </div>

              <div className="mb-3 input-icon">
                <i className="fas fa-lock"></i>
                <Form.Control
                  type="password"
                  size="lg"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="mb-3">
                <Row className="align-items-center">
                  <Col xs={6}>
                    <Form.Check
                      type="checkbox"
                      id="remember"
                      label="Remember me"
                    />
                  </Col>
                  <Col xs={6} className="text-end">
                    <a
                      href="#"
                      className="text-decoration-none text-primary"
                    >
                      Forgot Password?
                    </a>
                  </Col>
                </Row>
              </div>

              <div className="d-grid mb-3">
                <Button
                  type="submit"
                  size="lg"
                  className="btn-login"
                  variant="primary"
                >
                  <i className="fas fa-sign-in-alt me-2"></i>Sign In
                </Button>
              </div>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="social-login mb-3">
                <button type="button" className="social-btn">
                  <i className="fas fa-mobile-alt me-2"></i>OTP Login
                </button>
                <button type="button" className="social-btn">
                  <i className="fas fa-fingerprint me-2"></i>Biometric
                </button>
              </div>

              <div className="text-center">
                <p className="text-muted mb-0">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-primary text-decoration-none fw-bold"
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
