import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [messageType, setMessageType] = React.useState(VARIANT_OPTIONS[0]);
  const [messageInput, setMessageInput] = React.useState('To be or not to be');
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isVisible && (
        <Toast
          messageType={messageType}
          messageInput={messageInput}
          setIsVisible={setIsVisible}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="messageInput"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="messageInput"
              className={styles.messageInput}
              value={messageInput}
              onChange={event => {
                setMessageInput(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => (

              <label htmlFor={option} key={crypto.randomUUID()}>
                <input
                  id={option}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === messageType}
                  onChange={event => {
                    setMessageType(event.target.value);
                  }}
                />
                {option}
              </label>
            ))}

          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button setIsVisible={setIsVisible}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
