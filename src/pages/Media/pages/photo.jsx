import { Row, Col, Card, Button } from 'react-bootstrap';

const photos = [
  {
    id: 1,
    img: 'https://picsum.photos/seed/photo1/400/300.jpg',
    title: 'Awareness Campaign in Jaipur',
    desc: 'Community engagement program conducted in Jaipur district.',
    date: 'March 15, 2024',
  },
  {
    id: 2,
    img: 'https://picsum.photos/seed/photo2/400/300.jpg',
    title: 'School Awareness Program',
    desc: 'Interactive session with students at Government School.',
    date: 'March 10, 2024',
  },
  {
    id: 3,
    img: 'https://picsum.photos/seed/photo3/400/300.jpg',
    title: 'Mass Pledge Ceremony',
    desc: 'Over 500 families took pledge against child marriage.',
    date: 'March 5, 2024',
  },
  {
    id: 4,
    img: 'https://picsum.photos/seed/photo4/400/300.jpg',
    title: 'Stakeholder Workshop',
    desc: 'Training program for community leaders and officials.',
    date: 'February 28, 2024',
  },
  {
    id: 5,
    img: 'https://picsum.photos/seed/photo5/400/300.jpg',
    title: 'Awareness Rally',
    desc: 'Students participated in massive awareness rally.',
    date: 'February 20, 2024',
  },
  {
    id: 6,
    img: 'https://picsum.photos/seed/photo6/400/300.jpg',
    title: 'IEC Material Distribution',
    desc: 'Distribution of awareness materials in villages.',
    date: 'February 15, 2024',
  },
];

function PhotosTab() {
  return (
    <Row className="g-4 m-5">
      {photos.map((photo) => (
        <Col md={3} lg={4} key={photo.id}>
          <Card className="border-0 shadow-sm h-70">
            <Card.Img variant="top" src={photo.img} alt={photo.title} />
            <Card.Body>
              <Card.Title className="fw-bold" as="h6">
                {photo.title}
              </Card.Title>
              <Card.Text className="text-muted small">
                {photo.desc}
              </Card.Text>

              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">
                  <i className="fa-solid fa-calendar me-1"></i>
                  {photo.date}
                </small>
                <Button size="sm" variant="outline-primary">
                  View
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PhotosTab;
