import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { Modal } from './Modal';
import { Text } from 'components/Typography';

const common = { onClose: () => {} };

export const base = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Text>You can see the scroll lock working here...</Text>
    <Modal {...common} active={boolean('Open', false)} hideCloseButton>
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const withCloseButton = () => (
  <Modal {...common} active={true}>
    Hello world
  </Modal>
);

export const withTitle = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal {...common} active={true} title="This is a title!!">
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const withPrimaryButton = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      active={true}
      hideCloseButton
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const withSecondaryButton = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      active={true}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const withTwoButtons = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      active={true}
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const success = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      active={true}
      title="Success!!"
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
      intent="success"
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const error = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      title="Ooopps!!"
      active={true}
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
      intent="error"
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const warning = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      title="Warning!!"
      active={true}
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
      intent="warning"
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export const withLotsOfText = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Modal
      {...common}
      active={true}
      primaryButton={{
        onClick: () => {},
        text: 'Confirm',
      }}
      secondaryButton={{
        onClick: () => {},
        text: 'Close',
      }}
    >
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur. Lorem
      ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum Docendi
      accommodare mei an. Ea populo posidonium nec, eam natum invenire cu. Usu
      in utamur conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor
      sit amet, ex omnium epicuri scribentur vim, minimum Docendi accommodare
      mei an. Ea populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur. Lorem ipsum dolor sit amet,
      ex omnium epicuri scribentur vim, minimum Docendi accommodare mei an. Ea
      populo posidonium nec, eam natum invenire cu. Usu in utamur
      conclusionemque, eam ut mandamus efficiantur.
    </Modal>
  </div>
);

export default { title: 'Modal', decorators: [withKnobs] };
