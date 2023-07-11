import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) {
      return null;
    }
  
    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Add any additional project details you want to display */}
        </div>
      </div>
    );
  };
export default Modal;