import { Row, Col, Card, Button, Container } from 'react-bootstrap';
// import 
import  headerBg from '../../../assets/images/headerbg.png'
import MedisNav from '../medisNav';


const videos = [
    {
        id: 1,
        img: 'https://picsum.photos/seed/video1/400/300.jpg',
        title: 'Mission Documentary',
        desc: 'Complete overview of BVMR mission and its impact.',
        duration: '15:30',
    },
    {
        id: 2,
        img: 'https://picsum.photos/seed/video2/400/300.jpg',
        title: 'Success Stories',
        desc: 'Inspiring stories of change from across Rajasthan.',
        duration: '8:45',
    },
    {
        id: 3,
        img: 'https://picsum.photos/seed/video3/400/300.jpg',
        title: 'Awareness Messages',
        desc: 'Short awareness messages for social media.',
        duration: '2:30',
    },
];

function VideosTab() {
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

            
    <section className="py-4">
      <Container>
       
   <MedisNav/>
   <Row className="g-4 m-5">
                {videos.map((video) => (
                    <Col md={6} lg={4} key={video.id}>
                        <Card className="border-0 shadow-sm h-100">
                            <div className="position-relative">
                                <Card.Img
                                    variant="top"
                                    src={video.img}
                                    alt={video.title}
                                />

                                {/* Play button overlay */}
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-75 text-white rounded-circle"
                                        style={{ width: 60, height: 60 }}
                                    >
                                        <i className="fa-solid fa-play fa-lg"></i>
                                    </div>
                                </div>
                            </div>

                            <Card.Body>
                                <Card.Title as="h6" className="fw-bold">
                                    {video.title}
                                </Card.Title>

                                <Card.Text className="text-muted small">
                                    {video.desc}
                                </Card.Text>

                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">
                                        <i className="fa-solid fa-clock me-1"></i>
                                        {video.duration}
                                    </small>

                                    <Button size="sm" variant="danger">
                                        Watch
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
      </Container>
    </section>
           
        </>
    );
}

export default VideosTab;
