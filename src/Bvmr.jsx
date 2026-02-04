import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAdjust } from "react-icons/fa";
import  '../src/style/index.css'

import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../src/assets/images/logo_sm.png'
import balAdhikaritaVibhag from '../src/assets/images/bal-adhikarita-vibhag.png'
import cm from '../src/assets/images/cm.jpeg'
import dcm from '../src/assets/images/dcm.png'
import mla from '../src/assets/images/mla.jpeg'
import { useLanguage } from "./context/languageContext";
import hindilogo from "../src/assets/images/logo_hindi.png"
import englishlogo from "../src/assets/images/logo_english.png"





const Bvmr = () => {
    const { language } = useLanguage(); // only reading


    const translations = {
  english: {
    title: "Department of Child Rights",
    subtitle: "Government of Rajasthan"
  },
  hindi: {
    title: "बाल अधिकारिता विभाग",
    subtitle: "राजस्थान सरकार"
  }
};



  
  return (
    <>

      <header className=" bg-white shadow-sm position-relative">
        <Container className="d-flex justify-content-between align-items-center">

          {/* Left Section: Logo & Title */}
          <div className="d-flex align-items-center">
           <div className="me-2">
  <Image
    src={logo}
    alt="Government of Rajasthan Logo"
    className="header-logo" style={{height: "85px", width :"auto"}}
   
  />
</div>
           <div className="me-2">
  <Image
    src={balAdhikaritaVibhag}
    alt="Bal Adhikarita Vibhag"
    className="header-logo" style={{height: "85px", width :"auto"}}
   
  />
</div>
            <div className="lh-1">
              <h6 className="mb-0 fw-bold text-dark  text-uppercase header-title-text" >
              {/* बाल अधिकारिता विभाग            */}
                 {translations[language].title}
              </h6>
              <small className="text-muted header-subtitle-text">
              {/* राजस्थान सरकार */}
                   {translations[language].subtitle}
              </small>
            </div>
          </div>

          {/* Center Section: Main Logo */}
          <div className="position-absolute start-50 translate-middle-x">
            <Link to="/" className="d-flex flex-column align-items-center text-decoration-none">
              <Image
                src={language === 'hindi'? hindilogo : englishlogo}
                alt="Main Logo"
                style={{
                  height: '85px',
                  width: 'auto',
                  maxWidth: '200px'
                }}
              />
              
            </Link>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center gap-2 ">

           
      


            {/* Officials Section */}
            <div className="d-flex align-items-center gap-2 header-officials">

              {/* Chief Minister */}
              <div className="official-card text-center">
                <div className="official-image-wrapper">
                  <Image
                    src={cm}
                    alt="Deputy Chief Minister"
                    className="official-image"
                    fluid
                  />
                </div>
                <div className="official-info">
                  <p className="mb-0 fw-bold official-name">
                  श्री भजनलाल शर्मा 
                  </p>
                  <p className="mb-0 small text-muted official-designation">
                  माननीय मुख्यमंत्री 
                  </p>
                </div>
              </div>

              {/* Deputy Chief Minister */}
               <div className="official-card text-center">
                <div className="official-image-wrapper">
                  <Image
                    src={dcm}
                    alt="Deputy Chief Minister"
                    className="official-image"
                    fluid
                  />
                </div>
                <div className="official-info">
                  <p className="mb-0 fw-bold official-name">
                  श्रीमती  दिया कुमारी 
                  </p>
                  <p className="mb-0 small text-muted official-designation">
                  उप मुख्यमंत्री 
                  </p>
                </div>
              </div>

              {/* State Minister */}
              <div className="official-card text-center">
                <div className="official-image-wrapper">
                  <Image
                    src={mla}
                    alt="State Minister"
                    className="official-image"
                    fluid
                  />
                </div>
                <div className="official-info">
                  <p className="mb-0 fw-bold official-name">
                  डॉ. मंजू बाघमार
                  </p>
                  <p className="mb-0 small text-muted official-designation">
                  राज्य मंत्री
                  </p>
                </div>
              </div> 





            </div>
          </div>
        </Container>
      </header>


    </>
  )
}

export default Bvmr
