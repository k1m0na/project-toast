import React from 'react';

import styles from './Button.module.css';

function Button({ className = '', setIsVisible, ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => setIsVisible(true)}
      {...delegated}
    />
  );
}

export default Button;
