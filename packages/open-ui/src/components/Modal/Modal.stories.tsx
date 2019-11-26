import React, { Fragment } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { Modal } from './Modal';
import { Text } from 'components/Typography';

const common = { close: () => {} };

export const base = () => (
  <div style={{ height: '200vh', width: '100%' }}>
    <Text>You can see the scroll lock working here...</Text>
    <Modal {...common} active={boolean('Open', false)}>
      <Text>
        Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
        eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
        Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
        cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur. Eum cibo
        adipisci consequat at, id usu tation aliquid fabulas. Ad ubique legimus
        sea, eu habemus inimicus ius. Nec in enim docendi vivendum. Te vim
        graeci abhorreant. At nec iudico iracundia, euripidis prodesset et pro.
        Liber lucilius pericula ne sea, ius suscipit explicari reprehendunt et,
        no ius labitur forensibus.
      </Text>
    </Modal>
  </div>
);

export const withCloseButton = () => (
  <Modal {...common} active={true} showCloseButton>
    Hello world
  </Modal>
);

export default { title: 'Modal', decorators: [withKnobs] };
