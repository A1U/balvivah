import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

import  headerBg from '../../assets/images/headerbg.png'
import { MdInsertPhoto } from "react-icons/md";
import PhotosTab from './pages/photo';

import { FaVideoSlash } from "react-icons/fa6";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import MedisNav from './medisNav';
// import { MdInsertPhoto } from 'react-icons/md';
// import { FaVideoSlash } from 'react-icons/fa';

const   MediaGallery = () => {
  return (
<>

    <section className="pt-3 bg-gradient-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h1 className="display-5 fw-bold mb-3">
        Media Gallery
            </h1>
            <p className="lead mb-0">
             Visual stories of our mission, campaigns, and the impact we're making across Rajasthan


            </p>
          </Col>

          <Col lg={4} className="text-center">
            <img
              src={headerBg}
              alt="About Mission"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </section>


    <section>



    <section className="py-4 ">
      <Container>
       
   <MedisNav/>
   <PhotosTab/>
      </Container>
    </section>
    </section>




</>
  )
}

export default MediaGallery
