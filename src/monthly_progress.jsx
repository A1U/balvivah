// import { useEffect, useRef } from "react";
// import Chart from "chart.js/auto";

// const MonthlyProgress = () => {
//   const canvasRef = useRef(null);
//   const chartRef = useRef(null);

//   useEffect(() => {
//     // Destroy existing chart if it exists
//     if (chartRef.current) {
//       chartRef.current.destroy();
//     }

//     chartRef.current = new Chart(canvasRef.current, {
//       type: "bar",
//       data: {
//         labels: ["Jan", "Feb", "Mar"],
//         datasets: [
//           {
//             label: "Progress",
//             data: [10, 20, 30],
//             backgroundColor: "#4CAF50",
//           },
//         ],
//       },
//     });

//     // Cleanup on unmount
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }
//     };
//   }, []); // add deps if data changes

//   return <canvas ref={canvasRef} id="monthlyProgressChart" />;
// };

// export default MonthlyProgress;



import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import chart from '../src/assets/images/chart.png'

const MonthlyProgress = () => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Progress",
            data: [10, 20, 30],
            backgroundColor: "#4CAF50",
          },
        ],
      },
      options: {
        responsive: false, // IMPORTANT
        animation: false,
      },
    });

    const image = canvasRef.current.toDataURL("image/png");
    setImgSrc(image);

    return () => chartRef.current?.destroy();
  }, []);

  return (
    <>
      {/* Hidden canvas with fixed size */}
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        style={{ display: "none" }}
      />

      {/* Image with controlled size */}
      {imgSrc && (
        <img
          src={chart}
          alt="Chart as image"
          width={300}
          height="auto"
          style={{
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
      )}
    </>
  );
};

export default MonthlyProgress;
