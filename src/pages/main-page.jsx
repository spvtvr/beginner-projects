import React from 'react';
import styles from '../styles/pages/main-page.module.scss';

export default function MainPage() {
  return (
    <main className={styles.main}>
      <h1>6 Pet Projects</h1>
      <div className={styles.buttons}>
        <button className={styles.button}>Counter</button>
        <button className={styles.button}>Modal</button>
        <button className={styles.button}>Quiz</button>
        <button className={styles.button}>User List</button>
        <button className={styles.button}>Currency Converter</button>
        <button className={styles.button}>Photos</button>
      </div>
    </main>
  );
}
