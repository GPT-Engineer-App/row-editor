import React from "react";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";

const DownloadCSV = () => {
  const handleDownload = () => {
    const csvData = [
      ["id", "name", "age"],
      [1, "John Doe", 28],
      [2, "Jane Smith", 34],
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    const blob = new Blob([decodeURIComponent(encodeURI(csvContent))], {
      type: "text/csv;charset=utf-8;",
    });

    saveAs(blob, "data.csv");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Button onClick={handleDownload}>Download CSV</Button>
    </div>
  );
};

export default DownloadCSV;