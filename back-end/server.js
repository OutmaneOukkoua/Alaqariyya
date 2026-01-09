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

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
const newsRoutes = require('./routes/newsRoutes');    
const contactRoutes = require('./routes/contactRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const shareRoutes = require('./routes/shareRoutes');
const clickRoutes = require('./routes/clickRoutes');
const uploadProgressRoutes = require('./routes/uploadProgress');
const cityRoutes = require("./routes/cityRoutes");


// Use routes
app.use(authRoutes);
app.use(propertyRoutes);
app.use(newsRoutes);
app.use(contactRoutes);
app.use(visitorRoutes);
app.use(shareRoutes);
app.use(clickRoutes);
app.use('/api', uploadProgressRoutes);
app.use("/", cityRoutes);
app.use("/api", cityRoutes); // باش تخدم /api/cities أيضاً إذا بغيت


// Basic route to test server setup
app.get('/', (req, res) => {
  res.send('Welcome to backend for ALAQARIYYA');
});

// app.use('/nodeappp', router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));