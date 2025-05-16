// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// Chart.register(ArcElement, Tooltip, Legend);

// const cardStyle = {
//   background: "#00110b",
//   borderRadius: "16px",
//   padding: "24px",
//   color: "#fff",
//   boxShadow: "0 2px 16px rgba(0, 17, 11, 0.4)",
//   margin: "12px",
//   flex: "1 1 calc(50% - 48px)",
//   minWidth: "280px",
//   maxWidth: "calc(50% - 48px)",
// };

// export default function RiskScoreCard() {
//   const data = {
//     datasets: [
//       {
//         data: [21, 79],
//         backgroundColor: ["#8fffa0", "#04150f"],
//         borderWidth: 0,
//         cutout: "80%",
//       },
//     ],
//   };

//   return (
//     <div style={cardStyle}>
//       <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Risk Score</div>
//       <div style={{ width: 140, margin: "0 auto", position: "relative" }}>
//         <Doughnut data={data} options={{ cutout: "80%", plugins: { legend: { display: false } } }} />
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: 140,
//             height: 140,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             color: "#8fffa0",
//             fontWeight: 700,
//             fontSize: 28,
//             pointerEvents: "none",
//           }}
//         >
//           21%
//           <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Good</div>
//         </div>
//       </div>
//       <button
//         style={{
//           marginTop: 18,
//           background: "#1a3d2f",
//           color: "#8fffa0",
//           border: "none",
//           borderRadius: 8,
//           padding: "8px 24px",
//           fontWeight: 600,
//           cursor: "pointer",
//         }}
//       >
//         Risk Score
//       </button>
//     </div>
//   );
// }

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./RiskScoreCard.module.css";

Chart.register(ArcElement, Tooltip, Legend);

export default function RiskScoreCard() {
  const data = {
    datasets: [
      {
        data: [21, 79],
        backgroundColor: ["#8fffa0", "#04150f"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>Risk Score</div>
      <div className={styles.chartContainer}>
        <Doughnut
          data={data}
          options={{ cutout: "80%", plugins: { legend: { display: false } } }}
        />
        <div className={styles.chartCenter}>
          21%
          <div className={styles.status}>Good</div>
        </div>
      </div>
      <button className={styles.button}>Risk Score</button>
    </div>
  );
}
