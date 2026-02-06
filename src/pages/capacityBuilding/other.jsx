import React, { useState } from 'react';
import { Table, Container, Form, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DCPUTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const dcpuData = [
    { srNo: 1, district: "अजमेर", officer: "श्री संजय सावलानी", mobile: "9414355500", email: "dcpuajmer@yahoo.com" },
    { srNo: 2, district: "अलवर", officer: "श्री रविकांत", mobile: "9414394070", email: "adicps.alwar@gmail.com" },
    { srNo: 3, district: "बांसवाड़ा", officer: "श्री नानूलाल राउत", mobile: "9950576591", email: "icpsbanswara@gmail.com" },
    { srNo: 4, district: "बारां", officer: "श्री राकेश कुमार वर्मा", mobile: "9680585668", email: "dcpubaran@gmail.com" },
    { srNo: 5, district: "बाड़मेर", officer: "श्री सुरेन्द्र प्रताप सिंह", mobile: "9462305078", email: "adicps.barmer@rajasthan.gov.in" },
    { srNo: 6, district: "भरतपुर", officer: "श्री अमित अवस्थी", mobile: "7042350937", email: "adicps.btp@rajasthan.gov.in" },
    { srNo: 7, district: "भीलवाड़ा", officer: "श्री धर्मराज प्रतिहार", mobile: "9680860764", email: "icpsbhilwara@gmail.com" },
    { srNo: 8, district: "बीकानेर", officer: "श्री अरुण सिंह शेखावत", mobile: "9950090800", email: "adicps.bikaner-rj@nic.in" },
    { srNo: 9, district: "बूंदी", officer: "श्री हुकुम चंद जजोरिया", mobile: "9413761055", email: "dcpubundi@gmail.com" },
    { srNo: 10, district: "चित्तौड़गढ़", officer: "श्री ओमप्रकाश तोषनीवाल", mobile: "9414021710", email: "icpschittorgarh@gmail.com" },
    { srNo: 11, district: "चूरू", officer: "श्री सत्येन्द्र पाल वीर", mobile: "9312884432", email: "dcpu.chu@rajasthan.gov.in" },
    { srNo: 12, district: "दौसा", officer: "श्री विषदेव पाण्डेय", mobile: "8005926900", email: "adicpsdausa@gmail.com" },
    { srNo: 13, district: "धौलपुर", officer: "श्री मणिराम शर्मा", mobile: "9784770685", email: "dlo.dha@rajasthan.gov.in" },
    { srNo: 14, district: "डूंगरपुर", officer: "श्री कल्पित शर्मा", mobile: "9414567767", email: "dcpudpr@rajasthan.gov.in" },
    { srNo: 15, district: "श्रीगंगानगर", officer: "सुश्री रेनू खेरवा", mobile: "6376888578", email: "adicps.sriganga-rj@gov.in" },
    { srNo: 16, district: "हनुमानगढ़", officer: "श्री पेमा राम", mobile: "7357014446", email: "dcpuhanumangarh@gmail.com" },
    { srNo: 17, district: "जयपुर (शहर)", officer: "श्रीमती अनीता मुवाल", mobile: "8107475260", email: "dcpujaipur@gmail.com" },
    { srNo: 18, district: "जैसलमेर", officer: "श्री हिम्मत सिंह कविया", mobile: "9414391308", email: "dcr.jaisalmer@rajasthan.gov.in" },
    { srNo: 19, district: "जालोर", officer: "श्री राजीव कुमार सुथार", mobile: "9799766987", email: "dcpujalore@gmail.com" },
    { srNo: 20, district: "झालावाड़", officer: "श्री सुरेन्द्र कुमार पुनिया", mobile: "7014429744", email: "dcpujhalawar@yahoo.com" },
    { srNo: 21, district: "झुंझुनूं", officer: "श्री अरविंद ओला", mobile: "9413538600", email: "icpssjejjn@yahoo.in" },
    { srNo: 22, district: "जोधपुर", officer: "डॉ. बजरंग सरस्वत", mobile: "9414080823", email: "adicps.jodhpur@rajasthan.gov.in" },
    { srNo: 23, district: "करौली", officer: "श्री पवन कुमार गुप्ता", mobile: "9694626101", email: "adicps-karauli@gov.in" },
    { srNo: 24, district: "कोटा", officer: "श्री रामराज मीणा", mobile: "9829928254", email: "dcpukota@rajasthan.gov.in" },
    { srNo: 25, district: "नागौर", officer: "श्री रामदयाल", mobile: "9664485407", email: "dcpunagaur01@rajasthan.gov.in" },
    { srNo: 26, district: "पाली", officer: "श्रीमती टीना अरोड़ा", mobile: "9414294168", email: "paliadicps@gmail.com" },
    { srNo: 27, district: "प्रतापगढ़", officer: "श्री उम्मेद अली", mobile: "7568891024", email: "icpspratapgarh@gmail.com" },
    { srNo: 28, district: "राजसमंद", officer: "श्री दिपेन्द्र सिंह शेखावत", mobile: "9929989888", email: "dcpurajsamand@gmail.com" },
    { srNo: 29, district: "सवाई माधोपुर", officer: "श्री हरिराम मीणा", mobile: "9929179661", email: "icpssawaimadhopur@gmail.com" },
    { srNo: 30, district: "सीकर", officer: "श्रीमती गार्गी शर्मा", mobile: "9413200039", email: "dcrsikar@gmail.com" },
    { srNo: 31, district: "सिरोही", officer: "श्री राजेन्द्र कुमार पुरोहित", mobile: "9928701604", email: "dcpu.sirohi@rajasthan.gov.in" },
    { srNo: 32, district: "टोंक", officer: "श्री नवल खान", mobile: "9413272092", email: "dcpu.tonk@rajasthan.gov.in" },
    { srNo: 33, district: "उदयपुर", officer: "श्री के. के. चन्द्रवंशी", mobile: "9413945863", email: "udaipuricps@gmail.com" },
    { srNo: 34, district: "डीडवाना-कुचामन", officer: "श्री जयपाल सिंह (DPSW, अतिरिक्त प्रभार)", mobile: "9660337251", email: "dlo.sje.did-kuc@rajasthan.gov.in" },
    { srNo: 35, district: "कोटपूतली-बहरोड़", officer: "श्री विपिन (DPSW, अतिरिक्त प्रभार)", mobile: "7891434971", email: "dlo.sje.kotp@rajasthan.gov.in" },
    { srNo: 36, district: "बालोतरा", officer: "श्री महेन्द्र सिंह (DPSW, अतिरिक्त प्रभार)", mobile: "9636235866", email: "dlo.sje.balo@rajasthan.gov.in" },
    { srNo: 37, district: "ब्यावर", officer: "श्री अभिषेक गुजराती (अतिरिक्त प्रभार)", mobile: "9829237468", email: "dlo.sje.beaw@rajasthan.gov.in" },
    { srNo: 38, district: "डीग", officer: "श्री कुलदीप सिंह (DPSW, अतिरिक्त प्रभार)", mobile: "8005560688", email: "dlo.sje.deeg@rajasthan.gov.in" },
    { srNo: 39, district: "खैरथल-तिजारा", officer: "श्री रमेश दहिमवाल (DPSW, अतिरिक्त प्रभार)", mobile: "8764015426", email: "dlo.sje.khatij@rajasthan.gov.in" },
    { srNo: 40, district: "फलौदी", officer: "श्री करणी सिंह नाथावत", mobile: "8619010593", email: "rjpa201729030220@rajasthan.in" },
    { srNo: 41, district: "सलूम्बर", officer: "श्रीमती ममता जाखड़, SSO (अतिरिक्त प्रभार)", mobile: "9950513078", email: "dlo.sje.salu@rajasthan.gov.in" }
  ];

  const filteredData = dcpuData.filter(item =>
    item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.officer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mobile.includes(searchTerm) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container fluid className="py-4">
      <style>{`
        .table-container {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        
        .header-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .header-section h2 {
          margin: 0;
          font-size: 1.75rem;
          font-weight: 600;
        }
        
        .header-section p {
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
        }
        
        .search-section {
          padding: 1.5rem;
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
        }
        
        .table-responsive {
          margin: 0;
        }
        
        .custom-table {
          margin: 0;
          font-size: 0.95rem;
        }
        
        .custom-table thead {
          background: #495057;
          color: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        
        .custom-table thead th {
          font-weight: 600;
          border: none;
          padding: 1rem 0.75rem;
          white-space: nowrap;
        }
        
        .custom-table tbody tr {
          transition: background-color 0.2s;
        }
        
        .custom-table tbody tr:hover {
          background-color: #f1f3f5;
        }
        
        .custom-table tbody td {
          padding: 0.875rem 0.75rem;
          vertical-align: middle;
          border-color: #e9ecef;
        }
        
        .email-link {
          color: #667eea;
          text-decoration: none;
          word-break: break-all;
        }
        
        .email-link:hover {
          text-decoration: underline;
        }
        
        .mobile-number {
          font-family: 'Courier New', monospace;
          font-weight: 500;
        }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #6c757d;
        }
        
        @media (max-width: 768px) {
          .header-section h2 {
            font-size: 1.25rem;
          }
          
          .custom-table {
            font-size: 0.85rem;
          }
          
          .custom-table thead th,
          .custom-table tbody td {
            padding: 0.5rem 0.4rem;
          }
        }
        
        @media (max-width: 576px) {
          .header-section {
            padding: 1.5rem 1rem;
          }
          
          .search-section {
            padding: 1rem;
          }
          
          .custom-table {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="table-container">
        <div className="header-section">
          <h2>राजस्थान DCPU कार्यालय संपर्क सूची</h2>
          <p>Rajasthan District Child Protection Unit Contact Directory</p>
        </div>

        <div className="search-section">
          <InputGroup>
            <InputGroup.Text>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="जिला, अधिकारी, मोबाइल या ईमेल से खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </div>

        <div className="table-responsive">
          {filteredData.length > 0 ? (
            <Table striped hover className="custom-table mb-0">
              <thead>
                <tr>
                  <th>क्रम सं.</th>
                  <th>जिला / DCPU कार्यालय</th>
                  <th>अधिकारी का नाम</th>
                  <th>मोबाइल नंबर</th>
                  <th>ई-मेल आईडी</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.srNo}>
                    <td>{item.srNo}</td>
                    <td><strong>{item.district}</strong></td>
                    <td>{item.officer}</td>
                    <td className="mobile-number">{item.mobile}</td>
                    <td>
                      <a href={`mailto:${item.email}`} className="email-link">
                        {item.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="no-results">
              <svg width="64" height="64" fill="currentColor" viewBox="0 0 16 16" style={{opacity: 0.3}}>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg>
              <h4>कोई परिणाम नहीं मिला</h4>
              <p>कृपया अलग खोज शब्द का प्रयास करें</p>
            </div>
          )}
        </div>
      </div>

      <div className="text-center mt-3 text-muted">
        <small>कुल जिले: {filteredData.length} / {dcpuData.length}</small>
      </div>
    </Container>
  );
};

export default DCPUTable;