import React, { Fragment } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { Modal } from './Modal';
import { Text } from 'components/Typography';

const common = {};

export const base = () => (
  <Fragment>
    <div
      style={{
        backgroundImage:
          'linear-gradient(45deg, #98CD8D 25%, #F6F0CF 25%, #F6F0CF 50%, #98CD8D 50%, #98CD8D 75%, #F6F0CF 75%, #F6F0CF 100%)',
        backgroundSize: '56.57px 56.57px',
        height: '200vh',
        width: '100%',
      }}
    />
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
  </Fragment>
);

export default { title: 'Modal', decorators: [withKnobs] };
