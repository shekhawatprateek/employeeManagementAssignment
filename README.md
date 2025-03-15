# Employee Management Dashboard

This is a **MERN (MongoDB, Express, React, Node.js)** application that allows users to **manage employees** by adding, editing, viewing, and deleting employee records.

---

## 🚀 Features
- **Backend (Node.js + Express)**
  - REST API with **CRUD operations** (Create, Read, Update, Delete)
  - Stores employee data in **JSON (in-memory storage)**

- **Frontend (React)**
  - Displays a list of employees
  - View detailed employee info
  - Add, Edit, and Delete employees
  - Uses **React Hooks & Functional Components**
  - Uses **React Icons** for buttons

---

## 🛠 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone <repository-url>
cd EmployeeManagementDashboard
2️⃣ Install Dependencies
sh
Copy
Edit
# Backend (server)
cd backend
npm install

# Frontend (React)
cd ../frontend
npm install
3️⃣ Run the Application
Start the Backend Server
sh
Copy
Edit
cd backend
npm start
The backend runs at http://localhost:8000
Start the Frontend
sh
Copy
Edit
cd frontend
npm start
The frontend runs at http://localhost:3000
📌 Backend API Documentation
Base URL: http://localhost:8000/employees
Method	Endpoint	Description
GET	/employees	Fetch all employees
GET	/employees/:id	Fetch a specific employee by ID
POST	/employees	Add a new employee
PUT	/employees/:id	Update an existing employee
DELETE	/employees/:id	Delete an employee
📌 API Request & Response Examples
GET /employees
✅ Request

sh
Copy
Edit
GET http://localhost:8000/employees
✅ Response

json
Copy
Edit
[
  {
    "id": "171093",
    "name": "John Doe",
    "position": "Software Engineer",
    "department": "IT",
    "email": "john@example.com",
    "phoneNumber": "9876543210"
  }
]
POST /employees
✅ Request

sh
Copy
Edit
POST http://localhost:8000/employees
Content-Type: application/json
json
Copy
Edit
{
  "name": "Alice Johnson",
  "position": "HR Manager",
  "department": "Human Resources",
  "email": "alice@example.com",
  "phoneNumber": "9876543210"
}
✅ Response

json
Copy
Edit
{
  "id": "171094",
  "name": "Alice Johnson",
  "position": "HR Manager",
  "department": "Human Resources",
  "email": "alice@example.com",
  "phoneNumber": "9876543210"
}
PUT /employees/:id
✅ Request

sh
Copy
Edit
PUT http://localhost:8000/employees/171094
Content-Type: application/json
json
Copy
Edit
{
  "name": "Alice Johnson",
  "position": "Senior HR Manager"
}
✅ Response

json
Copy
Edit
{
  "message": "Employee updated"
}
DELETE /employees/:id
✅ Request

sh
Copy
Edit
DELETE http://localhost:8000/employees/171094
✅ Response

json
Copy
Edit
{
  "message": "Employee deleted"
}
💻 Frontend Usage
Open http://localhost:3000 in a browser.
The homepage will display a list of employees.
You can Add, Edit, View, and Delete employees.


---

### **✅ What’s Updated?**
- **Backend now runs on `http://localhost:8000`** instead of `5000`.  
- All API endpoints reflect the **correct port (8000)**.  




