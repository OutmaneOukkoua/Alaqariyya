require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const newsRoutes = require('./routes/newsRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Use routes
router.use(authRoutes);
router.use(propertyRoutes);
router.use(newsRoutes); 
router.use(contactRoutes);

// Basic route to test server setup
router.get('/', (req, res) => {
  res.send('Welcome to backend for ALAQARIYYA');
});

app.use('/nodeapp', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));