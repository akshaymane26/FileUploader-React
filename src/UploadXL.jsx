
import React, { useState } from "react";
import axios from "axios";

const UploadExcel = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://3.109.185.23:5500/uploadExcel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      <h2 style={{color:'MediumSeaGreen'}}>Upload Excel File</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" /><br />
        <button type="submit" style={{marginTop:'20px', backgroundColor:"olivo",color:'green',width:'100px',height:'40px'}}>Upload</button>
      </form>
    </div>
  );
};

export default UploadExcel;
