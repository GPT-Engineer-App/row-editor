import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ViewData = () => {
  const [data, setData] = useState([
    // Sample data, replace with actual CSV data
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Smith", age: 34 },
  ]);

  const handleEdit = (id, field, value) => {
    setData((prevData) =>
      prevData.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  };

  const handleAddRow = () => {
    const newRow = { id: Date.now(), name: "", age: "" };
    setData((prevData) => [...prevData, newRow]);
  };

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => handleEdit(row.id, "name", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  value={row.age}
                  onChange={(e) => handleEdit(row.id, "age", e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Button variant="outline" onClick={() => handleDelete(row.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddRow}>Add Row</Button>
    </div>
  );
};

export default ViewData;