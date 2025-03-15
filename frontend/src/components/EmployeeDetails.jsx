import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeDetails = ({ employeeId, onBack }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/employees/${employeeId}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error("Error fetching employee details:", error));
  }, [employeeId]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div>
      <h2>{employee.name}</h2>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phoneNumber}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default EmployeeDetails;
