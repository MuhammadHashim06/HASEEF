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

// export default function NCAControlsCard() {
//   const compliant = 84;
//   const data = {
//     datasets: [
//       {
//         data: [compliant, 100 - compliant],
//         backgroundColor: ["#8fffa0", "#ffb366"],
//         borderWidth: 0,
//         cutout: "80%",
//       },
//     ],
//   };

//   return (
//     <div style={cardStyle}>
//       <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>NCA Controls</div>
//       <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//         <div>
//           <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//             <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#8fffa0" }}></span>
//             <span style={{ color: "#8fffa0" }}>Compliant</span>
//           </div>
//           <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
//             <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffb366" }}></span>
//             <span style={{ color: "#ffb366" }}>Non-compliant</span>
//           </div>
//           <button
//             style={{
//               marginTop: 18,
//               background: "#1a3d2f",
//               color: "#8fffa0",
//               border: "none",
//               borderRadius: 8,
//               padding: "8px 24px",
//               fontWeight: 600,
//               cursor: "pointer",
//               display: "block",
//             }}
//           >
//             View Details
//           </button>
//         </div>
//         <div style={{ width: 140, position: "relative" }}>
//           <Doughnut data={data} options={{ cutout: "80%", plugins: { legend: { display: false } } }} />
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: 140,
//               height: 140,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#8fffa0",
//               fontWeight: 700,
//               fontSize: 28,
//               pointerEvents: "none",
//             }}
//           >
//             84%
//             <div style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>Compliant</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./NCAControlsCard.module.css";

Chart.register(ArcElement, Tooltip, Legend);

export default function NCAControlsCard() {
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
    <div className={styles.card}>
      <div className={styles.title}>NCA Controls</div>
      <div className={styles.content}>
        <div>
          <div className={styles.labelGroup}>
            <span className={styles.dotCompliant}></span>
            <span className={styles.labelCompliant}>Compliant</span>
          </div>
          <div className={styles.labelGroup} style={{ marginTop: 8 }}>
            <span className={styles.dotNonCompliant}></span>
            <span className={styles.labelNonCompliant}>Non-compliant</span>
          </div>
          <button className={styles.button}>View Details</button>
        </div>
        <div className={styles.chartWrapper}>
          <Doughnut data={data} options={{ cutout: "80%", plugins: { legend: { display: false } } }} />
          <div className={styles.chartCenter}>
            {compliant}%
            <div className={styles.chartText}>Compliant</div>
          </div>
        </div>
      </div>
    </div>
  );
}
