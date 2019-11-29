import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ScrollLock from 'react-scrolllock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faBomb,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

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
  hideCloseButton?: boolean;
  hideIcon?: boolean;
  intent?: IntentOption;
  onClose: () => void;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  title?: string;
}

export const Modal: React.FC<ModalProps> = props => {
  const {
    active,
    children,
    hideCloseButton,
    hideIcon,
    intent,
    onClose,
    primaryButton,
    secondaryButton,
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

  let icon = faInfoCircle;
  switch (intent) {
    case 'success':
      icon = faCheckCircle;
      break;
    case 'error':
      icon = faBomb;
      break;
    case 'warning':
      icon = faExclamationTriangle;
      break;
  }

  return ReactDOM.createPortal(
    <div style={style}>
      <div className={overlayCls} onClick={() => onClose()} />
      <ScrollLock isActive={active}>
        <div className={modalWrapperCls}>
          {!hideCloseButton && (
            <CloseButton onClose={onClose} intent={intent || 'primary'} />
          )}
          <div className={styles.modal}>
            {title && (
              <div className={styles.titleWrapper}>
                {!hideIcon && (
                  <FontAwesomeIcon
                    icon={icon}
                    size="lg"
                    style={{ marginRight: '16px' }}
                  />
                )}
                <Title as="h4" text={title} inlineBlock />
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
