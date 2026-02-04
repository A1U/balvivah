import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function JjAct() {
  const openPDF = () => {
    // PDF from public folder
    window.open('/src/Acts/JJ Act, 20215.pdf', '_blank');
   
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openPDF}>
        Open PDF
      </button>
    </div>
  );
}

export default JjAct;