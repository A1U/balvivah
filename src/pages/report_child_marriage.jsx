import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect, useRef } from 'react';

import { Card, Form, Button, Modal } from "react-bootstrap";
import { FaShieldAlt } from 'react-icons/fa';
import { FaHandsHelping } from 'react-icons/fa';
import slider_one from '../assets/images/bg.jpg'
import slider_two from '../assets/images/bg2.jpg'
import slider from '../assets/images/bg3.jpg'
import bg4 from '../assets/images/bg4.jpg'
import bg5 from '../assets/images/bg5.jpg'
import bg6 from '../assets/images/bg6.jpg'


import {

  FaLock,

  FaPhone,
  FaPaperPlane,
  FaKey,
  FaCheckCircle,
  FaClock,
  FaRedo,
  FaTasks,
  FaCheck,
  FaCheckDouble,

  FaFolderOpen,
  FaCamera,

  FaChild,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";



const ReportChilMarriage = () => {


  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setFormData(prev => ({ ...prev, captchaCode: '' }));
  };



  const [formData, setFormData] = useState({
    // Personal Details
    complainantName: '',
    contactNo: '',
    emailId: '',
    // Details of Complaint
    parentGuardianName: '',
    parentGuardianAddress: '',
    complaintDescription: '',
    // Complaint Submitted to
    state: '',
    district: '',
    belongsTo: '', // 'rural' or 'urban'
    block: '',
    gramPanchayat: '',
    ward: '',
    cmpo: '',
    captchaCode: '',
    declarationConfirmed: false
  });


  



  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


      const generateReportNumber = () => {
        // Generate a random 8-digit report number
        return 'RPT' + Math.floor(10000000 + Math.random() * 90000000).toString();
      };
    
      const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Validate Personal Details
        if (!formData.complainantName.trim()) {
          alert('Please enter Name of Complainant');
          return;
        }
        if (!formData.contactNo.trim()) {
          alert('Please enter Contact No');
          return;
        }
        if (!/^\d{10}$/.test(formData.contactNo.trim())) {
          alert('Please enter a valid 10-digit contact number');
          return;
        }
        if (!formData.emailId.trim()) {
          alert('Please enter Email ID');
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId.trim())) {
          alert('Please enter a valid email address');
          return;
        }
    
        // Validate Details of Complaint
        if (!formData.parentGuardianName.trim()) {
          alert('Please enter Name of Parent/Guardian against whom complaint is made');
          return;
        }
        if (!formData.parentGuardianAddress.trim()) {
          alert('Please enter Address of Parent/Guardian');
          return;
        }
        if (!formData.complaintDescription.trim()) {
          alert('Please enter Brief Description of Complaint');
          return;
        }
        if (formData.complaintDescription.trim().length > 1000) {
          alert('Brief Description of Complaint must not exceed 1000 characters');
          return;
        }
    
        // Validate Complaint Submitted to
        if (!formData.state) {
          alert('Please select State');
          return;
        }
        if (!formData.belongsTo) {
          alert('Please select whether the complaint belongs to Rural or Urban');
          return;
        }
        if (formData.belongsTo === 'rural') {
          if (!formData.block.trim()) {
            alert('Please enter Block');
            return;
          }
          if (!formData.gramPanchayat.trim()) {
            alert('Please enter Gram Panchayat');
            return;
          }
        } else if (formData.belongsTo === 'urban') {
          if (!formData.ward.trim()) {
            alert('Please enter Ward');
            return;
          }
          if (!formData.cmpo.trim()) {
            alert('Please enter CMPO');
            return;
          }
        }
    
        // Validate Captcha
        if (captcha.toUpperCase() !== formData.captchaCode.toUpperCase()) {
          alert('Captcha code does not match');
          setCaptcha(generateCaptcha());
          setFormData(prev => ({ ...prev, captchaCode: '' }));
          return;
        }
    
        // Validate Declaration Confirmation
        if (!formData.declarationConfirmed) {
          alert('Please confirm the declaration to continue');
          return;
        }
    
        // Generate report number
        const reportNo = generateReportNumber();
        setReportNumber(reportNo);
        
        // Show success modal
        setShowSuccessModal(true);
        
        // Reset form after submission
        setFormData({
          complainantName: '',
          contactNo: '',
          emailId: '',
          parentGuardianName: '',
          parentGuardianAddress: '',
          complaintDescription: '',
          state: '',
          district: '',
          belongsTo: '',
          block: '',
          gramPanchayat: '',
          ward: '',
          cmpo: '',
          captchaCode: '',
          declarationConfirmed: false
        });
        setCaptcha(generateCaptcha());
      };
    
      const slides = [
        { id: 0, image: slider_one },
        { id: 1, image: slider_two },
        { id: 2, image: slider },
        { id: 3, image: bg4 },
        { id: 4, image: bg5 },
        { id: 5, image: bg6 }
      ];




  return (
    <>




    <section id="report" className="py-5">
        <Container>
   
          <Row className="justify-content-center">
            <Col lg={12} xl={12}>
              <Card className="border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <div 
                  className="position-relative text-white text-center py-4"
                  style={{
                    background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                    <FaShieldAlt size={28} />
                    <FaHandsHelping size={28} />
                  </div>
                  <h4 className="fw-bold mb-0">Report Child Marriage</h4>
                  <p className="mb-0 opacity-90" style={{ fontSize: '0.9rem' }}>
                    <FaLock className="me-1" /> Secure verification & incident reporting
                  </p>
                </div>

                <Card.Body className="p-4" style={{ backgroundColor: '#fff' }}>
                  <Form onSubmit={handleFormSubmit}>
                    {/* Personal Details Section */}
                    <div className="mb-4 pb-4 border-bottom">
                      <h6 className="fw-bold mb-3" style={{ color: '#b92022' }}>
                        Personal Details  
                      </h6>
                      <Row className="g-3">
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Name of Complainant <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="complainantName"
                            value={formData.complainantName}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Contact No <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="contactNo"
                            value={formData.contactNo}
                            onChange={handleInputChange}
                            placeholder="Enter 10-digit contact number"
                            required
                            maxLength="10"
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                        </Col>
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Email ID <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="emailId"
                            value={formData.emailId}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                        </Col>
                      </Row>
                    </div>

                    {/* Details of Complaint Section */}
                    <div className="mb-4 pb-4 border-bottom">
                      <h6 className="fw-bold mb-3" style={{ color: '#b92022' }}>
                        Details of Complaint
                      </h6>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Name of Parent/Guardian against whom complaint is made <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="parentGuardianName"
                            value={formData.parentGuardianName}
                            onChange={handleInputChange}
                            placeholder="Enter name"
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                        </Col>
                        <Col md={6}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Address of Parent/Guardian <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="parentGuardianAddress"
                            value={formData.parentGuardianAddress}
                            onChange={handleInputChange}
                            placeholder="Enter address"
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                        </Col>
                        <Col xs={12}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Brief Description of Complaint <span className="text-danger">*</span>
                            <small className="text-muted ms-2">(1000 Characters)</small>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="complaintDescription"
                            value={formData.complaintDescription}
                            onChange={handleInputChange}
                            placeholder="Please ensure that the complaint must include date and sequence of events."
                            required
                            maxLength={1000}
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          />
                          <small className="text-muted">
                            {formData.complaintDescription.length}/1000 characters
                          </small>
                          <div className="mt-2 p-2 rounded" style={{ backgroundColor: '#FFEBEE', fontSize: '0.85rem' }}>
                            <strong>Note:</strong> Please ensure that the complaint must include date and sequence of events.
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Complaint Submitted to Section */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3" style={{ color: '#b92022' }}>
                        Complaint Submitted to
                      </h6>
                      <Row className="g-3">
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            State <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          >
                            <option value="">Select State</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Other">Other</option>
                          </Form.Select>
                        </Col>
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            District
                          </Form.Label>
                          <Form.Select
                            name="district"
                            value={formData.district}
                            onChange={handleInputChange}
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          >
                            <option value="">Select District</option>
                            <option value="Ajmer">Ajmer</option>
                            <option value="Alwar">Alwar</option>
                            <option value="Balotra">Balotra</option>
                            <option value="Banswara">Banswara</option>
                            <option value="Baran">Baran</option>
                            <option value="Barmer">Barmer</option>
                            <option value="Beawar">Beawar</option>
                            <option value="Bharatpur">Bharatpur</option>
                            <option value="Bhilwara">Bhilwara</option>
                            <option value="Bikaner">Bikaner</option>
                            <option value="Bundi">Bundi</option>
                            <option value="Chittorgarh">Chittorgarh</option>
                            <option value="Churu">Churu</option>
                            <option value="Dausa">Dausa</option>
                            <option value="Deeg">Deeg</option>
                            <option value="Dholpur">Dholpur</option>
                            <option value="Didwana-Kuchaman">Didwana-Kuchaman</option>
                            <option value="Dungarpur">Dungarpur</option>
                            <option value="Ganganagar">Ganganagar</option>
                            <option value="Hanumangarh">Hanumangarh</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Jaisalmer">Jaisalmer</option>
                            <option value="Jalore">Jalore</option>
                            <option value="Jhalawar">Jhalawar</option>
                            <option value="Jhunjhunu">Jhunjhunu</option>
                            <option value="Jodhpur">Jodhpur</option>
                            <option value="Karauli">Karauli</option>
                            <option value="Khairthal-Tijara">Khairthal-Tijara</option>
                            <option value="Kota">Kota</option>
                            <option value="Kotputli-Behror">Kotputli-Behror</option>
                            <option value="Nagaur">Nagaur</option>
                            <option value="Pali">Pali</option>
                            <option value="Phalodi">Phalodi</option>
                            <option value="Pratapgarh">Pratapgarh</option>
                            <option value="Rajsamand">Rajsamand</option>
                            <option value="Salumbar">Salumbar</option>
                            <option value="Sawai Madhopur">Sawai Madhopur</option>
                            <option value="Sikar">Sikar</option>
                            <option value="Sirohi">Sirohi</option>
                            <option value="Tonk">Tonk</option>
                            <option value="Udaipur">Udaipur</option>
                          </Form.Select>
                        </Col>
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            Belongs to <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Select
                            name="belongsTo"
                            value={formData.belongsTo}
                            onChange={handleInputChange}
                            required
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem'
                            }}
                          >
                            <option value="">Select</option>
                            <option value="rural">Rural</option>
                            <option value="urban">Urban</option>
                          </Form.Select>
                        </Col>
                        {/* Show Block and Gram Panchayat for Rural */}
                        {formData.belongsTo === 'rural' && (
                          <>
                            <Col md={4}>
                              <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                                Block <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="block"
                                value={formData.block}
                                onChange={handleInputChange}
                                placeholder="Enter Block"
                                required
                                style={{
                                  border: '1.5px solid #e0e0e0',
                                  borderRadius: '8px',
                                  padding: '0.6rem 0.75rem'
                                }}
                              />
                            </Col>
                            <Col md={4}>
                              <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                                Gram Panchayat <span className="text-danger">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                name="gramPanchayat"
                                value={formData.gramPanchayat}
                                onChange={handleInputChange}
                                placeholder="Enter Gram Panchayat"
                                required
                                style={{
                                  border: '1.5px solid #e0e0e0',
                                  borderRadius: '8px',
                                  padding: '0.6rem 0.75rem'
                                }}
                              />
                            </Col>
                          </>
                        )}
                        {/* Show Ward for Urban */}
                        {formData.belongsTo === 'urban' && (
                          <Col md={4}>
                            <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                              Ward <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="ward"
                              value={formData.ward}
                              onChange={handleInputChange}
                              placeholder="Enter Ward"
                              required
                              style={{
                                border: '1.5px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '0.6rem 0.75rem'
                              }}
                            />
                          </Col>
                        )}
                        <Col md={4}>
                          <Form.Label className="fw-bold" style={{ color: '#b92022' }}>
                            CMPO <span className="text-danger">*</span>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="cmpo"
                            value={formData.cmpo}
                            onChange={handleInputChange}
                            placeholder="Enter CMPO"
                            required
                            disabled={formData.belongsTo === 'rural'}
                            style={{
                              border: '1.5px solid #e0e0e0',
                              borderRadius: '8px',
                              padding: '0.6rem 0.75rem',
                              backgroundColor: formData.belongsTo === 'rural' ? '#f5f5f5' : '#fff'
                            }}
                          />
                          {formData.belongsTo === 'rural' && (
                            <small className="text-muted">CMPO field is disabled for rural areas</small>
                          )}
                        </Col>
                        <Col xs={12}>
                          <Form.Label className="fw-bold mb-2" style={{ color: '#b92022', fontSize: '0.9rem' }}>
                            Captcha Code <span className="text-danger">*</span>
                          </Form.Label>
                          <div className="d-flex align-items-center gap-2">
                            <div
                              className="d-flex align-items-center justify-content-center"
                              style={{
                                backgroundColor: '#f5f5f5',
                                border: '1.5px solid #e0e0e0',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                letterSpacing: '2px',
                                color: '#b92022',
                                minHeight: '38px',
                                width: '100px',
                                flexShrink: 0
                              }}
                            >
                              {captcha}
                            </div>
                            <Button
                              type="button"
                              variant="outline-secondary"
                              onClick={refreshCaptcha}
                              style={{
                                border: '1.5px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '0.4rem 0.6rem',
                                fontSize: '0.85rem',
                                flexShrink: 0
                              }}
                            >
                              <FaRedo size={12} />
                            </Button>
                            <Form.Control
                              type="text"
                              name="captchaCode"
                              value={formData.captchaCode}
                              onChange={handleInputChange}
                              placeholder="Enter Captcha Code"
                              required
                              style={{
                                border: '1.5px solid #e0e0e0',
                                borderRadius: '8px',
                                padding: '0.5rem 0.75rem',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                flex: 1
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* Declaration Section */}
                    <div className="mt-4 mb-4">
                      <div 
                        className="p-3 rounded"
                        style={{
                          backgroundColor: '#FFEBEE',
                          border: '1.5px solid #b92022',
                          borderRadius: '8px'
                        }}
                      >
                        <p className="mb-2 fw-bold" style={{ color: '#b92022', fontSize: '0.95rem' }}>
                          Declaration:
                        </p>
                        <p className="mb-3" style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.6' }}>
                          Please note that filing a false complaint is a punishable offense and may result in penalties.
                          Information shared on this portal will be confidential.
                        </p>
                        <Form.Check
                          type="checkbox"
                          name="declarationConfirmed"
                          checked={formData.declarationConfirmed}
                          onChange={handleInputChange}
                          required
                          label={
                            <span style={{ color: '#333', fontSize: '0.9rem', fontWeight: '500' }}>
                              Do you wish to continue?
                            </span>
                          }
                        />
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <Button 
                        variant="danger" 
                        size="lg" 
                        className="px-5 py-2 fw-bold"
                        type="submit"
                        disabled={!formData.declarationConfirmed}
                        style={{
                          background: formData.declarationConfirmed 
                            ? 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)' 
                            : '#cccccc',
                          border: 'none',
                          borderRadius: '25px',
                          boxShadow: formData.declarationConfirmed 
                            ? '0 4px 15px rgba(185, 32, 34, 0.4)' 
                            : 'none',
                          transition: 'all 0.3s ease',
                          cursor: formData.declarationConfirmed ? 'pointer' : 'not-allowed',
                          opacity: formData.declarationConfirmed ? 1 : 0.6
                        }}
                        onMouseEnter={(e) => {
                          if (formData.declarationConfirmed) {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(185, 32, 34, 0.5)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (formData.declarationConfirmed) {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(185, 32, 34, 0.4)';
                          }
                        }}
                      >
                        <FaHandsHelping className="me-2" /> Submit Report 
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      
    </>
  )
}

export default ReportChilMarriage
