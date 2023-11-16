const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const authController = require('../controllers/authController');

// Public routes
router.get('/', aboutController.getAbout);

// Admin routes
router.use(authController.protect);
router.post('/', aboutController.createAbout);
router.put('/:id', aboutController.updateAbout);
router.delete('/:id', aboutController.deleteAbout);

module.exports = router;