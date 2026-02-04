// import React from 'react';
// import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

// const KeyMetrics = () => {
//   const metrics = [
//     {
//       label: 'Awareness Coverage',
//       percentage: 78,
//       variant: 'success'
//     },
//     {
//       label: 'Legal Enforcement',
//       percentage: 65,
//       variant: 'primary'
//     },
//     {
//       label: 'Community Participation',
//       percentage: 82,
//       variant: 'warning'
//     },
//     {
//       label: 'Education Impact',
//       percentage: 71,
//       variant: 'danger'
//     }
//   ];

//   return (



 


//     // <Card className="border-0 shadow-sm">
//     //   <Card.Header className=" border-0">
//     //     <h5 className="fw-bold mb-0 text-primary-custom">Key Metrics</h5>
//     //   </Card.Header>
//     //   <Card.Body className="p-4">
//     //     {metrics.map((metric, index) => (
//     //       <div key={index} className={index < metrics.length - 1 ? 'mb-3' : ''}>
//     //         <div className="d-flex justify-content-between align-items-center mb-1">
//     //           <span className="small fw-bold">{metric.label}</span>
//     //           <span className={`small text-${metric.variant}`}>{metric.percentage}%</span>
//     //         </div>
//     //         <ProgressBar 
//     //           now={metric.percentage} 
//     //           variant={metric.variant}
//     //           style={{ height: '8px' }}
//     //         />
//     //       </div>
//     //     ))}
//     //   </Card.Body>
//     // </Card>

//  <div className="d-flex justify-content-end "  style={{ paddingRight: "100px" }}>
//   <div style={{ width: '400px' }}>
//     <Card className="border-0 shadow-sm">
//       <Card.Header className="border-0">
//         <h5 className="fw-bold mb-0 text-primary-custom">Key Metrics</h5>
//       </Card.Header>
//       <Card.Body className="p-4">
//         {metrics.map((metric, index) => (
//           <div key={index} className={index < metrics.length - 1 ? 'mb-3' : ''}>
//             <div className="d-flex justify-content-between align-items-center mb-1">
//               <span className="small fw-bold">{metric.label}</span>
//               <span className={`small text-${metric.variant}`}>{metric.percentage}%</span>
//             </div>
//             <ProgressBar 
//               now={metric.percentage} 
//               variant={metric.variant}
//               style={{ height: '8px' }}
//             />
//           </div>
//         ))}
//       </Card.Body>
//     </Card>
//   </div>
// </div>
   
//   );
// };

// export default KeyMetrics;






import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// ── Line chart data (matches the uploaded image shape) ──
const chartData = [
  { name: "Point 1", India: 42, Rajasthan: 58 },
  { name: "Point 2", India: 38, Rajasthan: 55 },
  { name: "Point 3", India: 35, Rajasthan: 50 },
  { name: "Point 4", India: 18, Rajasthan: 32 },
  { name: "Point 5", India: 10, Rajasthan: 12 },
  { name: "Point 6", India: 8,  Rajasthan: 9  },
];

// ── Progress bar data ──
const metrics = [
  { label: "Awareness Coverage",      pct: 78, color: "#28a745" },
  { label: "Legal Enforcement",       pct: 65, color: "#007bff" },
  { label: "Community Participation", pct: 82, color: "#ffc107" },
  { label: "Education Impact",        pct: 71, color: "#dc3545" },
];

// ── Shared card shell ──
const Card = ({ title, children, style }) => (
  <div style={{
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
    overflow: "hidden",
    ...style,
  }}>
    <div style={{
      padding: "14px 18px 10px",
      borderBottom: "1px solid #f0f0f0",
    }}>
      <h5 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "#2e4057" }}>
        {title}
      </h5>
    </div>
    <div style={{ padding: "16px 18px 18px" }}>
      {children}
    </div>
  </div>
);

// ── Custom tooltip for the line chart ──
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: "rgba(20,20,30,0.92)",
      borderRadius: 8,
      padding: "8px 12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}>
      <p style={{ margin: "0 0 4px", fontSize: 11, color: "#aaa", fontWeight: 600 }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ margin: "2px 0", fontSize: 13, fontWeight: 600, color: p.color }}>
          {p.name}: <span style={{ color: "#fff" }}>{p.value}</span>
        </p>
      ))}
    </div>
  );
};

export default function KeyMetricsWithChart() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f2f5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 28,
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: "border-box",
    }}>
      <div style={{
        display: "flex",
        gap: 20,
        width: "100%",
        maxWidth: 960,
        alignItems: "stretch",
      }}>

        {/* ── LEFT: Line Chart Card ── */}
        <Card title="India vs Rajasthan" style={{ flex: "1 1 0", minWidth: 0 }}>
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={chartData} margin={{ top: 12, right: 16, left: -10, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 11, fill: "#999" }}
                axisLine={{ stroke: "#e0e0e0" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#999" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 65]}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#e8e8e8", strokeWidth: 1 }} />
              <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ fontSize: 12, paddingBottom: 8 }}
              />
              <Line
                type="linear"
                dataKey="India"
                stroke="#2e6da4"
                strokeWidth={2.2}
                dot={{ r: 4, fill: "#2e6da4", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="linear"
                dataKey="Rajasthan"
                stroke="#e8793d"
                strokeWidth={2.2}
                dot={{ r: 4, fill: "#e8793d", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* ── RIGHT: Key Metrics Card ── */}
        {/* <Card title="Key Metrics" style={{ width: 260, flexShrink: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, paddingTop: 4 }}>
            {metrics.map((m, i) => (
              <div key={i}>
              
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{m.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: m.color }}>{m.pct}%</span>
                </div>
             
                <div style={{
                  background: "#f0f0f0",
                  borderRadius: 6,
                  height: 9,
                  overflow: "hidden",
                }}>
               
                  <div style={{
                    width: `${m.pct}%`,
                    height: "100%",
                    background: m.color,
                    borderRadius: 6,
                    transition: "width 0.6s ease",
                  }} />
                </div>
              </div>
            ))}
          </div>
        </Card> */}
      </div>
    </div>
  );
}