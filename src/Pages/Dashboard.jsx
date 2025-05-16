import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const cardStyle = {
  background: "#101c1c",
  borderRadius: "16px",
  padding: "24px",
  color: "#fff",
  boxShadow: "0 2px 16px #0004",
  margin: "12px",
  flex: 1,
  minWidth: 0,
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  gap: "24px",
  marginTop: "32px",
};

const labelStyle = { color: "#8fffa0", fontWeight: 600, fontSize: 18 };

function AlertSeverityCard() {
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        Alert Severity
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        <div>
          <div style={labelStyle}>Low</div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>87</div>
        </div>
        <div>
          <div style={labelStyle}>Medium</div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>49</div>
        </div>
        <div>
          <div style={labelStyle}>High</div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>14</div>
        </div>
        <div>
          <div style={labelStyle}>Critical</div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>08</div>
        </div>
      </div>
    </div>
  );
}

function AlertHistoryCard() {
  const rows = [
    {
      time: "03:24 AM",
      source: "Email Gateway",
      risk: "Phishing",
      action: true,
    },
    {
      time: "08:19 AM",
      source: "Firewall",
      risk: "Intrusion",
      action: false,
    },
    {
      time: "07:31 AM",
      source: "Endpoint",
      risk: "Ransomware",
      action: true,
    },
  ];
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        Alert History
      </div>
      <table style={{ width: "100%", color: "#fff", borderSpacing: 0 }}>
        <thead>
          <tr style={{ color: "#8fffa0", textAlign: "left" }}>
            <th style={{ padding: "8px 0" }}>Time</th>
            <th>Alert Source</th>
            <th>Risk</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #233" }}>
              <td style={{ padding: "8px 0" }}>{r.time}</td>
              <td>{r.source}</td>
              <td>{r.risk}</td>
              <td>
                {r.action && (
                  <button
                    style={{
                      background: "#1a3d2f",
                      color: "#8fffa0",
                      border: "none",
                      borderRadius: 8,
                      padding: "6px 18px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Mitigate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RiskScoreCard() {
  const data = {
    datasets: [
      {
        data: [21, 100 - 21],
        backgroundColor: ["#8fffa0", "#233"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        Risk Score
      </div>
      <div style={{ width: 140, margin: "0 auto", position: "relative" }}>
        <Doughnut data={data} options={{ cutout: "80%", plugins: { legend: { display: false } } }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 140,
            height: 140,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#8fffa0",
            fontWeight: 700,
            fontSize: 28,
            pointerEvents: "none",
          }}
        >
          21%
          <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Good</div>
        </div>
      </div>
      <button
        style={{
          marginTop: 18,
          background: "#1a3d2f",
          color: "#8fffa0",
          border: "none",
          borderRadius: 8,
          padding: "8px 24px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Risk Score
      </button>
    </div>
  );
}

function NCAControlsCard() {
  const compliant = 84;
  const data = {
    datasets: [
      {
        data: [compliant, 100 - compliant],
        backgroundColor: ["#8fffa0", "#ffb366"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        NCA Controls
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#8fffa0",
              }}
            ></span>
            <span style={{ color: "#8fffa0" }}>Compliant</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
            <span
              style={{
                display: "inline-block",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ffb366",
              }}
            ></span>
            <span style={{ color: "#ffb366" }}>Non-compliant</span>
          </div>
          <button
            style={{
              marginTop: 18,
              background: "#1a3d2f",
              color: "#8fffa0",
              border: "none",
              borderRadius: 8,
              padding: "8px 24px",
              fontWeight: 600,
              cursor: "pointer",
              display: "block",
            }}
          >
            View Details
          </button>
        </div>
        <div style={{ width: 140, position: "relative" }}>
          <Doughnut data={data} options={{ cutout: "80%", plugins: { legend: { display: false } } }} />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 140,
              height: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#8fffa0",
              fontWeight: 700,
              fontSize: 28,
              pointerEvents: "none",
            }}
          >
            84%
            <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Compliant</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div style={{
      background: "#0a1414",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflowX: "hidden"
    }}>
      {/* Header Bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 32px 0 32px",
        background: "#101c1c",
        borderBottom: "1px solid #1a2a2a",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        {/* Left: Dashboard Heading */}
        <div style={{ color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
          DASHBOARD
        </div>
        {/* Right: Account Info */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            background: "#122822",
            color: "#8fffa0",
            borderRadius: 12,
            padding: "8px 18px",
            fontWeight: 600,
            fontSize: 16,
            marginRight: 8,
            boxShadow: "0 1px 8px #0002"
          }}>
            John Doe
          </div>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#1a3d2f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Simple SVG Account Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" fill="#8fffa0" />
              <ellipse cx="12" cy="17" rx="7" ry="5" fill="#8fffa0" />
            </svg>
          </div>
        </div>
      </div>
      {/* Dashboard Grid */}
      <div style={{ ...gridStyle, padding: "32px" }}>
        <AlertSeverityCard />
        <AlertHistoryCard />
        <RiskScoreCard />
        <NCAControlsCard />
      </div>
    </div>
  );
}


// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// Chart.register(ArcElement, Tooltip, Legend);

// const cardStyle = {
//   background: "#00110b",
//   borderRadius: "16px",
//   padding: "24px",
//   color: "#ffffff",
//   boxShadow: "0 2px 16px rgba(0, 17, 11, 0.4)",
//   margin: "12px",
//   flex: 1,
//   minWidth: 0,
// };

// const gridStyle = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gridTemplateRows: "1fr 1fr",
//   gap: "24px",
//   marginTop: "32px",
// };

// const labelStyle = { color: "#8fffa0", fontWeight: 600, fontSize: 18 };

// function AlertSeverityCard() {
//   return (
//     <div style={cardStyle}>
//       <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
//         Alert Severity
//       </div>
//       <div style={{ display: "flex", gap: 24 }}>
//         <div>
//           <div style={labelStyle}>Low</div>
//           <div style={{ fontSize: 32, fontWeight: 700 }}>87</div>
//         </div>
//         <div>
//           <div style={labelStyle}>Medium</div>
//           <div style={{ fontSize: 32, fontWeight: 700 }}>49</div>
//         </div>
//         <div>
//           <div style={labelStyle}>High</div>
//           <div style={{ fontSize: 32, fontWeight: 700 }}>14</div>
//         </div>
//         <div>
//           <div style={labelStyle}>Critical</div>
//           <div style={{ fontSize: 32, fontWeight: 700 }}>08</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Dashboard() {
//   return (
//     <div style={{
//       background: "#000f0a",
//       minHeight: "100vh",
//       width: "100vw",
//       margin: 0,
//       padding: 0,
//       overflowX: "hidden"
//     }}>
//       <div style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "24px 32px 0 32px",
//         background: "#00110b",
//         borderBottom: "1px solid #01100b",
//         position: "sticky",
//         top: 0,
//         zIndex: 10,
//       }}>
//         <div style={{ color: "#ffffff", fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>
//           DASHBOARD
//         </div>
//       </div>
//       <div style={{ ...gridStyle, padding: "32px" }}>
//         <AlertSeverityCard />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
