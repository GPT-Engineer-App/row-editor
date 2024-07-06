import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UploadCSV = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      // Handle file upload logic here
      console.log("File uploaded:", file);
    } else {
      console.error("No file selected");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Input type="file" accept=".csv" onChange={handleFileChange} />
      <Button onClick={handleUpload}>Upload CSV</Button>
    </div>
  );
};

export default UploadCSV;