import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {

  
  return (
    <ol className={styles.wrapper}>
      {
        toasts.map( toast => (
            <li className={styles.toastWrapper} key={toast.id}>
              <Toast variant={toast.variant} toasts={toasts} setToasts={setToasts} id={toast.id}>{toast.message}</Toast>
            </li>
        ))
      }
    </ol>
  );
}

export default React.memo(ToastShelf);
