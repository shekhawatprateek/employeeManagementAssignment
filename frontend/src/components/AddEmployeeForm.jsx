import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Form.module.css";

const EmployeeForm = ({ employee = {}, onSave, onCancel, isEdit = false }) => {
  const [formData, setFormData] = useState(employee);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isEdit ? `http://localhost:8000/employees/${employee.id}` : "http://localhost:8000/employees";
    const method = isEdit ? "put" : "post";

    axios[method](url, formData)
      .then(() => {
        alert(isEdit ? "Employee updated!" : "Employee added!");
        onSave();
      })
      .catch(error => console.error(`Error ${isEdit ? "updating" : "adding"} employee:`, error));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>{isEdit ? "Edit Employee" : "Add Employee"}</h2>
      <input name="name" placeholder="Name" value={formData.name || ""} onChange={handleChange} required />
      <input name="position" placeholder="Position" value={formData.position || ""} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={formData.department || ""} onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" value={formData.email || ""} onChange={handleChange} required />
      <input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber || ""} onChange={handleChange} required />
      <button className="primary" type="submit">{isEdit ? "Update" : "Add"} Employee</button>
      {isEdit && <button className="secondary" type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default EmployeeForm;