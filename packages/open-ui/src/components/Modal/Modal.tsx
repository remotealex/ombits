import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ScrollLock from 'react-scrolllock';

import { Title } from 'components/Typography';
import { Button } from 'components/Button';
import { IntentOption } from 'interfaces/IntentOption';
import { toSentenceCase } from 'utils/strings/to-sentence-case';
import { CloseButton } from './CloseButton';
import styles from './Modal.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

interface ModalProps {
  active: boolean;
  close: () => void;
  intent?: IntentOption;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  showCloseButton?: boolean;
  title?: string;
}

export const Modal: React.FC<ModalProps> = props => {
  const {
    active,
    children,
    close,
    intent,
    primaryButton,
    secondaryButton,
    showCloseButton,
    title,
  } = props;

  // The delay and repaint gained from using this make for
  // a smoother entry & exit animation
  const [isContentVisible, setContentVisibility] = useState(false);
  const { style, play } = useAnimate({
    duration: 0.2,
    start: { opacity: 0, top: '-10px' },
    end: { opacity: 1, top: '0' },
  });

  useEffect(() => {
    play(active);
    setTimeout(() => {
      setContentVisibility(active);
    }, 200);
  }, [active, play]);

  // Build the class names
  const modalWrapperCls = classNames(styles.modalWrapper, {
    [styles.active]: isContentVisible,
    [styles[`intent${toSentenceCase(intent)}`]]: intent,
  });
  const overlayCls = classNames(styles.overlay, {
    [styles.active]: isContentVisible,
  });

  return ReactDOM.createPortal(
    <div style={style}>
      <div className={overlayCls} onClick={() => close()} />
      <ScrollLock isActive={active}>
        <div className={modalWrapperCls}>
          {showCloseButton && (
            <CloseButton close={close} intent={intent || 'primary'} />
          )}
          <div className={styles.modal}>
            {title && (
              <div className={styles.titleWrapper}>
                <Title as="h4" text={title} />
              </div>
            )}
            <div className={styles.content}>{children}</div>
            {(primaryButton || secondaryButton) && (
              <div className={styles.buttons}>
                {secondaryButton && <Button {...secondaryButton} />}
                {primaryButton && (
                  <Button intent={intent || 'primary'} {...primaryButton} />
                )}
              </div>
            )}
          </div>
        </div>
      </ScrollLock>
    </div>,
    document.getElementById('root') as Element,
  );
};
