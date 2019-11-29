import React from 'react';

import { Outline } from 'components/Outline';
import { Text } from './Text';
import { Wrapper } from 'components/Wrapper';

const common = {
  text:
    'Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem. Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur. Eum cibo adipisci consequat at, id usu tation aliquid fabulas. Ad ubique legimus sea, eu habemus inimicus ius. Nec in enim docendi vivendum. Te vim graeci abhorreant. At nec iudico iracundia, euripidis prodesset et pro. Liber lucilius pericula ne sea, ius suscipit explicari reprehendunt et, no ius labitur forensibus.',
};

export const paragraph = () => (
  <Wrapper marginTop={2}>
    <Text as="p" {...common} />
  </Wrapper>
);

export const span = () => (
  <Wrapper marginTop={2}>
    <Text as="span" {...common} />
  </Wrapper>
);

export const withMargin = () => (
  <Wrapper marginTop={2}>
    <Outline>
      <Text as="p" {...common} marginBottom={4} />
    </Outline>
  </Wrapper>
);

export default { title: 'Text' };
