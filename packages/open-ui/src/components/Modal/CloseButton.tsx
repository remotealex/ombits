import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './CloseButton.module.scss';
import { IntentOption } from 'interfaces/IntentOption';
import { toSentenceCase } from 'utils/strings/to-sentence-case';

interface CloseButtonProps {
  close: () => void;
  intent: IntentOption;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ close, intent }) => {
  const cls = classNames(styles.closeButton, {
    [styles[`intent${toSentenceCase(intent)}`]]: intent,
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
