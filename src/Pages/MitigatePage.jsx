import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./MitigationPage.module.css";

const options = [
  "Blocked IP address",
  "Isolated Endpoint",
  "Notified SOC Team",
  "Updated firewall rules",
  "Marked as safe",
];

export default function MitigationPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheck = (option) => {
    setCheckedItems((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = () => {
    // Simulate API call
    console.log(`Mitigation steps for Alert ${id}:`, checkedItems);
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <h2>Mitigate Alert #{id}</h2>
      <ul className={styles.list}>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={checkedItems.includes(option)}
                onChange={() => handleCheck(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} className={styles.saveBtn}>Save</button>
    </div>
  );
}
