import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SupremeCourt() {
  const openPDF = () => {
    // PDF from public folder
    window.open('/src/Acts/1. Supreme Court Judgement _Oct2024.pdf', '_blank');
   
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openPDF}>
        Open PDF
      </button>
    </div>
  );
}

export default SupremeCourt;