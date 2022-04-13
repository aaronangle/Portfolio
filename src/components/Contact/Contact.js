import React from 'react';

import styles from './styles.module.css';

export const Contact = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.cont__overlay}>
        <h3 className={styles.heading}>Want to Connect?</h3>
        <a className={styles.link} href="https://github.com/aaronangle" target="_blank" rel="noopener noreferrer">
          Check out my GitHub
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </a>
        <a className={styles.link} href="https://www.linkedin.com/in/aaron-angle-260736194/" target="_blank" rel="noopener noreferrer">
          Message me on LinkedIn
          <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
