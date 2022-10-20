import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pages/modal-page.module.scss';

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setOpen(true)}>✨ Click to open modal</button>
      {open && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <svg
              height="200"
              viewBox="0 0 200 200"
              width="200"
              onClick={() => setOpen(false)}
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            Good job! Modal is opened. Click "X" to close.
          </div>
        </div>
      )}
      <Link to="/"><button>Back</button></Link>
    </div>
  );
}
