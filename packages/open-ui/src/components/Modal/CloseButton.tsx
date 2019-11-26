import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CloseButton.module.scss';

interface CloseButtonProps {
  close: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ close }) => {
  const cls = classNames(styles.closeButton, {
    // [styles.active]: isContentVisible,
  });

  return (
    <button
      className={cls}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.blur();
        close();
      }}
      title="Close"
    >
      <FontAwesomeIcon icon={faTimes} size="sm" />
    </button>
  );
};
