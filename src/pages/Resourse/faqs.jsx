import React from 'react';
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";

function Faq() {
  const faqs = [
    {
      id: 1,
      question: "Which law deals with the issue of child marriage?",
      answer: "The law that deals with child marriage is called The Prohibition of Child Marriage Act (PCMA), 2006."
    },
    {
      id: 2,
      question: "To whom does PCMA apply?",
      answer: "The Prohibition of Child Marriage Act, 2006 applies to all citizens of India and extends to the whole of India."
    },
    {
      id: 3,
      question: "What is child marriage?",
      answer: "When a girl under the age of 18 years or a boy who is under the age of 21 years is married, it is called child marriage. Remember: If an adult man (over the age of 21 years) marries a girl who is under 18 years, such a marriage is also called a child marriage."
    },
    {
      id: 4,
      question: "What are the consequences of child marriage?",
      answer: "The consequences of child marriage especially of girls include early pregnancy, maternal and neonatal mortality, child health problems, educational setbacks, lower employment/livelihood prospects, and exposure to violence and abuse."
    },
    {
      id: 5,
      question: "How much is the prevalence of child marriage in the country?",
      answer: "23.3% of girls between the age group of 20-24 years got married before they turned 18 as per National Family Health Survey - 5 (2019-21), Government of India."
    },
    {
      id: 6,
      question: "What is the nature of the child marriage?",
      answer: "Every child marriage, whether solemnised before or after the commencement of the Act, is voidable at the option of the contracting party who was a child at the time of the marriage: Provided that a petition for annulling a child marriage by a decree of nullity may be filed in the district court only by a contracting party to the marriage who was a child at the time of the marriage."
    },
    {
      id: 7,
      question: "Is having sexual intercourse with a child within marriage, a crime?",
      answer: "Yes, under Section 63 of the Bharatiya Nyaya Sanhita (BNS), 2023 sexual intercourse or sexual acts by a man with his own wife, who is under 18 years of age, is considered as rape and is punishable under the law."
    },
    {
      id: 8,
      question: "Who can report or complain about a child marriage?",
      answer: "Anyone who has reason to believe that a child marriage has taken place or is going to take place, can complain."
    },
    {
      id: 9,
      question: "Where to complain about a child marriage?",
      answer: "Child marriage can be reported to: Police, Child Marriage Prohibition Officer (CMPO), Child Welfare Committee, District Magistrate, Court, Childline (1098)."
    },
    {
      id: 10,
      question: "What is the meaning of 'voidable' under the PCMA, 2006?",
      answer: "Voidable means that a child who is married can approach the court for the termination of the marriage. The child can approach the court with the help of police, Child Welfare Committee, CMPO, Childline, NGO and person whom the child trusts."
    },
    {
      id: 11,
      question: "Where can a child go for the cancellation (annulment) of the marriage?",
      answer: "A child can approach district court for the cancellation of the marriage."
    },
    {
      id: 12,
      question: "If a girl turns 18, can she still get her marriage cancelled?",
      answer: "Yes, if a girl turns 18, she can still get her marriage cancelled within 2 years of turning 18. This means that she can get her marriage cancelled before she turns 20 years of age."
    },
    {
      id: 13,
      question: "Can a girl below 18 years of age complain of rape within marriage? Under which law it is considered rape?",
      answer: "Yes, if the girl is married before the age of 18 years, she can complain of rape to police. Under the Protection of Children from Sexual Offences Act, 2012 sexual activity with a child who is below 18 years of age is considered as rape."
    },
    {
      id: 14,
      question: "Can we stop a child marriage from taking place?",
      answer: "Yes, we can stop a child marriage from taking place."
    },
    {
      id: 15,
      question: "How can a child marriage be stopped?",
      answer: "A child marriage can be stopped by obtaining an 'injunction order' (stop the child marriage order) from the court."
    },
    {
      id: 16,
      question: "From where an 'injunction order' (stop the child marriage order) can be obtained?",
      answer: "An injunction order can be obtained from the court of Judicial Magistrate of First Class or Metropolitan Magistrate. It also states that an interim injunction order can be issued to stop a child marriage that has been arranged or is about to be conducted."
    },
    {
      id: 17,
      question: "To which court one has to apply to obtain an injunction order (Stop Child Marriage Order)?",
      answer: "One has to approach a Judicial Magistrate of First Class or Metropolitan Magistrate to obtain an injunction order."
    },
    {
      id: 18,
      question: "How can a child approach court for the cancellation (annulment) of his/her marriage?",
      answer: "A child can approach the court through a Child Marriage Prohibition Officer (CMPO), Child Welfare Committee, or their guardian."
    },
    {
      id: 19,
      question: "Who can be punished for conducting child marriage?",
      answer: (
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>Any man above twenty-one years of age who marries a girl below eighteen years of age.</li>
          <li>Any person who performs or conducts such child marriage, such as a priest.</li>
          <li>Persons/organizations who promote or permit child marriage, such as parents/guardians/relatives/neighbours/middleman etc.</li>
          <li>Any person who solemnizes a child marriage even after an injunction order has been passed by the court.</li>
        </ul>
      )
    },
    {
      id: 20,
      question: "What is the punishment for conduct of child marriage?",
      answer: "Whoever performs, conducts, directs, or abets any child marriage shall be punishable with rigorous imprisonment which may extend to two years and shall be liable to a fine which may extend to one lakh rupees, unless they prove that they had reasons to believe that the marriage was not a child marriage."
    },
    {
      id: 21,
      question: "What kind of offence is child marriage?",
      answer: "Child marriage is a cognizable and non-bailable offense."
    },
    {
      id: 22,
      question: "Against whom the Prohibition of Child Marriage Act can be applied?",
      answer: (
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>Bridegroom</li>
          <li>Priest or any person performing marriage</li>
          <li>Parents/Guardians for permitting child marriage</li>
          <li>Relatives, Guest, neighbours for aiding or abetting the offence</li>
        </ul>
      )
    },
    {
      id: 23,
      question: "Who is a Child Marriage Prohibition Officer?",
      answer: "Child Marriage Prohibition Officer (CMPO) is an officer appointed by the State Government to prevent and stop child marriages in any given area."
    },
    {
      id: 24,
      question: "What are the functions and duties of CMPO?",
      answer: (
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          {/* <li>prevent child marriages;</li> */}
          <li>Child marriage is a social evil and a violation of law.</li>
          <li>
            It obstructs the education, safety, health, and development of girls and prevents them from fulfilling their dreams.
          </li>
          {/* <li>collect evidence against persons solemnizing the child marriage;</li> */}
          <li>advise either individual cases or counsel the residents of the locality generally not to indulge in promoting, helping, aiding or allowing child marriages;</li>
          <li>create awareness about this social evil and its ill effects</li>
          <li>sensitize the community on the issue of child marriages;</li>
        </ul>
      )
    },
    {
      id: 25,
      question: "What are the entitlements of child bride?",
      answer: "Every child bride has the right to maintenance and residence until her remarriage."
    },
    {
      id: 26,
      question: "What are the entitlements of children born within child marriage?",
      answer: "Every child borne out of child marriage is a legitimate child and has the right to maintenance, succession etc."
    },
    {
      id: 27,
      question: "What can we do to prevent child marriages from taking place?",
      answer: (
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>Spread awareness among the parents and the community about the ill effects of child marriage</li>
          <li>Report any incidence of child marriage</li>
          <li>Make children aware of their rights</li>
          <li>Sensitize the leaders of the community to raise voice against child marriage</li>
          <li>Strengthen village level child protection and welfare committee</li>
        </ul>
      )
    }
  ];

  return (
    <>
      <section className="pt-5 pb-4 bg-gradient-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={12} className="text-center">
              <h1 className="display-5 fw-bold mb-3">
                <FaQuestionCircle className="me-2" />
                Frequently Asked Questions on Child Marriage
              </h1>
              <p className="lead mb-0">
                Find answers to common questions about child marriage laws and prevention
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <Card className="border-0 shadow-sm">
                <Card.Header 
                  className="border-0 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #b92022 0%, #d32f2f 100%)',
                    color: 'white'
                  }}
                >
                  <h3 className="mb-0 fw-bold text-center">
                    <FaQuestionCircle className="me-2" />
                    FAQs on Child Marriage
                  </h3>
                </Card.Header>
                <Card.Body className="p-4">
                  <Accordion defaultActiveKey="0" className="faq-accordion">
                    {faqs.map((faq, index) => (
                      <Accordion.Item 
                        eventKey={index.toString()} 
                        key={faq.id}
                        style={{ 
                          marginBottom: '0.75rem',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px'
                        }}
                      >
                        <Accordion.Header 
                          style={{ 
                            backgroundColor: '#FFEBEE',
                            borderRadius: '8px 8px 0 0'
                          }}
                        >
                          <div className="d-flex align-items-center w-100">
                            <span 
                              className="fw-bold me-3"
                              style={{ 
                                color: '#b92022',
                                minWidth: '30px'
                              }}
                            >
                              Q{faq.id}.
                            </span>
                            <span style={{ color: '#333' }}>{faq.question}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body 
                          style={{ 
                            backgroundColor: '#fff',
                            padding: '1.25rem 1.5rem',
                            color: '#555'
                          }}
                        >
                          <div className="d-flex align-items-start">
                            <span 
                              className="fw-bold me-3"
                              style={{ 
                                color: '#b92022',
                                minWidth: '30px'
                              }}
                            >
                              A.
                            </span>
                            <div style={{ flex: 1 }}>
                              {typeof faq.answer === 'string' ? (
                                <p className="mb-0">{faq.answer}</p>
                              ) : (
                                faq.answer
                              )}
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Card.Body>
              </Card>

              {/* Note Section */}
              <Card className="border-0 shadow-sm mt-4" style={{ backgroundColor: '#FFEBEE' }}>
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start">
                    <FaQuestionCircle className="me-3 mt-1" size={24} style={{ color: '#b92022' }} />
                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: '#b92022' }}>
                        Note
                      </h5>
                      <p className="text-muted mb-0">
                        For details please refer to Prohibition of Child Marriage Act, 2006
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Faq;
