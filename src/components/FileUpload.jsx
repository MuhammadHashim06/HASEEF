import React, { useState } from "react";
import styles from "./FileUploadWithDropdown.module.css";

export default function FileUploadWithDropdown() {
  const [selectedOption, setSelectedOption] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.card}>
      <div className={styles.title}>File Upload with Dropdown</div>

      {/* Dropdown */}
      <label className={styles.label}>Select Category:</label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className={styles.select}
      >
        <option value="">Choose...</option>
        



        <option value="randomforesr">Credit Card Random Forest</option>
        <option value="iee">Credit Card IEE</option>
        <option value="network">Network Intrusion</option>
        <option value="email">Email Phishing</option>
      </select>

      {/* Upload */}
      <label className={styles.label}>Upload File:</label>
      <div
        className={styles.dropArea}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("hiddenFileInput").click()}
      >
        {uploadedFile ? (
          <div>{uploadedFile.name}</div>
        ) : (
          <div>Click or drag file here to upload</div>
        )}
        <input
          type="file"
          id="hiddenFileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      {uploadedFile && (
        <div className={styles.fileName}>
          <strong>Selected:</strong> {uploadedFile.name}
        </div>
        
      )}
      <button>Upload</button>
    </div>
  );
}
