import React from 'react';
import styles from './CardDetailModal.module.css';

export const CardDetailModal = ({ children }) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
