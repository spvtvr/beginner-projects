import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/not-found-page.module.scss';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <span>Page is not found</span>
      <Link to={'/'}>
        <button className={styles.button}>Go to main</button>
      </Link>
    </div>
  )
}
