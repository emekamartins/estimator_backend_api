const express = require('express');

const router = express.Router();
const estimatorController = require('../controller/estimator');


router.get('/', estimatorController.estimator);
router.get('/json', estimatorController.estimator);
router.get('/xml', estimatorController.estimatorXml);

module.exports = router;
