// import React from "react";

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

// const labelStyle = { color: "#8fffa0", fontWeight: 600, fontSize: 18 };

// export default function AlertSeverityCard() {
//   return (
//     <div style={cardStyle}>
//       <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
//         Alert Severity
//       </div>
//       <div style={{ display: "flex", gap: 24 }}>
//         {[
//           ["Low", 87],
//           ["Medium", 49],
//           ["High", 14],
//           ["Critical", "08"],
//         ].map(([label, count]) => (
//           <div key={label}>
//             <div style={labelStyle}>{label}</div>
//             <div style={{ fontSize: 32, fontWeight: 700 }}>{count}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import styles from "./AlertSeverityCard.module.css";

export default function AlertSeverityCard() {
  const data = [
    { label: "Low", value: 87 },
    { label: "Medium", value: 49 },
    { label: "High", value: 14 },
    { label: "Critical", value: "08" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.title}>Alert Severity</div>
      <div className={styles.row}>
        {data.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.value}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
