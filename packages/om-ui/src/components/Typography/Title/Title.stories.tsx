import React, { Fragment } from 'react';

import { Outline } from 'components/Outline';
import { Text } from '../Text';
import { Title } from './Title';

const common = { text: 'Heading text' };

export const headings = () => (
  <Fragment>
    <Title as="h1" {...common} />
    <Title as="h2" {...common} />
    <Title as="h3" {...common} />
    <Title as="h4" {...common} />
  </Fragment>
);

export const withMargin = () => (
  <Outline>
    <Title as="h1" {...common} marginBottom={2} />
    <Text>
      Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
      eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
      Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
      cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur. Eum cibo
      adipisci consequat at, id usu tation aliquid fabulas. Ad ubique legimus
      sea, eu habemus inimicus ius. Nec in enim docendi vivendum.
    </Text>
  </Outline>
);

export default { title: 'Title' };
