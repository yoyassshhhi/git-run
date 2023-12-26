const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Project1', {
 
});

// Define a Mongoose Schema for User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a Mongoose Model
const User = mongoose.model('User', userSchema);

app.use(cors());
// Middleware to parse JSON in request body
app.use(express.json());

// Define routes
app.post('/api/signup', async (req, res) => {

  try {
    const { name, email, password } = req.body;
    console.log(name,email,password);
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/signin', async (req, res) => {
  // Implement user authentication logic here
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
