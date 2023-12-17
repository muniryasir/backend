const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Import the users routes
const usersRoutes = require('/home/yasir/solana/backend/routes/users.js');

// Use the users routes
app.use('/api', usersRoutes);

app.get('/', (req, res)=>{
  res.send('home');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});