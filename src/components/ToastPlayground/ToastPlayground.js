import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [currentVariant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [messageInput, setMessageInput] = React.useState('');
  const [toasts, setToasts] = React.useState([
    {
      variant: 'warning',
      message: 'To be or not to be',
      id: crypto.randomUUID(),
    },
  ]);
  const handleFormSubmission = event => {
    const nextToasts = [...toasts];
    event.preventDefault();
    setToasts([...nextToasts, { variant: currentVariant, message: messageInput, id: crypto.randomUUID() }]);
    setVariant(VARIANT_OPTIONS[0]);
    setMessageInput('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>


      <ToastShelf toasts={toasts} setToasts={setToasts} />

      <form
        className={styles.controlsWrapper}
        onSubmit={handleFormSubmission}
      >
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
                  checked={option === currentVariant}
                  onChange={event => {
                    setVariant(event.target.value);
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
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
