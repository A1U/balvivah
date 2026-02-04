




// import { Doughnut } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       data: [40, 35, 25],
//       backgroundColor: ["#dc3545", "#0d6efd", "#ffc107"],
//       borderRadius: 10,   // 👈 rounded edges
//       spacing: 4,         // 👈 space between slices
//     },
//   ],
// };

// const options = {
//   cutout: "65%", // 👈 makes it a donut
// };

// export default function AchievementBreakdown() {
//   return (
//     <>
//         <h5 className="fw-bold mb-0 text-primary-custom">Achievement Breakdown</h5>

// <div className="p-4 bg-white rounded shadow">
//       <Doughnut data={data} options={options} />
//     </div>       
//     </>
   
//   );
// }







import { useState } from "react";

const districtData = {
  Alwar:          { color: "#e8532a", pct: ">30%" },
  Bharatpur:      { color: "#e8532a", pct: ">30%" },
  Dhaulpur:       { color: "#e8532a", pct: ">30%" },
  Karoli:         { color: "#e8532a", pct: ">30%" },
  "Sawai Madhopur":{ color: "#e8532a", pct: ">30%" },
  Tonk:           { color: "#e8532a", pct: ">30%" },
  Bundi:          { color: "#e8532a", pct: ">30%" },
  Chittorgarh:    { color: "#e8532a", pct: ">30%" },
  Pratapgarh:     { color: "#e8532a", pct: ">30%" },
  Jhalawar:       { color: "#e8532a", pct: ">30%" },
  Kota:           { color: "#e8532a", pct: ">30%" },
  Hanumangarh:    { color: "#f0a860", pct: "25.5-30%" },
  Churu:          { color: "#f0a860", pct: "25.5-30%" },
  Nagaur:         { color: "#f0a860", pct: "25.5-30%" },
  Jaipur:         { color: "#f0a860", pct: "25.5-30%" },
  Dausa:          { color: "#f0a860", pct: "25.5-30%" },
  Baran:          { color: "#f0a860", pct: "25.5-30%" },
  Ajmer:          { color: "#f0a860", pct: "25.5-30%" },
  Bhilwara:       { color: "#f0a860", pct: "25.5-30%" },
  Bikaner:        { color: "#f7d44c", pct: "20-25.4%" },
  Jodhpur:        { color: "#f7d44c", pct: "20-25.4%" },
  Barmer:         { color: "#f7d44c", pct: "20-25.4%" },
  Jalore:         { color: "#f7d44c", pct: "20-25.4%" },
  Rajsamand:      { color: "#f7d44c", pct: "20-25.4%" },
  "Sri Ganganagar":{ color: "#4caf50", pct: "<20%" },
  Jhunjhunu:      { color: "#4caf50", pct: "<20%" },
  Sikar:          { color: "#4caf50", pct: "<20%" },
  Jaisalmer:      { color: "#4caf50", pct: "<20%" },
  Pali:           { color: "#4caf50", pct: "<20%" },
  Sirohi:         { color: "#4caf50", pct: "<20%" },
  Udaipur:        { color: "#4caf50", pct: "<20%" },
  Dungarpur:      { color: "#4caf50", pct: "<20%" },
  Banswara:       { color: "#4caf50", pct: "<20%" },
};

