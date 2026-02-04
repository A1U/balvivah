import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Pcma() {
  const openPDF = () => {
    // PDF from public folder
    window.open('/src/Acts/1. PCMA,_2006.pdf', '_blank');
   
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openPDF}>
        Open PDF
      </button>
    </div>
  );
}

export default Pcma;