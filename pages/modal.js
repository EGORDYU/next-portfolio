import styles from '../styles/Modal.module.css';

const Modal = ({ isOpen, onClose, project, theme }) => {
  if (!isOpen || !project) {
    return null;
  }

  const modalOverlayClassName = `${styles.modalOverlay} ${theme === 'dark' ? styles.dark : ''}`;
  const modalContentClassName = `${styles.modalContent} ${theme === 'dark' ? styles.dark : ''}`;
  const closeButtonClassName = `${styles.closeButton} ${theme === 'dark' ? styles.dark : ''}`;

  return (
    <div className={modalOverlayClassName} onClick={onClose}>
        <div className={modalContentClassName} onClick={(e) => e.stopPropagation()} style={{ backgroundImage: `url(${project.bgImage})`, width: '900px', height: '500px', backgroundSize: 'cover' }}>
            <button className={closeButtonClassName} onClick={onClose}>
                Close
            </button>
            <div style={{ textAlign: 'center' }}> {/* Added a wrapper div for text alignment */}
              <h2 className={styles.textWithOutline}>{project.title}</h2>
              <p className={styles.textWithOutline}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.textWithOutline} style={{ textDecoration: 'underline', color: 'white' }}>
              →  Visit Project ←
              </a>
            </div>
        </div>
    </div>
  );
};

export default Modal;
