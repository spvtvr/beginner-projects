import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/counter-page.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const onClickMinus = () => setCount(count - 1);
  const onClickPlus = () => setCount(count + 1);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.count}>{count}</h1>
      <div>
        <button onClick={onClickMinus}>Minus</button>
        <button onClick={onClickPlus}>Plus</button>
      </div>
      <Link to="/"><button className={styles.back}>Back</button></Link>
    </div>
  )
}
