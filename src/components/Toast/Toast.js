import React from 'react';
import IconButton from '../IconButton';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, toasts, setToasts, id, children }) {

  const nextToasts = toasts.filter( toast => toast.id !== id);
    
  return (

    <div className={`${styles.toast} ${styles[variant]}`}>     
      <div className={styles.iconContainer}>
        <IconButton icon={ICONS_BY_VARIANT[variant]} />
      </div>
      <p className={styles.content}>
        {children}
      </p>
      <button 
        className={styles.closeButton}
      >
        <X size={24} onClick={ () => setToasts(nextToasts) } />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
    
  );
}

export default Toast;
