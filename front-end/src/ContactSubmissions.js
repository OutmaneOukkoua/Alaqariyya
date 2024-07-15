
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ContactSubmissions.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_SERVER;
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`${API_URL}/contact-submissions`)
      .then(response => setSubmissions(response.data))
      .catch(error => console.error('Error fetching contact submissions:', error));
  }, [API_URL]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/contact-submissions/${id}`);
      setSubmissions(submissions.filter(submission => submission.id !== id));
    } catch (error) {
      console.error('Error deleting submission:', error);
    }
  };

  return (
    <div className="contact-submissions-container">
      <h1>Contact Submissions</h1>
      <button className="go-backkk" onClick={() => navigate(-1)}>
         Go Back
      </button>
      <table className="submissions-table">
      <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.phone}</td>
              <td>{submission.subject}</td>
              <td>{submission.message}</td>
              <td>
                <button className="delete-button" onClick={() => handleDelete(submission.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactSubmissions;
