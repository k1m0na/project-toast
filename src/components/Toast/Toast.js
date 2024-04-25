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

function Toast({ messageInput, messageType, setIsVisible}) {
  
  return (

    <div className={`${styles.toast} ${styles[messageType]}`}>     
      <div className={styles.iconContainer}>
        <IconButton icon={ICONS_BY_VARIANT[messageType]} />
      </div>
      <p className={styles.content}>
        {messageInput}
      </p>
      <button 
        className={styles.closeButton}
        onClick={() => setIsVisible(false)}  
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
    
  );
}

export default Toast;
