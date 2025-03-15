import React from "react";
import axios from "axios";
import styles from "../styles/EmployeeList.module.css";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi"; // Import icons

const EmployeeList = ({ employees, onSelectEmployee, onEditEmployee, onDeleteEmployee }) => {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/employees/${id}`)
      .then(() => {
        alert("Employee deleted!");
        onDeleteEmployee(); // 🔥 Refresh list after deletion
      })
      .catch(error => console.error("Error deleting employee:", error));
  };

  return (
    <div className={styles.listContainer}>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id} className={styles.listItem}>
            <span className={styles.employeeName}>{emp.name} - {emp.position}</span>
            <div className={styles.iconButtons}>
              <FiEye className={styles.icon} onClick={() => onSelectEmployee(emp.id)} title="View Details" />
              <FiEdit className={styles.icon} onClick={() => onEditEmployee(emp)} title="Edit Employee" />
              <FiTrash2 className={styles.icon} onClick={() => handleDelete(emp.id)} title="Delete Employee" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
