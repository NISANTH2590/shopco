'use client'
import styles from "@/styles/components/modal.module.scss"
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children, title }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
        }
    }, [isOpen]);

    return (
        <div className={styles.modalOverlay} onClick={() => onClose(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{title}</h2>
                    <button className={styles.closeBtn} onClick={() => onClose(false)}>X</button>
                </div>
                <div className={styles.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;