const districts = [
  { name: "Sri Ganganagar", label: { x: 340, y: 68 }, path: "M290,30 L380,30 L410,55 L400,85 L360,95 L310,90 L280,70 Z" },
  { name: "Hanumangarh", label: { x: 440, y: 75 }, path: "M380,30 L470,35 L490,70 L470,95 L410,100 L400,85 L410,55 Z" },
  { name: "Bikaner", label: { x: 270, y: 155 }, path: "M200,100 L290,90 L320,110 L330,155 L310,190 L260,200 L210,185 L190,150 Z" },
  { name: "Churu", label: { x: 395, y: 140 }, path: "M360,95 L410,100 L440,120 L435,155 L400,165 L360,160 L340,140 L350,110 Z" },
  { name: "Jhunjhunu", label: { x: 490, y: 140 }, path: "M470,95 L520,100 L545,125 L535,155 L510,170 L470,165 L440,145 L440,120 Z" },
  { name: "Sikar", label: { x: 490, y: 195 }, path: "M470,165 L510,170 L545,185 L545,215 L520,230 L485,228 L460,210 L455,185 Z" },
  { name: "Jaisalmer", label: { x: 140, y: 220 }, path: "M70,160 L140,150 L190,155 L210,185 L215,230 L200,270 L160,290 L110,285 L70,260 L55,220 Z" },
  { name: "Nagaur", label: { x: 375, y: 200 }, path: "M330,155 L370,160 L405,170 L420,200 L415,230 L385,240 L350,235 L325,215 L320,190 Z" },
  { name: "Alwar", label: { x: 565, y: 195 }, path: "M545,165 L590,170 L620,195 L615,225 L590,240 L555,235 L540,220 L545,195 Z" },
  { name: "Dausa", label: { x: 555, y: 250 }, path: "M540,230 L575,235 L610,250 L605,275 L580,285 L550,280 L530,260 L535,242 Z" },
  { name: "Bharatpur", label: { x: 600, y: 250 }, path: "M610,225 L650,230 L670,255 L660,280 L635,290 L605,285 L605,270 L615,250 Z" },
  { name: "Jodhpur", label: { x: 255, y: 250 }, path: "M210,195 L265,200 L295,215 L310,240 L305,270 L280,290 L245,295 L215,285 L200,260 L205,235 Z" },
  { name: "Jaipur", label: { x: 460, y: 250 }, path: "M420,210 L465,215 L495,230 L500,260 L490,285 L460,295 L430,290 L415,265 L418,240 Z" },
  { name: "Barmer", label: { x: 155, y: 310 }, path: "M100,275 L165,270 L205,280 L215,310 L210,345 L180,365 L140,370 L100,355 L75,320 L80,290 Z" },
  { name: "Dhaulpur", label: { x: 640, y: 290 }, path: "M630,270 L675,275 L695,300 L690,325 L665,335 L635,330 L615,315 L620,295 Z" },
  { name: "Karoli", label: { x: 600, y: 310 }, path: "M580,285 L620,288 L640,305 L635,330 L610,340 L580,335 L565,315 L570,298 Z" },
  { name: "Sawai Madhopur", label: { x: 530, y: 305 }, path: "M510,285 L550,288 L575,300 L570,325 L545,338 L515,335 L495,315 L500,298 Z" },
  { name: "Tonk", label: { x: 470, y: 310 }, path: "M445,290 L485,292 L510,305 L505,330 L480,342 L450,340 L430,320 L435,300 Z" },
  { name: "Ajmer", label: { x: 385, y: 295 }, path: "M355,275 L395,278 L420,292 L418,318 L395,330 L365,328 L345,310 L348,292 Z" },
  { name: "Jalore", label: { x: 185, y: 375 }, path: "M140,350 L195,345 L225,355 L230,385 L220,410 L185,420 L145,415 L120,390 L125,365 Z" },
  { name: "Pali", label: { x: 295, y: 345 }, path: "M260,320 L305,318 L330,335 L335,365 L320,385 L290,395 L260,390 L240,370 L245,340 Z" },
  { name: "Bhilwara", label: { x: 395, y: 365 }, path: "M360,340 L405,338 L430,355 L432,385 L415,400 L385,405 L355,395 L340,375 L345,355 Z" },
  { name: "Bundi", label: { x: 490, y: 360 }, path: "M465,338 L510,340 L535,358 L530,385 L510,400 L478,402 L455,385 L458,358 Z" },
  { name: "Rajsamand", label: { x: 320, y: 405 }, path: "M285,388 L330,385 L355,398 L358,425 L340,440 L308,445 L280,432 L272,410 Z" },
  { name: "Chittorgarh", label: { x: 420, y: 415 }, path: "M385,398 L430,395 L460,412 L458,442 L435,455 L405,455 L380,440 L375,418 Z" },
  { name: "Kota", label: { x: 510, y: 415 }, path: "M485,398 L530,400 L555,418 L550,445 L528,458 L498,455 L478,440 L478,415 Z" },
  { name: "Baran", label: { x: 565, y: 395 }, path: "M540,378 L585,380 L605,400 L600,425 L578,435 L550,430 L535,412 L538,392 Z" },
  { name: "Sirohi", label: { x: 225, y: 430 }, path: "M195,410 L240,408 L260,425 L258,455 L235,468 L205,465 L185,445 L188,425 Z" },
  { name: "Udaipur", label: { x: 300, y: 460 }, path: "M265,445 L310,442 L340,458 L342,488 L322,505 L290,510 L262,498 L252,472 Z" },
  { name: "Pratapgarh", label: { x: 400, y: 480 }, path: "M375,460 L420,458 L445,475 L443,503 L420,515 L390,512 L365,498 L368,475 Z" },
  { name: "Jhalawar", label: { x: 520, y: 470 }, path: "M495,452 L540,450 L565,468 L562,498 L538,510 L508,508 L485,490 L488,466 Z" },
  { name: "Dungarpur", label: { x: 280, y: 520 }, path: "M250,505 L295,502 L318,518 L315,545 L290,555 L258,550 L240,530 L245,512 Z" },
  { name: "Banswara", label: { x: 340, y: 540 }, path: "M310,530 L358,528 L380,545 L377,570 L350,578 L318,572 L305,552 Z" },
];

