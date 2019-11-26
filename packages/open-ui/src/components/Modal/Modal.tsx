import React, { useEffect, useState } from 'react';
import { useAnimate } from 'react-simple-animate';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ScrollLock from 'react-scrolllock';

import { Title } from 'components/Typography';
import styles from './Modal.module.scss';

interface ModalProps {
  active: boolean;
  title?: string;
}

export const Modal: React.FC<ModalProps> = props => {
  const { active, children, title } = props;
  const [isMounted, setMountedState] = useState(false);
  const [isContentVisible, setContentVisibility] = useState(false);
  const { style, play } = useAnimate({
    duration: 0.2,
    start: { opacity: 0, top: '-10px' },
    end: { opacity: 1, top: '0' },
  });

  useEffect(() => {
    play(active);
    setMountedState(true);
    setContentVisibility(active);
  }, [active, play]);

  // Build the class names
  const cls = classNames(styles.modalWrapper, {
    [styles.active]: isContentVisible,
  });

  if (!active && !isMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={style}>
      <div className={styles.overlay} />
      <ScrollLock isActive={active}>
        <div className={cls}>
          <div className={styles.modal}>
            {title && <Title as="h3" text="title" />}
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </ScrollLock>
    </div>,
    document.getElementById('root') as Element,
  );
};
