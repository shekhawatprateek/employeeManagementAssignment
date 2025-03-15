# Employee Management Dashboard

## 🛠 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone <repository-url>
cd EmployeeManagementDashboard
2️⃣ Install Dependencies

# Backend (server)
cd backend
npm install

# Frontend (React)
cd ../frontend
npm install


3️⃣ Run the Application
Start the Backend Server

cd backend
npm start
The backend runs at http://localhost:8000
Start the Frontend


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


GET http://localhost:8000/employees
✅ Response

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

{
  "message": "Employee updated"
}
DELETE /employees/:id
✅ Request

DELETE http://localhost:8000/employees/171094
✅ Response

{
  "message": "Employee deleted"
}
💻 Frontend Usage
Open http://localhost:3000 in a browser.
The homepage will display a list of employees.
You can Add, Edit, View, and Delete employees.


---





