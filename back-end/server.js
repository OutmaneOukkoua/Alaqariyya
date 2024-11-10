require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser'); 

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

router.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const newsRoutes = require('./routes/newsRoutes');
const contactRoutes = require('./routes/contactRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const shareRoutes = require('./routes/shareRoutes');
const clickRoutes = require('./routes/clickRoutes');



// Use routes
router.use(authRoutes);
router.use(propertyRoutes);
router.use(newsRoutes); 
router.use(contactRoutes);
router.use(visitorRoutes);
router.use(shareRoutes);
router.use(clickRoutes);


// Basic route to test server setup
router.get('/', (req, res) => {
  res.send('Welcome to backend for ALAQARIYYA');
});

app.use('/nodeapp', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));