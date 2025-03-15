const express = require('express');
const app = express();
const employeeRoutes = require('./routes');
const cors = require('cors')
const PORT = 8000;


app.use(express.json());
app.use(cors())
app.use('/employees', employeeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));