const express = require('express');
const { addContactSubmission, getContactSubmissions, deleteContactSubmission } = require('../controllers/contactController');

const router = express.Router();

router.post('/contact-submissions', addContactSubmission);
router.get('/contact-submissions', getContactSubmissions);
router.delete('/contact-submissions/:id', deleteContactSubmission);

module.exports = router;
