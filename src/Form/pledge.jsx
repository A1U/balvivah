import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import { FaDownload, FaTimes, FaUser, FaUserTie, FaBirthdayCake, FaMapMarkerAlt, FaHandHoldingHeart, FaCheckCircle } from "react-icons/fa";
import pledgeBgEnglish from "../assets/images/Pledge_english.jpg";
import pledgeBgHindi from "../assets/images/Pledge_hindi.jpg";
import jsPDF from "jspdf";

const PledgeSection = () => {
  const [pledgeTaken, setPledgeTaken] = useState(false);

  const handleTakePledge = () => {
  setPledgeTaken(true);
};


  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    state: "",
    district: "",
    language: "",
    captchaCode: ""
  });

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

  const [showModal, setShowModal] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  
  // Name positions for different certificate backgrounds
  // x: null means auto-center horizontally, y: vertical position in pixels
  const namePositions = {
    hindi: { x: null, y: 710 },    // Position for Hindi certificate (Pledge_hindi.jpg)
    english: { x: null, y: 740 }   // Position for English certificate (Pledge_english.jpg)
  };

  const sharePledge = async (platform) => {
    const shareUrl = window.location.href;
    const shareText =
      formData.language === "हिन्दी"
        ? "मैंने बाल विवाह के खिलाफ शपथ ली है। आप भी जुड़ें।"
        : "I took the pledge against child marriage. Join the mission.";

    // Prefer native share when available (best for Instagram on mobile)
    if (navigator.share && platform === "instagram") {
      try {
        await navigator.share({ title: "Pledge", text: shareText, url: shareUrl });
        return;
      } catch {
        // ignore and fall back
      }
    }

    const encodedText = encodeURIComponent(`${shareText}\n${shareUrl}`);
    const encodedUrl = encodeURIComponent(shareUrl);

    if (platform === "whatsapp") {
      window.open(`https://wa.me/?text=${encodedText}`, "_blank", "noopener,noreferrer");
      return;
    }

    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank", "noopener,noreferrer");
      return;
    }

    // Instagram doesn’t support direct web URL sharing like WhatsApp/Facebook.
    // Fallback: copy message + link and open Instagram.
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      alert(formData.language === "हिन्दी" ? "मैसेज कॉपी हो गया। अब Instagram पर पेस्ट करें।" : "Message copied. Paste it on Instagram.");
    } catch {
      alert(formData.language === "हिन्दी" ? "कृपया लिंक कॉपी करके Instagram पर शेयर करें।" : "Please copy the link and share it on Instagram.");
    }
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const generatePDF = async () => {
    try {
      // Create PDF with custom size: 1082x1521 pixels
      const pdfWidth = 1082; // pixels
      const pdfHeight = 1521; // pixels
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [pdfWidth, pdfHeight]
      });

      // Choose certificate background by selected language (English → Pledge_english.jpg, Hindi → Pledge_hindi.jpg)
      const certificateBg = formData.language === "हिन्दी" ? pledgeBgHindi : pledgeBgEnglish;
      
      // Get name position based on selected language
      const currentNamePosition = formData.language === "हिन्दी" 
        ? namePositions.hindi 
        : namePositions.english;

      // Load and add certificate background image
      const img = new Image();
      
      return new Promise((resolve, reject) => {
        img.onload = () => {
          try {
            // Add background image to cover entire PDF
            pdf.addImage(img, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            
            // Set font for name
            pdf.setFontSize(45);
            pdf.setFont('helvetica', 'bold');
            pdf.setTextColor(185, 32, 34); // Color #b92022
            
            // Add name with position based on certificate language
            if (formData.name) {
              // Calculate X position: use custom x if provided, otherwise center horizontally
              let xPosition;
              if (currentNamePosition.x !== null && currentNamePosition.x !== undefined) {
                xPosition = currentNamePosition.x;
              } else {
                // Auto-center horizontally
                const textWidth = pdf.getTextWidth(formData.name);
                xPosition = (pdfWidth - textWidth) / 2;
              }
              
              // Use Y position from language-specific settings
              const yPosition = currentNamePosition.y !== null && currentNamePosition.y !== undefined 
                ? currentNamePosition.y 
                : pdfHeight * 0.6; // Fallback to 60% from top
              
              pdf.text(formData.name, xPosition, yPosition);
            }
            
            // Generate PDF blob
            const pdfBlob = pdf.output('blob');
            setPdfBlob(URL.createObjectURL(pdfBlob));
            setShowModal(true);
            resolve();
          } catch (error) {
            console.error('Error adding image to PDF:', error);
            reject(error);
          }
        };
        
        img.onerror = (error) => {
          console.error('Error loading certificate image:', error);
          alert('Error loading certificate image. Please check if the image file exists.');
          reject(error);
        };
        
        img.src = certificateBg;
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating certificate. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.mobileNo.trim()) {
      alert('Please enter your mobile number');
      return;
    }
    
    if (!/^\d{10}$/.test(formData.mobileNo.trim())) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // if (!formData.state) {
    //   alert('Please select your state');
    //   return;
    // }
    
    if (!formData.language) {
      alert('Please select a language');
      return;
    }
    
    if (captcha.toUpperCase() !== formData.captchaCode.toUpperCase()) {
      alert('Captcha code does not match');
      setCaptcha(generateCaptcha());
      setFormData(prev => ({ ...prev, captchaCode: '' }));
      return;
    }
    
    generatePDF();
  };

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    setFormData(prev => ({ ...prev, captchaCode: '' }));
  };

  const handleDownload = () => {
    if (pdfBlob) {
      const link = document.createElement('a');
      link.href = pdfBlob;
      link.download = `Pledge_Certificate_${formData.name.replace(/\s+/g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <>
     
          <Card id="pledge" className="border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>


            <Card.Body className="p-3 bg-white">
              <Form onSubmit={handleSubmit}>
                {/* Full Width Fields */}


                <Row>
                  {/* Left Column */}
                  <Col md={6}>
                  <Form.Group className="mb-2">
                  <Form.Label className="fw-bold d-flex align-items-center gap-1 mb-1" style={{ color: '#b92022', fontSize: '0.8rem' }}>
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      padding: '0.35rem 0.5rem',
                      fontSize: '0.85rem'
                    }}
                  />
                </Form.Group>
                  </Col>                  <Col md={6}>
                   

                    <Form.Group className="mb-2">
                      <Form.Label className="fw-bold d-flex align-items-center gap-1 mb-1" style={{ color: '#b92022', fontSize: '0.8rem' }}>
                        Select Language <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Select
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        required
                        style={{
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          padding: '0.35rem 0.5rem',
                          fontSize: '0.85rem'
                        }}
                      >
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="हिन्दी">हिन्दी (Hindi)</option>                       
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  {/* Right Column */}
                  <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label className="fw-bold d-flex align-items-center gap-1 mb-1" style={{ color: '#b92022', fontSize: '0.8rem' }}>
                        Mobile No. <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="mobileNo"
                        placeholder="Enter Mobile Number"
                        value={formData.mobileNo}
                        onChange={handleInputChange}
                        required
                        maxLength="10"
                        style={{
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          padding: '0.35rem 0.5rem',
                          fontSize: '0.85rem'
                        }}
                      />
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group className="mb-2">
                      <Form.Label className="fw-bold d-flex align-items-center gap-1 mb-1" style={{ color: '#b92022', fontSize: '0.8rem' }}>
                        District
                      </Form.Label>
                      <Form.Select
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        style={{
                          border: '1px solid #e0e0e0',
                          borderRadius: '6px',
                          padding: '0.35rem 0.5rem',
                          fontSize: '0.85rem'
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
                    </Form.Group>

                  </Col>
                </Row>

                {/* Full Width Captcha Code */}
                <Form.Group className="mb-2">
                  <Form.Label className="fw-bold d-flex align-items-center gap-1 mb-1" style={{ color: '#b92022', fontSize: '0.8rem' }}>
                    Captcha Code
                  </Form.Label>
                  <div className="d-flex align-items-center gap-1">
                    <div 
                      className="flex-grow-1 d-flex align-items-center justify-content-center p-1"
                      style={{
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        color: '#b92022',
                        minHeight: '32px'
                      }}
                    >
                      {captcha}
                    </div>
                    <Button
                      type="button"
                      variant="outline-secondary"
                      onClick={refreshCaptcha}
                      style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '6px',
                        padding: '0.35rem 0.5rem',
                        fontSize: '0.75rem'
                      }}
                    >
                      Refresh
                    </Button>
                  </div>
                  <Form.Control
                    type="text"
                    name="captchaCode"
                    placeholder="Enter Captcha Code"
                    value={formData.captchaCode}
                    onChange={handleInputChange}
                    style={{
                      border: '1px solid #e0e0e0',
                      borderRadius: '6px',
                      padding: '0.35rem 0.5rem',
                      fontSize: '0.85rem',
                      marginTop: '0.35rem',
                      textTransform: 'uppercase'
                    }}
                  />
                </Form.Group>

                <div className="text-center mt-2">
                  <Button 
                    variant="danger" 
                    type="submit"
                    className="px-3 py-1 fw-bold"
                    style={{
                      background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      boxShadow: '0 2px 8px rgba(185, 32, 34, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 4px 12px rgba(185, 32, 34, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 2px 8px rgba(185, 32, 34, 0.3)';
                    }}
                  >
                    <FaCheckCircle className="me-1" size={12} /> Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
       

      {/* Success Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered
        className="certificate-modal"
        contentClassName="border-0 shadow-lg"
      >
        <Modal.Header 
          className="border-0 d-flex justify-content-between align-items-center"
          style={{
            background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
            color: 'white'
          }}
        >
          <Modal.Title className="fw-bold mb-0">Pledge Submitted Successfully</Modal.Title>
          <Button
            variant="link"
            onClick={() => setShowModal(false)}
            className="text-white p-0"
            style={{ textDecoration: 'none', opacity: 0.8, marginLeft: 'auto' }}
          >
            <FaTimes size={20} />
          </Button>
        </Modal.Header>
        <Modal.Body 
          className="p-4"
          style={{ 
            backgroundColor: '#FFEBEE'
          }}
        >
          <div className="text-center mb-4">
            <FaCheckCircle size={60} style={{ color: '#b92022', marginBottom: '1rem' }} />
            <h5 className="fw-bold mb-3" style={{ color: '#b92022' }}>
              Thank You for Taking the Pledge!
            </h5>
            <div 
              className="p-3 rounded"
              style={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                textAlign: 'left',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#333'
              }}
            >
              {formData.language === "हिन्दी" ? (
                <>
                  <p className="mb-3">
                    बाल विवाह एक सामाजिक बुराई और कानून का उल्लंघन है, जो बालिकाओं की शिक्षा, सुरक्षा, स्वास्थ्य और विकास में बाधा है, तथा उनके सपनों को साकार होने से रोकता है।
                  </p>
                  <p className="mb-3">
                    इसलिए, मैं शपथ लेता / लेती हूँ कि—
                  </p>
                  <p className="mb-2">
                    मैं बाल विवाह के खिलाफ हर संभव प्रयास करूँगा / करूँगी।
                  </p>
                  <p className="mb-2">
                    मैं सुनिश्चित करूँगा / करूँगी कि मेरे परिवार, पड़ोस और समुदाय में किसी भी बालिका का बाल विवाह न हो।
                  </p>
                  <p className="mb-2">
                    मैं बाल विवाह के किसी भी प्रयास की सूचना पंचायत और सरकार को दूँगा / दूँगी।
                  </p>
                  <p className="mb-0">
                    मैं सभी बच्चों की शिक्षा और सुरक्षा के लिए अपनी आवाज बुलंद करूँगा / करूँगी और बाल विवाह मुक्त भारत का निर्माण करूँगा / करूँगी।
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-3">
                    Child marriage is a social evil and a violation of law. It obstructs the education, safety, health, and development of girls and prevents them from fulfilling their dreams.
                  </p>
                  <p className="mb-3">
                    Therefore, I pledge that—
                  </p>
                  <p className="mb-2">
                    I will make every possible effort to oppose child marriage.
                  </p>
                  <p className="mb-2">
                    I will ensure that no girl in my family, neighborhood, or community is subjected to child marriage.
                  </p>
                  <p className="mb-2">
                    I will report any attempt of child marriage to the Panchayat and the government.
                  </p>
                  <p className="mb-0">
                    I will raise my voice for the education and safety of all children and work towards building a child-marriage-free India.
                  </p>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer 
          className="border-0 d-flex justify-content-center flex-wrap gap-2"
          style={{ 
            padding: '1.25rem 1.5rem',
            backgroundColor: '#FFEBEE'
          }}
        >
      
{!pledgeTaken ? (
      <Button 
        variant="danger" 
        onClick={handleTakePledge}
        className="d-flex align-items-center gap-2 px-5 py-2"
        style={{ 
          background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0 3px 10px rgba(185, 32, 34, 0.3)'
        }}
      >
        <FaHandHoldingHeart /> Take a Pledge
      </Button>
    ) : (
      <>
        <Button 
          variant="danger" 
          onClick={handleDownload}
          className="d-flex align-items-center gap-2 px-5 py-2"
          style={{ 
            background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 3px 10px rgba(185, 32, 34, 0.3)',
            animation: 'pulse 0.5s ease-in-out'
          }}
        >
        <FaDownload /> Download Certificate
        </Button>

        <div className="d-flex align-items-center gap-2">
          <Button
            variant="light"
            onClick={() => sharePledge("whatsapp")}
            className="d-flex align-items-center justify-content-center"
            style={{ width: 44, height: 44, borderRadius: 12 }}
            title="Share on WhatsApp"
          >
            <i className="bi bi-whatsapp" style={{ fontSize: 20, color: "#25D366" }} />
          </Button>
          <Button
            variant="light"
            onClick={() => sharePledge("facebook")}
            className="d-flex align-items-center justify-content-center"
            style={{ width: 44, height: 44, borderRadius: 12 }}
            title="Share on Facebook"
          >
            <i className="bi bi-facebook" style={{ fontSize: 20, color: "#1877F2" }} />
          </Button>
          <Button
            variant="light"
            onClick={() => sharePledge("instagram")}
            className="d-flex align-items-center justify-content-center"
            style={{ width: 44, height: 44, borderRadius: 12 }}
            title="Share on Instagram"
          >
            <i className="bi bi-instagram" style={{ fontSize: 20, color: "#E1306C" }} />
          </Button>
        </div>
      </>
    )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PledgeSection;
