import React from "react";
// import { FileUploadWithDropdown } from "../components/FileUpload";
import FileUploadWithDropdown from "../components/FileUpload"
export default function UploadPage() {
  return (
    <div style={{ color: "#fff" }}>
      <h1>Upload Files</h1>
      <p>This will be your custom file upload logic or UI.</p>
      <FileUploadWithDropdown/>
    </div>
  );
}
