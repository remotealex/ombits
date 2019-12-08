import React from 'react';

import { Card } from './Card';
import { Text } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';

export const basic = () => (
  <Wrapper>
    <Card>
      <Text>
        Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
        eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
        Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
        cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
      </Text>
    </Card>
  </Wrapper>
);

export const withTitle = () => (
  <Wrapper>
    <Card title="Title for card">
      <Text>
        Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
        eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
        Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
        cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
      </Text>
    </Card>
  </Wrapper>
);

export const withTextAlign = () => (
  <Wrapper>
    <Card title="Title for card" textAlign="center">
      <Text>
        Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
        eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
        Docendi accommodare mei an. Ea populo posidonium nec, eam natum invenire
        cu. Usu in utamur conclusionemque, eam ut mandamus efficiantur.
      </Text>
    </Card>
  </Wrapper>
);

export default { title: 'Card' };
