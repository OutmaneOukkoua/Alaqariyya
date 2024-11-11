import React from 'react';
import './ConfirmDialog.css';

function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <p>{message}</p>
        <div className="confirm-dialog-buttons">
          <button onClick={onConfirm} className="confirm-dialog-button confirm">Logout</button>
          <button onClick={onCancel} className="confirm-dialog-button cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
