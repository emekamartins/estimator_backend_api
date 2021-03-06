const express = require('express');

const router = express.Router();
const estimatorController = require('../controller/estimator');


router.post('/', estimatorController.estimator);
router.post('/json', estimatorController.estimator);
router.post('/xml', estimatorController.estimatorXml);
router.get('/logs', estimatorController.logMessage);

module.exports = router;
