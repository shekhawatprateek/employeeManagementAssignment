import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeForm from "./components/EditEmployeeForm";
import styles from "./styles/App.module.css";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [forceUpdate, setForceUpdate] = useState(false); // 🔥 Force UI refresh

  // Fetch employees from backend
  const fetchEmployees = () => {
    axios.get("http://localhost:8000/employees")
      .then(response => setEmployees(response.data))
      .catch(error => console.error("Error fetching employees:", error));
  };

  useEffect(() => {
    fetchEmployees();
  }, [forceUpdate]); // 🔥 This ensures the UI updates after deletion

  return (
    <div className={styles.container}>
      <h1>Employee Management Dashboard</h1>

      {editingEmployee ? (
        <EmployeeForm
          employee={editingEmployee}
          onSave={() => {
            setEditingEmployee(null);
            setForceUpdate(prev => !prev); // 🔥 Force re-fetch
          }}
          isEdit={true}
          onCancel={() => setEditingEmployee(null)}
        />
      ) : selectedEmployeeId ? (
        <EmployeeDetails employeeId={selectedEmployeeId} onBack={() => setSelectedEmployeeId(null)} />
      ) : (
        <>
          <EmployeeForm onSave={() => setForceUpdate(prev => !prev)} isEdit={false} />
          <EmployeeList 
            employees={employees} 
            onSelectEmployee={setSelectedEmployeeId} 
            onEditEmployee={setEditingEmployee} 
            onDeleteEmployee={() => setForceUpdate(prev => !prev)} // 🔥 Trigger refresh on delete
          />
        </>
      )}
    </div>
  );
};

export default App;
