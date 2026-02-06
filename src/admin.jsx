import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Button, Card } from 'react-bootstrap';
// import './ChildMarriagePrevention.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    role: '',
    month: '',
    quarter: '',
    year: '',
    counselling: '',
    legal: '',
    false: '',
    total: 0
  });

  const [records, setRecords] = useState([]);

  // Dropdown options
  const roles = [
    'DD, WE',
    'AD, ICDS',
    'AD, DCR',
    'Protection Officer',
    'SDM',
    'CDPO',
    'SSO',
    'Tehsildar'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const quarters = [
    'Q1 (Apr–Jun)',
    'Q2 (Jul–Sep)',
    'Q3 (Oct–Dec)',
    'Q4 (Jan–Mar)'
  ];

  const years = ['2024', '2025', '2026', '2027'];

  // Calculate total automatically
  const calculateTotal = (counselling, legal, falseReports) => {
    const c = parseInt(counselling) || 0;
    const l = parseInt(legal) || 0;
    const f = parseInt(falseReports) || 0;
    return c + l + f;
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    const updatedData = { ...formData, [field]: value };

    // Auto-calculate total when numeric fields change
    if (field === 'counselling' || field === 'legal' || field === 'false') {
      updatedData.total = calculateTotal(
        updatedData.counselling,
        updatedData.legal,
        updatedData.false
      );
    }

    setFormData(updatedData);
  };

  // Add data to grid
  const addData = () => {
    // Validation
    if (!formData.role || !formData.month || !formData.quarter || !formData.year) {
      alert('Please select all dropdowns');
      return;
    }

    // Add new record
    const newRecord = {
      id: Date.now(),
      ...formData
    };

    setRecords([...records, newRecord]);

    // Clear form
    setFormData({
      role: '',
      month: '',
      quarter: '',
      year: '',
      counselling: '',
      legal: '',
      false: '',
      total: 0
    });
  };

  // Delete record
  const deleteRecord = (id) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="child-marriage-prevention">
      <Container>
        {/* ENTRY FORM */}
        <Card className="form-card">
          <Card.Body>
            <h5 className="form-title">Quarterly Child Marriage Prevention Entry</h5>

            {/* ROLE + MONTH + QUARTER + YEAR */}
            <Row className="mb-3">
              <Col md={3} sm={6} xs={12} className="mb-3 mb-md-0">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                >
                  <option value="">--Select--</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={3} sm={6} xs={12} className="mb-3 mb-md-0">
                <Form.Label>Month</Form.Label>
                <Form.Select
                  value={formData.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                >
                  <option value="">--Select--</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={3} sm={6} xs={12} className="mb-3 mb-md-0">
                <Form.Label>Quarter</Form.Label>
                <Form.Select
                  value={formData.quarter}
                  onChange={(e) => handleInputChange('quarter', e.target.value)}
                >
                  <option value="">--Select--</option>
                  {quarters.map((quarter, index) => (
                    <option key={index} value={quarter}>{quarter}</option>
                  ))}
                </Form.Select>
              </Col>

              <Col md={3} sm={6} xs={12}>
                <Form.Label>Year</Form.Label>
                <Form.Select
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                >
                  <option value="">--Select--</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            {/* DATA ENTRY TABLE */}
            <div className="table-responsive">
              <Table bordered className="data-entry-table">
                <thead>
                  <tr>
                    <th>Prevented by counselling</th>
                    <th>Prevented by legal action</th>
                    <th>False reporting</th>
                    <th>Total reported cases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Control
                        type="number"
                        min="0"
                        value={formData.counselling}
                        onChange={(e) => handleInputChange('counselling', e.target.value)}
                        placeholder="0"
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        min="0"
                        value={formData.legal}
                        onChange={(e) => handleInputChange('legal', e.target.value)}
                        placeholder="0"
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        min="0"
                        value={formData.false}
                        onChange={(e) => handleInputChange('false', e.target.value)}
                        placeholder="0"
                      />
                    </td>
                    <td>
                      <Form.Control
                        type="number"
                        value={formData.total}
                        readOnly
                        className="total-field"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <Button variant="primary" onClick={addData} className="add-btn">
              Add
            </Button>
          </Card.Body>
        </Card>

        {/* RECORDS GRID */}
        <Card className="grid-card">
          <Card.Body>
            <h5 className="grid-title">Entered Records</h5>

            <div className="table-responsive">
              <Table bordered className="records-table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Month</th>
                    <th>Quarter</th>
                    <th>Year</th>
                    <th>Counselling</th>
                    <th>Legal</th>
                    <th>False</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {records.length > 0 ? (
                    records.map((record) => (
                      <tr key={record.id}>
                        <td>{record.role}</td>
                        <td>{record.month}</td>
                        <td>{record.quarter}</td>
                        <td>{record.year}</td>
                        <td>{record.counselling || 0}</td>
                        <td>{record.legal || 0}</td>
                        <td>{record.false || 0}</td>
                        <td><strong>{record.total}</strong></td>
                        <td>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => deleteRecord(record.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center text-muted">
                        No records added yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Admin;