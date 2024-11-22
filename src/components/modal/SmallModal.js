import React from "react";
import "./SmallModal.css";

function Modal({ show, onClose, children }) {
  if (!show) {
    return null; // Don't render anything if `show` is false
  }

  return (
    <div className="modal-backdrop">
      <div className="small-modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
