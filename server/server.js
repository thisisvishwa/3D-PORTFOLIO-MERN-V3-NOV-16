```javascript
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('./utils/logger');
const errorHandler = require('./utils/errorHandler');
const config = require('./config/config');

const projectRoutes = require('./routes/projectRoutes');
const skillRoutes = require('./routes/skillRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(config.db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => winston.info('Connected to MongoDB...'))
  .catch(err => winston.error('Could not connect to MongoDB...', err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny', { stream: winston.stream }));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/auth', authRoutes);

// Error handling
app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
```