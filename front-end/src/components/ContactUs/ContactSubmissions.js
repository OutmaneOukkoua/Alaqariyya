import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './ContactSubmissions.css';
import { toast, ToastContainer } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ContactSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const API_URL = process.env.REACT_APP_SERVER;

  // ✅ Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    axios
      .get(`${API_URL}/contact-submissions`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setSubmissions(data);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error('Error fetching contact submissions:', error);
        setSubmissions([]);
      });
  }, [API_URL]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Do you want to remove this item?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`${API_URL}/contact-submissions/${id}`);

      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      toast.success('Submission deleted successfully!', { icon: '🗑️' });

      // ✅ إذا مسحتي آخر عنصر فالصفحة، رجع صفحة لور
      setTimeout(() => {
        setCurrentPage((prevPage) => {
          const newCount = submissions.length - 1;
          const newTotalPages = Math.max(1, Math.ceil(newCount / ITEMS_PER_PAGE));
          return Math.min(prevPage, newTotalPages);
        });
      }, 0);
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Error deleting submission. Please try again.');
    }
  };

  // ✅ Pagination calculations
  const totalPages = Math.max(1, Math.ceil((submissions?.length || 0) / ITEMS_PER_PAGE));

  const paginatedSubmissions = useMemo(() => {
    const safe = Array.isArray(submissions) ? submissions : [];
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return safe.slice(start, end);
  }, [submissions, currentPage]);

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="contact-submissions-container">
      <ToastContainer />
      <h1>Contact Submissions</h1>

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
          {paginatedSubmissions.length > 0 ? (
            paginatedSubmissions.map((submission) => (
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
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>
                No submissions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ✅ Pagination UI */}
      {submissions.length > ITEMS_PER_PAGE && (
        <div className="pagination">
          <button onClick={goPrev} disabled={currentPage === 1}>
            Previous
          </button>

          <span className="page-indicator">
            Page {currentPage} / {totalPages}
          </span>

          <button onClick={goNext} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ContactSubmissions;
