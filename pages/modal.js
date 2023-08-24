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
        <div className={modalContentClassName} onClick={(e) => e.stopPropagation()} style={{ backgroundImage: `url(${project.bgImage})`, width: 2000, height: 1000, backgroundSize: 'cover' }}>
            <button className={closeButtonClassName} onClick={onClose}>
                Close
            </button>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'teal' }}>
                {project.link}
            </a>
        </div>
    </div>
);


};

export default Modal;
