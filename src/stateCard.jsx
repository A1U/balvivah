



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaLaptop, FaHandshake, FaChartSimple } from 'react-icons/fa6';
import bg from '../src/assets/images/bg.avif'


const StatCards = () => {
  const stats = [
    {
      icon: <FaUsers />,
      label: 'Total Pledges Taken',
      value: '1,25,430',
      bgStyle: {
        background: `#ffffff`,
      },
      textClass: 'text-danger',
      valueClass: 'text-danger'
    },
    {
      icon: <FaLaptop />,
      label: 'People Engaged in Campaigns',
      value: '3,78,500',
      bgStyle: {
        background: `#ffffff`,

      },
      textClass: 'text-dark',
      valueClass: 'text-dark'
    },
    {
      icon: <FaHandshake />,
      label: 'Child Marriage-Free GPs',
      value: '850+',
      bgStyle: {
        background: `#ffffff`,

      },
      textClass: 'text-success',
      valueClass: 'text-success'
    },
    {
      icon: <FaChartSimple />,
      label: 'Visitor Count',
      value: '5,76,890',
      bgStyle: {
        background: `#ffffff`,

      },
      textClass: 'text-primary',
      valueClass: 'text-primary'
    }
  ];

  return (
    <section className='my-1'>
      <Container>
        <Row>
          {stats.map((stat, index) => (
            <Col md={3} key={index}>
              <Card 
                className="border-0 shadow-sm text-center py-3"
                style={stat.bgStyle}
              >
                <Card.Body className="p-0">
                  <div className={`${stat.textClass} fw-bold`}>
                    <span className="me-2" style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                    {stat.label}
                  </div>
                  <h3 className={`${stat.valueClass} fw-bold mt-2`}>{stat.value}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatCards;