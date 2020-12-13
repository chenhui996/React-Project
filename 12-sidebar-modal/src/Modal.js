import React, {useContext} from 'react'
import { AppContent } from "./context";
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  const data = useContext(AppContent);
  const { isModalOpen, closeModal } = data;
  // console.log(isModalOpen);
  return <div className={`modal-overlay ${isModalOpen && 'show-modal'}`}>
    <div className="modal-container">
      <h3>Modal Content</h3>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  </div>
}

export default Modal
