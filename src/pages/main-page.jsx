import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/main-page.module.scss';

export default function Main() {
  const pages = [
    { id: 1, label: 'Counter', path: '/counter' },
    { id: 2, label: 'Modal', path: '/modal' },
    { id: 3, label: 'Quiz', path: '/quiz' },
    { id: 4, label: 'User List', path: '/users' },
    { id: 5, label: 'Currency Converter', path: '/converter' },
    { id: 6, label: 'Photos', path: '/photos' },
  ];

  const createPage = (arr) =>
    arr.map(({ id, path, label }) => (
      <Link
        key={id}
        to={path}
      >
        <button className={styles.button}>{label}</button>
      </Link>
    ));

  return (
    <main className={styles.main}>
      <h1>6 Pet Projects</h1>
      <div className={styles.buttons}>{createPage(pages)}</div>
    </main>
  );
}
