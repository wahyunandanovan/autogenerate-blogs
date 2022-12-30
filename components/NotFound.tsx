import React from 'react';
import styles from '../styles/components/not-found.module.scss';

function NotFound() {
  return (
    <div className={styles.container}>
      <img className={styles.image} alt='not found image' aria-label='not found image' src="/images/not-found.svg" />
    </div>
  );
}

export default NotFound;
