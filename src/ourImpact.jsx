import { Row, Col } from "react-bootstrap";

const impactData = [
  {
    icon: "fa-child",
    bg: "primary",
    value: "2,500+",
    label: "Children Protected",
    textColor: "primary",
  },
  {
    icon: "fa-graduation-cap",
    bg: "success",
    value: "1,800+",
    label: "Girls in School",
    textColor: "success",
  },
  {
    icon: "fa-users",
    bg: "warning",
    value: "500+",
    label: "Communities Engaged",
    textColor: "warning",
  },
  {
    icon: "fa-trophy",
    bg: "danger",
    value: "150+",
    label: "Success Stories",
    textColor: "danger",
  },
];

export default function Impact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold mb-3">Our Impact</h2>
          <p className="lead text-muted">
            Numbers that tell the story of change
          </p>
        </div>

        <Row className="g-4">
          {impactData.map((item, index) => (
            <Col md={3} key={index}>
              <div className="text-center">
                <div
                  className={`d-inline-flex align-items-center justify-content-center bg-${item.bg} text-white rounded-circle mb-3`}
                  style={{ width: 80, height: 80 }}
                >
                  <i className={`fa-solid ${item.icon} fa-2x`}></i>
                </div>

                <h3 className={`fw-bold text-${item.textColor}`}>
                  {item.value}
                </h3>
                <p className="text-muted">{item.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