const legend = [
  { color: "#e8532a", label: "More than 30%", count: 11 },
  { color: "#f0a860", label: "25.5–30%",      count: 8  },
  { color: "#f7d44c", label: "20–25.4%",      count: 5  },
  { color: "#4caf50", label: "Less than 20%", count: 9  },
];

export default function RajasthanMap() {
  const [hovered, setHovered] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, name) => {
    const svg = e.currentTarget.closest("svg");
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
    setTooltipPos({ x: svgP.x + 12, y: svgP.y - 10 });
    setHovered(name);
  };

  return (
    <div >
      {/* Card wrapper — fixed width + height */}
      <div style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        width: 680,
        maxWidth: "100%",
        height: 580,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        overflow: "hidden",
      }}>
        {/* Header row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // padding: "16px 20px 0",
          flexShrink: 0,
        }}>
          <div>
            <h2 style={{ padding: 5, fontSize: 16, color: "#1a1a1a", fontWeight: 700 }}>
              Rajasthan Districts
            </h2>
           
          </div>
          
        </div>

        {/* Thin divider */}
        <div style={{ height: 1, background: "#eee", margin: "12px 20px 0", flexShrink: 0 }} />

        {/* Map area — grows to fill remaining card height */}
        <div style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 12px",
          overflow: "hidden",
        }}>
          <svg
            viewBox="40 10 680 590"
            preserveAspectRatio="xMidYMid meet"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {districts.map((d) => {
              const info = districtData[d.name];
              const isHov = hovered === d.name;
              return (
                <g key={d.name}>
                  <path
                    d={d.path}
                    fill={info.color}
                    stroke="#fff"
                    strokeWidth={isHov ? 2.5 : 1.5}
                    style={{
                      filter: isHov ? "brightness(1.15) drop-shadow(0 2px 4px rgba(0,0,0,0.25))" : "none",
                      transition: "filter 0.15s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHovered(d.name)}
                    onMouseLeave={() => setHovered(null)}
                    onMouseMove={(e) => handleMouseMove(e, d.name)}
                  />
                  <text
                    x={d.label.x}
                    y={d.label.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={d.name.length > 12 ? 7.5 : 9}
                    fontWeight="600"
                    fill="#1a1a1a"
                    pointerEvents="none"
                    style={{ textShadow: "0 0 3px rgba(255,255,255,0.8)" }}
                  >
                    {d.name}
                  </text>
                </g>
              );
            })}

            {/* Tooltip */}
            {hovered && districtData[hovered] && (
              <g pointerEvents="none">
                <rect x={tooltipPos.x - 2} y={tooltipPos.y - 22} width={90} height={34} rx={5} fill="rgba(30,30,30,0.9)" />
                <text x={tooltipPos.x + 43} y={tooltipPos.y - 10} textAnchor="middle" fontSize={9} fontWeight="700" fill="#fff">{hovered}</text>
                <text x={tooltipPos.x + 43} y={tooltipPos.y + 4} textAnchor="middle" fontSize={8.5} fill="#ccc">{districtData[hovered].pct}</text>
              </g>
            )}
          </svg>
        </div>

        {/* Divider above legend */}
        <div style={{ height: 1, background: "#eee", margin: "0 20px", flexShrink: 0 }} />

        {/* Legend — 2×2 grid, pinned to bottom */}
        <div style={{
          flexShrink: 0,
          padding: "10px 20px 14px",
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5px 36px",
          }}>
            {legend.map((l) => (
              <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 15,
                  height: 15,
                  background: l.color,
                  borderRadius: 3,
                  border: "1px solid rgba(0,0,0,0.12)",
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: 11.5, color: "#333", fontWeight: 500, whiteSpace: "nowrap" }}>
                  {l.label} <span style={{ color: "#999", fontWeight: 400 }}>({l.count})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}