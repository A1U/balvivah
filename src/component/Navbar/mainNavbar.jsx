import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import PledgeSection from "../../Form/pledge";

const MainNavbar = () => {
  const [showPledgeModal, setShowPledgeModal] = useState(false);
  const location = useLocation();

  const isActive = (path) => (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path));

  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        className="main-navbar"
        collapseOnSelect
      >
        <Container className="navbar-container">
          <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler-custom" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="navbar-nav-left me-auto">
              <Nav.Link as={Link} to="/" className={`nav-link-custom ${isActive("/") && location.pathname === "/" ? "active" : ""}`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className={`nav-link-custom ${isActive("/about") ? "active" : ""}`}>
                About the Mission
              </Nav.Link>
              <Nav.Link as={Link} to="/figer_at_glans" className={`nav-link-custom ${isActive("/figer_at_glans") ? "active" : ""}`}>
                Figures at Glance
              </Nav.Link>

              <NavDropdown
                title="Resource"
                id="resource-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item as={Link} to="/supreme-court-judgement-2024">
                  Supreme Court Judgement of 2024
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rajasthan-action-plan-2025">
                  Rajasthan State Action Plan 2025
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pcma">
                  PCMA Act 2006
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jj-act-2015">
                  JJ Act 2015
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/state-rules-pcma-2005">
                  State Rules on PCMA Act 2005
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/pocso-2012">
                  PoCSO 2012
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iec-material">
                  IEC Material
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faq">
                  FAQ's
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/clpra">
                  CLPRA 2016
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Directory"
                id="directory-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item href="#">CMPOs</NavDropdown.Item>
                <NavDropdown.Item href="#">JJB Members</NavDropdown.Item>
                <NavDropdown.Item href="#">CWC Members</NavDropdown.Item>
                <NavDropdown.Item href="#">DCR Officials</NavDropdown.Item>
                <NavDropdown.Item href="#">Other 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Other 2</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/success_story" className={`nav-link-custom ${isActive("/success_story") ? "active" : ""}`}>
                Success Story
              </Nav.Link>

              <NavDropdown
                title="Capacity Building"
                id="capacity-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item href="#">Courses</NavDropdown.Item>
                <NavDropdown.Item href="#">CMPO Modules</NavDropdown.Item>
                <NavDropdown.Item href="#">SJPU Modules</NavDropdown.Item>
                <NavDropdown.Item href="#">Stakeholder Modules</NavDropdown.Item>
                <NavDropdown.Item href="#">Online Refresher Capsules</NavDropdown.Item>
                <NavDropdown.Item href="#">Other</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/photos" className={`nav-link-custom ${isActive("/photos") ? "active" : ""}`}>
                Media Gallery
              </Nav.Link>
            </Nav>

            <Nav className="navbar-nav-right">
              <Nav.Link
                as={Link}
                to="/report_chile_marriage"
                className={`nav-link-custom nav-link-report ${isActive("/report_chile_marriage") ? "active" : ""}`}
              >
                Report Child Marriage
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPledgeModal(true);
                }}
                className="nav-link-custom nav-link-report"
              >
                Take the Pledge
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={showPledgeModal}
        onHide={() => setShowPledgeModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold" style={{ color: "#b92022" }}>
            Pledge Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <PledgeSection />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MainNavbar;
