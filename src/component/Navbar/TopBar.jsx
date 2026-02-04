import React from 'react'
import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button, InputGroup, Form } from "react-bootstrap";
import { FaGlobe, FaMinus, FaPlus, FaSearch, FaPalette, FaMoon, FaCircle } from "react-icons/fa";
import ThemeDropdown from '../Theame';
import { useLanguage } from "../../context/languageContext";


const TopBar = () => {

  const { language, setLanguage } = useLanguage();



   const [currentTheme, setCurrentTheme] = useState('red');
  
  
  
    const themes = {
      default: {
        name: 'Blue',
        icon: 'fa-circle',
        color: '#1565C0',
        primary: '#1565C0',
        secondary: '#1976D2',
        background: '#f8f9fa'
      },
      green: {
        name: 'Green',
        icon: 'fa-circle',
        color: '#2E7D32',
        primary: '#2E7D32',
        secondary: '#388E3C',
        background: '#f1f8f4'
      },
      purple: {
        name: 'Purple',
        icon: 'fa-circle',
        color: '#6A1B9A',
        primary: '#6A1B9A',
        secondary: '#7B1FA2',
        background: '#f3e5f5'
      },
      red: {
        name: 'Red',
        icon: 'fa-circle',
        color: '#D32F2F',
        primary: '#D32F2F',
        secondary: '#E53935',
        background: '#ffebee'
      },
      orange: {
        name: 'Orange',
        icon: 'fa-circle',
        color: '#F57C00',
        primary: '#F57C00',
        secondary: '#FB8C00',
        background: '#fff3e0'
      },
      dark: {
        name: 'Dark',
        icon: 'fa-moon',
        color: '#212529',
        primary: '#212529',
        secondary: '#343a40',
        background: '#1a1d20'
      }
    };
  
  
       useEffect(() => {
      // Load saved theme from localStorage
      const savedTheme = localStorage.getItem('appTheme') || 'red';
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }, []);
  
     const applyTheme = (themeName) => {
      const theme = themes[themeName];
      
      // Apply CSS variables to root
      document.documentElement.style.setProperty('--primary-color', theme.primary);
      document.documentElement.style.setProperty('--secondary-color', theme.secondary);
      document.documentElement.style.setProperty('--background-color', theme.background);
      
      // Optional: Add theme class to body for more complex styling
      document.body.className = `theme-${themeName}`;
    };
  
     const handleThemeChange = (themeName) => {
      setCurrentTheme(themeName);
      applyTheme(themeName);
      localStorage.setItem('appTheme', themeName);
    };
  
  

  const [fontSize, setFontSize] = useState(16);

  const increaseFont = () => {
    setFontSize((prev) => Math.min(prev + 1, 22)); // max limit
  };

  const decreaseFont = () => {
    setFontSize((prev) => Math.max(prev - 1, 12)); // min limit
  };


  // Apply to entire site
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);


  return (
    <>
      <div className='top-bar bg-dark py-2'>

        <Container>
          <Row className="align-items-center">

            {/* Left Section - Helpline Numbers */}
            <Col md={9} lg={9}>
              <div className="d-flex align-items-center flex-wrap" style={{ gap: '10px', fontSize: '12px' }}>
                <a 
                  href="#main-content" 
                  className="text-white text-decoration-none" 
                  style={{ fontSize: '12px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFD700'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  Screen Reader Access
                </a>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <span className="text-white" style={{ fontSize: '12px' }}>
                  National Cyber Crime Helpline: <a href="tel:1930" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>1930</a>
                </span>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <span className="text-white" style={{ fontSize: '12px' }}>
                  WHL: <a href="tel:181" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>181</a>
                </span>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <span className="text-white" style={{ fontSize: '12px' }}>
                  CHL: <a href="tel:1098" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>1098</a>
                </span>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <span className="text-white" style={{ fontSize: '12px' }}>
                  Legal (NALSA) Helpline: <a href="tel:15100" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>15100</a>
                </span>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <span className="text-white" style={{ fontSize: '12px' }}>
                  For Emergency: <a href="tel:112" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: 'bold' }}>112</a>
                </span>
                <span className="text-white-50" style={{ fontSize: '14px' }}>|</span>
                <a 
                  href="#main-content" 
                  className="text-white text-decoration-none" 
                  style={{ fontSize: '12px', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFD700'}
                  onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  Skip to main content
                </a>
              </div>
            </Col>

            {/* Right Section - Controls */}
            <Col md={3} lg={3}>
              <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">

                {/* Language Change */}
                <Dropdown>
                  <Dropdown.Toggle
                    size="sm"
                    variant="outline-light"
                    className="rounded-pill"
                  >
                    <FaGlobe className="me-1"/> {language === 'hindi' ? 'हिन्दी' : 'English'}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setLanguage('english')}>English</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setLanguage('hindi')}>हिन्दी</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* Font Size Change */}
                <div className="d-flex align-items-center gap-1">
                  <Button style={{ padding: '0.2rem 0.4rem', fontSize: '0.7rem' }}
                    size="sm"
                    variant="outline-light rounded-pill"
                    onClick={decreaseFont}
                  >
                    <FaMinus />
                  </Button>
                  <span className="text-white" style={{ fontSize: "0.7rem" }}>
                    A
                  </span>
                  <Button
                    size="sm"
                    variant="outline-light rounded-pill"
                    onClick={increaseFont}
                  >
                    <FaPlus />
                  </Button>
                </div>

               

                {/* Theme */}
                <Dropdown>
                  <Dropdown.Toggle 
                    size="sm" 
                    variant="outline-light" 
                    style={{ padding: '0.2rem 0.6rem', fontSize: '0.75rem' }}
                  >
                    <FaPalette />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {Object.entries(themes).map(([key, theme]) => (
                      <Dropdown.Item 
                        key={key}
                        onClick={() => handleThemeChange(key)}
                        active={currentTheme === key}
                      >
                        <i 
                          className={`fas ${theme.icon} me-2`} 
                          style={{ color: theme.color }}
                        ></i>
                        {theme.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

              </div>
            </Col>

          </Row>
        </Container>

      </div>


    </>
  );
};

export default TopBar;
