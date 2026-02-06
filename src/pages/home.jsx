import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";
import slider_one from '../assets/images/bg.jpg'
import slider_two from '../assets/images/bg2.jpg'
import slider from '../assets/images/bg3.jpg'
import bg4 from '../assets/images/bg4.jpg'
import bg5 from '../assets/images/bg5.jpg'
import bg6 from '../assets/images/bg6.jpg'
import video from '../assets/images/vd.mp4'

import { FaEnvelope, FaHandHoldingHeart, FaTimes } from "react-icons/fa";

import { useState, useEffect, useRef } from 'react';
import PledgeSection from '../Form/pledge';
import { Card, Form, Button, Modal } from "react-bootstrap";


import {
  FaShieldAlt,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaHandsHelping,
} from "react-icons/fa";


import {

  InputGroup,
  ProgressBar,
} from "react-bootstrap";

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

import headerImg from "../assets/images/bg5.jpg";
import StatsCards from '../stateCard';



function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [reportNumber, setReportNumber] = useState('');
  const videoRef = useRef(null);
  // const [formData, setFormData] = useState({
  //   // Personal Details
  //   complainantName: '',
  //   contactNo: '',
  //   emailId: '',
  //   // Details of Complaint
  //   parentGuardianName: '',
  //   parentGuardianAddress: '',
  //   complaintDescription: '',
  //   // Complaint Submitted to
  //   state: '',
  //   district: '',
  //   belongsTo: '', // 'rural' or 'urban'
  //   block: '',
  //   gramPanchayat: '',
  //   ward: '',
  //   cmpo: '',
  //   captchaCode: '',
  //   declarationConfirmed: false
  // });

  // Generate random captcha code
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

  const slides = [
    { id: 0, image: slider_one },
    { id: 1, image: slider_two },
    { id: 2, image: slider },
    { id: 3, image: bg4 },
    { id: 4, image: bg5 },
    { id: 5, image: bg6 }
  ];

  // What's New items for infinite scroll
  const whatsNewItems = [
    "New campaign launched to raise awareness about child marriage prevention",
    "Workshop conducted in 50 districts across Rajasthan",
    "Mobile app launched for reporting child marriage incidents",
    "Partnership with NGOs to strengthen prevention efforts",
    "Training program for CMPOs completed successfully",
    "Awareness rallies organized in rural areas",
    "New helpline numbers added for better accessibility",
    "Community awareness programs in 100+ villages"
  ];

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      // Simulate sending OTP - set default OTP for testing
      setOtp('12345');
      alert('OTP sent to ' + mobileNumber + '\nDefault OTP for testing: 12345');
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Default OTP for testing: 12345
    const defaultOTP = '12345';
    if (otp === defaultOTP || otp.length === 6) {
      // Simulate OTP verification
      setIsVerified(true);
      alert('OTP verified successfully!');
    } else {
      alert('Please enter a valid OTP. Default OTP for testing: 12345');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };



  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Open video modal on page load
  useEffect(() => {
    // Check if modal was already shown in this session
    const hasSeenModal = sessionStorage.getItem('videoModalShown');
    if (!hasSeenModal) {
      // Small delay to ensure page is loaded
      const timer = setTimeout(() => {
        setShowVideoModal(true);
        sessionStorage.setItem('videoModalShown', 'true');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Auto-play video when modal opens
  useEffect(() => {
    if (showVideoModal && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    }
  }, [showVideoModal]);

  const handleCloseVideoModal = () => {
    setShowVideoModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      {/* She-Box Sliding Banner */}
      <div
        className="she-box-banner"
        style={{
          backgroundColor: '#ffffff',
          color: '#ffffff',
          padding: '0.3rem 0',
          overflow: 'hidden',
          position: 'relative',
          whiteSpace: 'nowrap'
        }}
      >
        <div
          className="she-box-slider-wrapper"
          style={{
            display: 'inline-flex',
            animation: 'slideLeftToRight 25s linear infinite',
            willChange: 'transform'
          }}
        >
          <a
            href="https://shebox.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingRight: '50px'
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = 'none';
            }}
          >
            <FaInfoCircle size={16} />
            <strong>She-Box is live now.</strong> If you are facing any workplace related sexual harassment, please file your complaint here -
            <strong> SHe-Box | MINISTRY OF WOMEN & CHILD DEVELOPMENT | GOI</strong>
          </a>
          {/* Duplicate for seamless loop */}
          <a
            href="https://shebox.nic.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'black',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              paddingRight: '50px'
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = 'none';
            }}
          >
            <FaInfoCircle size={16} />
            <strong>She-Box is live now.</strong> If you are facing any workplace related sexual harassment, please file your complaint here -
            <strong> SHe-Box | MINISTRY OF WOMEN & CHILD DEVELOPMENT | GOI</strong>
          </a>
        </div>
      </div>

      <section className="hero-sections text-white text-center position-relative" style={{ minHeight: '380px' }}>
        <Container>
          <Row className="align-items-stretch">

            <Col lg={9} xs={12} className="position-relative" style={{ minHeight: '280px', minHeight: '380px' }}>

              <div className="hero-slider pt-2" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className={`hero-slide ${activeSlide === slide.id ? 'active' : ''}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                  />
                ))}
              </div>


              <div className="hero-slider-controls">
                <button
                  className="hero-slider-prev"
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <div className="hero-slider-dots">
                  {slides.map((slide) => (
                    <span
                      key={slide.id}
                      className={`hero-dot ${activeSlide === slide.id ? 'active' : ''}`}
                      onClick={() => handleDotClick(slide.id)}
                      role="button"
                      tabIndex={0}
                    />
                  ))}
                </div>
                <button
                  className="hero-slider-next"
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </Col>

            <Col lg={3} id="pledge" className="py-1">
              <Card className="border-0 shadow-sm h-100 bg-white" style={{ borderRadius: '12px' }}>
                <Card.Header
                  className="border-0 py-2"
                  style={{
                    background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
                    color: 'white',
                    borderRadius: '12px 12px 0 0'
                  }}
                >
                  <h5 className="mb-0 fw-bold text-center" style={{ fontSize: '1rem' }}>What's New </h5>
                </Card.Header>
                <Card.Body className="p-3 " style={{ maxHeight: '300px', position: 'relative', overflow: 'hidden' }}>
                  <div
                    className="whats-new-scroll-container"
                    style={{
                      position: 'relative',
                      height: '100%',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="whats-new-scroll-wrapper">

                      {whatsNewItems.map((item, index) => (
                        <div
                          key={`first-${index}`}
                          className="whats-new-scroll-item"
                          style={{
                            padding: '0.75rem 0.5rem',
                            fontSize: '0.85rem',
                            lineHeight: '1.5',
                            color: '#333',
                            borderBottom: index < whatsNewItems.length - 1 ? '1px solid #e0e0e0' : 'none'
                          }}
                        >
                          <div className="d-flex align-items-start gap-2">
                            <span
                              style={{
                                color: '#b92022',
                                fontSize: '0.7rem',
                                marginTop: '0.2rem',
                                flexShrink: 0
                              }}
                            >
                              <FaInfoCircle />
                            </span>
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                      {whatsNewItems.map((item, index) => (
                        <div
                          key={`second-${index}`}
                          className="whats-new-scroll-item"
                          style={{
                            padding: '0.75rem 0.5rem',
                            fontSize: '0.85rem',
                            lineHeight: '1.5',
                            color: '#333',
                            borderBottom: index < whatsNewItems.length - 1 ? '1px solid #e0e0e0' : 'none'
                          }}
                        >
                          <div className="d-flex align-items-start gap-2">
                            <span
                              style={{
                                color: '#b92022',
                                fontSize: '0.7rem',
                                marginTop: '0.2rem',
                                flexShrink: 0
                              }}
                            >
                              <FaInfoCircle />
                            </span>
                            <span>{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>















      {/* About Us & What's New Section */}
      <section className="py-4">
        <Container>
          <Row className="align-items-start">
            {/* Left Section - About Us */}
            <Col lg={9} className="mb-3 mb-lg-0">
              <h5 className="mb-0 fw-bold mt-3" style={{ fontSize: '1rem' }}>About Us</h5>
              <p className="mb-2" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                <strong>बाल विवाह मुक्त राजस्थान</strong> is a comprehensive initiative by the Government of Rajasthan
                to eliminate child marriage and protect children's rights across the state.
              </p>
              <p className="mb-2" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                Our mission is to create awareness, provide support, and take legal action against child marriage
                through coordinated efforts with government departments, NGOs, and communities.
              </p>
              <p className="mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>
                We work towards ensuring every child has the right to education, health, and a bright future
                free from the harmful practice of child marriage.
              </p>
              <p className="mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#333' }}>The Bal Vivah Mukt Rajasthan (BVMR) mission is a comprehensive initiative aimed at eliminating child marriage from the state of Rajasthan. Launched under the guidance of the Government of Rajasthan, this mission seeks to protect the rights of children, particularly girls, and ensure they receive proper education and opportunities for development.

                Child marriage is a serious violation of human rights that affects millions of children worldwide. In Rajasthan, this practice has been prevalent due to various socio-economic factors, traditional beliefs, and lack of awareness. The BVMR mission addresses these challenges through a multi-pronged approach involving legal measures, awareness campaigns, and community participation.</p>
            </Col>

            {/* Right Section - What's New */}
            <Col lg={3}>

              {/* <PledgeSection/> */}
            </Col>

          </Row>
        </Container>
      </section>

      <StatsCards />


      {/* -------------------------------------report section ----------------------------------- */}


      {/* 
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
      </section> */}

      {/* Success Modal */}
      <Modal
        show={showSuccessModal}
        onHide={() => setShowSuccessModal(false)}
        centered
        contentClassName="border-0 shadow-lg"
      >
        <Modal.Body
          className="text-center p-4"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="mb-3">
            <FaCheckCircle
              size={64}
              style={{ color: '#28a745' }}
            />
          </div>
          <h4 className="fw-bold mb-3" style={{ color: '#b92022' }}>
            Report Submitted Successfully!
          </h4>
          <p className="mb-2" style={{ fontSize: '1.1rem', color: '#333' }}>
            Your report has been successfully submitted.
          </p>
          <p className="mb-0" style={{ fontSize: '1rem', color: '#666' }}>
            Your report number is:
          </p>
          <div
            className="mt-2 p-3 rounded"
            style={{
              backgroundColor: '#FFEBEE',
              border: '2px solid #b92022',
              display: 'inline-block'
            }}
          >
            <strong style={{ color: '#b92022', fontSize: '1.3rem', letterSpacing: '2px' }}>
              {reportNumber}
            </strong>
          </div>
          <p className="mt-3 small text-muted">
            Please save this report number for future reference.
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button
            variant="danger"
            onClick={() => setShowSuccessModal(false)}
            className="px-4 py-2"
            style={{
              background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
              border: 'none',
              borderRadius: '25px'
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    
      {/* <Modal
        show={showVideoModal}
        onHide={handleCloseVideoModal}
        centered
        size="lg"
        contentClassName="border-0 shadow-lg"
        backdrop="static"
      >
        <Modal.Header
          className="border-0 pb-2"
          style={{
            background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
            color: 'white'
          }}
        >
          <Modal.Title className="fw-bold">
            Child Marriage Prevention Awareness
          </Modal.Title>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={handleCloseVideoModal}
            aria-label="Close"
          ></button>
        </Modal.Header>
        <Modal.Body className="p-0" style={{ backgroundColor: '#000' }}>
          <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
       


            <video
              ref={videoRef}
              controls
              autoPlay
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vh',
                height: '100vh',
                objectFit: 'contain'
              }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal.Body>
      </Modal> */}
      <Modal
  show={showVideoModal}
  onHide={handleCloseVideoModal}
  centered
  size="lg"
  contentClassName="border-0 shadow-lg"
  backdrop="static"
>
  <Modal.Header
    className="border-0 pb-2"
    style={{
      background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
      color: 'white'
    }}
  >
    <Modal.Title className="fw-bold">
      Child Marriage Prevention Awareness
    </Modal.Title>
    <button
      type="button"
      className="btn-close btn-close-white"
      onClick={handleCloseVideoModal}
      aria-label="Close"
    ></button>
  </Modal.Header>
  <Modal.Body className="p-0" style={{ backgroundColor: '#000' }}>
    <div className="position-relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <video
        ref={videoRef}
        controls
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vh',      // Changed from '100vh'
          height: '100%',     // Changed from '100vh'
          objectFit: 'contain'
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </Modal.Body>
</Modal>

    </>
  );
}

export default HeroSection;