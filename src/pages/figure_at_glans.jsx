import React from 'react'

import headerBg from "../assets/images/headerbg.png";
import PledgeSection from '../Form/pledge';
import DistrictPerformance from '../performance';
  import { Container, Row, Col,Card  } from "react-bootstrap";
import StatsCards from '../stateCard';
import KeyMetrics from '../keyMetrics';



const   Figure_at_glans = () => {
  return (
  <>
  


    <section className="pt-3 bg-gradient-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h1 className="display-5 fw-bold mb-3">
             Figures at Glance
            </h1>
            <p className="lead mb-0">
             Comprehensive statistics and data showing the impact of our mission
              to eliminate child marriage in Rajasthan
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

<section className=''>


    <section className="my-2 my-md-4 my-lg-5">

<StatsCards/>

    </section>


   

    <section>

      <DistrictPerformance/>
    </section>

<section>
  <KeyMetrics/>
</section>
 
  </section>
  </>
  )
}

export default Figure_at_glans
