import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ScrollLock from 'react-scrolllock';

import { Title } from 'components/Typography';
import { CloseButton } from './CloseButton';
import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  close: () => void;
  showCloseButton?: boolean;
  title?: string;
}

export const Modal: React.FC<ModalProps> = props => {
  const { active, showCloseButton, children, title, close } = props;
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
  });
  const overlayCls = classNames(styles.overlay, {
    [styles.active]: isContentVisible,
  });

  return ReactDOM.createPortal(
    <div style={style}>
      <div className={overlayCls} onClick={() => close()} />
      <ScrollLock isActive={active}>
        <div className={modalWrapperCls}>
          <div className={styles.modal}>
            {showCloseButton && <CloseButton close={close} />}
            {title && <Title as="h3" text="title" />}
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </ScrollLock>
    </div>,
    document.getElementById('root') as Element,
  );
};
