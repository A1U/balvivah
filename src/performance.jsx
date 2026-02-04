import React from "react";
import { Card, Table, ProgressBar, Row, Col } from "react-bootstrap";
import MonthlyProgressChart from "./monthly_progress";
import AchievementChart from "./achivement";
import AchievementBreakdown from "./achivement";

const DistrictPerformance = () => {
  return (
    <section className="py-2 ">
      <div className="container">
        <Row className="g-4">
          {/* District Performance Table */}
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-white border-0">
                <h3 className="text-primary-custom fw-bold mb-0">
                  District-wise Performance
                </h3>
              </Card.Header>
              <Card.Body className="p-4">
                <div className="table-responsive">
                  <Table hover className="mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>District</th>
                        <th>Pledges Taken</th>
                        <th>Child Marriage-Free GPs</th>
                        <th>Campaigns Conducted</th>
                        <th>Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Jaipur</strong></td>
                        <td>15,234</td>
                        <td>120</td>
                        <td>45</td>
                        <td><span className="badge bg-success">Excellent</span></td>
                      </tr>
                      <tr>
                        <td><strong>Jodhpur</strong></td>
                        <td>12,456</td>
                        <td>98</td>
                        <td>38</td>
                        <td><span className="badge bg-success">Excellent</span></td>
                      </tr>
                      <tr>
                        <td><strong>Udaipur</strong></td>
                        <td>10,789</td>
                        <td>85</td>
                        <td>32</td>
                        <td><span className="badge bg-primary">Good</span></td>
                      </tr>
                      <tr>
                        <td><strong>Kota</strong></td>
                        <td>9,567</td>
                        <td>76</td>
                        <td>28</td>
                        <td><span className="badge bg-primary">Good</span></td>
                      </tr>
                      <tr>
                        <td><strong>Ajmer</strong></td>
                        <td>8,234</td>
                        <td>65</td>
                        <td>25</td>
                        <td><span className="badge bg-warning">Average</span></td>
                      </tr>
                      <tr>
                        <td><strong>Bikaner</strong></td>
                        <td>7,890</td>
                        <td>58</td>
                        <td>22</td>
                        <td><span className="badge bg-warning">Average</span></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar Charts & Metrics */}
          <Col lg={4}>
            {/* Monthly Progress Chart */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0">
                <h5 className="fw-bold mb-0 text-primary-custom">Monthly Progress</h5>
              </Card.Header>
              <Card.Body className="p-4">
               
                <MonthlyProgressChart/>
              </Card.Body>
            </Card>

            {/* Achievement Breakdown Chart */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-white border-0">
                {/* <h5 className="fw-bold mb-0 text-primary-custom">Achievement Breakdown</h5> */}
              </Card.Header>
          
                      <AchievementBreakdown/>
                        </Card>

     
          </Col>

        </Row>
      </div>
    </section>
  );
};

export default DistrictPerformance;
