// import React, { useState } from "react";
// import "./MitigatePage.css";

// export default function MitigatePage() {
//   const [actions, setActions] = useState({
//     blockedIP: false,
//     isolatedEndpoint: false,
//     notifiedSOC: false,
//     updatedFirewall: false,
//     markedSafe: false,
//   });

//   const handleChange = (key) => {
//     setActions((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const handleSubmit = () => {
//     console.log("Mitigation actions:", actions);
//     alert("Mitigation actions saved.");
//   };

//   return (
//     <div className="mitigate-container">
//       <div className="mitigate-card">
//         <h2 className="mitigate-title">Mitigate Alert #</h2>
//         <div className="checkbox-group">
//           <label>
//             <input type="checkbox" onChange={() => handleChange("blockedIP")} />
//             Blocked IP address
//           </label>
//           <label>
//             <input type="checkbox" onChange={() => handleChange("isolatedEndpoint")} />
//             Isolated Endpoint
//           </label>
//           <label>
//             <input type="checkbox" onChange={() => handleChange("notifiedSOC")} />
//             Notified SOC Team
//           </label>
//           <label>
//             <input type="checkbox" onChange={() => handleChange("updatedFirewall")} />
//             Updated firewall rules
//           </label>
//           <label>
//             <input type="checkbox" onChange={() => handleChange("markedSafe")} />
//             Marked as safe
//           </label>
//         </div>
//         <button className="save-btn" onClick={handleSubmit}>Save</button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import "./MitigatePage.css";

export default function MitigatePage() {
  const [actions, setActions] = useState({
    blockedIP: false,
    isolatedEndpoint: false,
    notifiedSOC: false,
    updatedRules: false,
    markedSafe: false,
    extra: false,
  });

  const handleChange = (key) => {
    setActions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    console.log("Mitigation actions:", actions);
    alert("Mitigation actions saved.");
  };

  return (
    <div className="mitigate-container">
      <div className="mitigate-card">
        <h2 className="mitigate-title">Mitigate</h2>

        <div className="checkbox-row">
          <label>
            <input type="checkbox" onChange={() => handleChange("blockedIP")} />
            Blocked IP
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("isolatedEndpoint")} />
            Isolated Endpoint
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("notifiedSOC")} />
            Notified SOC Team
          </label>
        </div>

        <div className="checkbox-row">
          <label>
            <input type="checkbox" onChange={() => handleChange("updatedRules")} />
            Updated Rules
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("markedSafe")} />
            Marked Safe
          </label>
          <label>
            <input type="checkbox" onChange={() => handleChange("extra")} />
            Something Else
          </label>
        </div>

        <div className="save-wrapper">
          <button className="save-btn" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
}
