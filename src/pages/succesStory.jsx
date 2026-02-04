import React from 'react'
  import { Container, Row, Col,Card  } from "react-bootstrap";
import headerBg from "../assets/images/headerbg.png";
import Impact from '../ourImpact';
import SuccessStorySection from '../share_your_story';



const SuccesStory = () => {
  return (
<>


    <section className="pt-3 bg-gradient-primary text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <h1 className="display-5 fw-bold mb-3">
        Success Stories
            </h1>
            <p className="lead mb-0">
            Inspiring stories of change and empowerment from across Rajasthan as we work towards a child marriage-free future
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


       <section className="py-5">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat other stories same way */}
            <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
             
              </div>
                <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat other stories same way */}
            <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
             
              </div>




  <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat other stories same way */}
            <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
             
              </div>

  <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat other stories same way */}
            <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/seed/story1/300/400.jpg"
                    className="img-fluid h-100"
                    alt="Success Story"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="badge bg-success me-2">Education</span>
                      <span className="badge bg-primary">Jaipur</span>
                    </div>
                    <h5 className="card-title fw-bold text-primary-custom mb-3">
                      Priya&apos;s Journey to Education
                    </h5>
                    <p className="card-text text-muted">
                      At 14, Priya was about to be married off. Thanks to timely
                      intervention by our team and community support, she
                      continued her education and is now pursuing engineering.
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">
                        <i className="fa-solid fa-calendar me-1"></i> March 2024
                      </small>
                      <a href="#" className="btn btn-sm btn-outline-primary">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
             
              </div>


                {/* Repeat other stories same way */}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">
            <i className="fa-solid fa-plus-circle me-2"></i>
            Load More Stories
          </button>
        </div>
      </div>
    </section>


    <section>
 
 <Impact/>

    </section>
    <section>

<SuccessStorySection/>

    </section>




</>



  )
}

export default SuccesStory
