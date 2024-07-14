const express = require('express');
const router = express.Router();
const aiOpsController = require('../controllers/aiOpsController');

// Example API route
router.get('/data', aiOpsController.getData);

module.exports = router;
