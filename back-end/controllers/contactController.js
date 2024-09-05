const db = require('../config/db');

// Add a new contact submission
exports.addContactSubmission = (req, res) => {
  const newSubmission = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.message
  };

  const sql = 'INSERT INTO contact_submissions SET ?';
  db.query(sql, newSubmission, (err, result) => {
    if (err) {
      console.error('Error inserting contact submission:', err);
      return res.status(500).send('Database insertion error');
    }
    res.send(result);
  });
};

// Get all contact submissions
exports.getContactSubmissions = (req, res) => {
  const sql = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error querying contact submissions:', err);
      return res.status(500).send('Database query error');
    }
    res.send(result);
  });
};

// Delete a contact submission by ID
exports.deleteContactSubmission = (req, res) => {
  const sql = 'DELETE FROM contact_submissions WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error deleting contact submission:', err);
      return res.status(500).send('Database deletion error');
    }
    res.send(result);
  });
};
