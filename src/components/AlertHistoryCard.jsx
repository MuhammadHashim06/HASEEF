// import React from "react";
// import styles from "./AlertHistoryCard.module.css";

// export default function AlertHistoryCard() {
//   const rows = [
//     {
//       time: "03:24 AM",
//       source: "Email Gateway",
//       risk: "Phishing",
//       action: true,
//     },
//     { time: "08:19 AM", source: "Firewall", risk: "Intrusion", action: true },
//     { time: "07:31 AM", source: "Endpoint", risk: "Ransomware", action: true },
//   ];

//   return (
//     <div className={styles.card}>
//       <div className={styles.title}>Alert History</div>
//       <table className={styles.table}>
//         <thead>
//           <tr className={styles.headRow}>
//             <th>Time</th>
//             <th>Alert Source</th>
//             <th>Risk</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((r, i) => (
//             <tr key={i} className={styles.row}>
//               <td>{r.time}</td>
//               <td>{r.source}</td>
//               <td>{r.risk}</td>
//               <td>
//                 {r.action && (
//                   <button className={styles.button}>Mitigate</button>
//                 )}
//               </td>
//               <td>
//                 {/* <label htmlFor="fileupload">Upload file</label>
//                 <input className="fileupload" id="fileupload" type="file" /> */}
//                 <td>
//                   <label
//                     htmlFor={`fileupload-${i}`}
//                     className={styles.fileLabel}
//                   >
//                     Upload File
//                   </label>
//                   <input
//                     className={styles.fileInput}
//                     id={`fileupload-${i}`}
//                     type="file"
//                   />
//                 </td>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



import React, { useState } from "react";
import styles from "./AlertHistoryCard.module.css";
import axios from "axios";

export default function AlertHistoryCard() {
  const [uploadStates, setUploadStates] = useState([
    { loading: false, success: false },
    { loading: false, success: false },
    { loading: false, success: false },
  ]);

  const handleFileUpload = async (event, index) => {
    const file = event.target.files[0];
    if (!file) return;

    const newStates = [...uploadStates];
    newStates[index] = { loading: true, success: false };
    setUploadStates(newStates);

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      newStates[index] = { loading: false, success: true };
      setUploadStates(newStates);
    } catch (err) {
      console.error("Upload failed", err);
      newStates[index] = { loading: false, success: false };
      setUploadStates(newStates);
    }
  };

  const rows = [
    { time: "03:24 AM", source: "Email Gateway", risk: "Phishing" },
    { time: "08:19 AM", source: "Firewall", risk: "Intrusion" },
    { time: "07:31 AM", source: "Endpoint", risk: "Ransomware" },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.title}>Alert History</div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            <th>Time</th>
            <th>Alert Source</th>
            <th>Risk</th>
            <th>Action</th>
            <th>Upload</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className={styles.row}>
              <td>{row.time}</td>
              <td>{row.source}</td>
              <td>{row.risk}</td>
              <td>
                {uploadStates[index].success ? (
                  <button className={styles.button}>Mitigate</button>
                ) : (
                  <span style={{ color: "#888" }}>Pending Upload</span>
                )}
              </td>
              <td>
                <label htmlFor={`fileInput${index}`} className={styles.uploadLabel}>
                  {uploadStates[index].loading
                    ? "Uploading..."
                    : uploadStates[index].success
                    ? "Uploaded ✓"
                    : "Upload File"}
                </label>
                <input
                  id={`fileInput${index}`}
                  type="file"
                  className={styles.fileInput}
                  onChange={(e) => handleFileUpload(e, index)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
