import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Clpra() {
  const openPDF = () => {
    // PDF from public folder
    window.open('/src/Acts/CLPRA-2016-Gazette Copy.pdf', '_blank');
   
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openPDF}>
        Open PDF
      </button>
    </div>
  );
}

export default Clpra;