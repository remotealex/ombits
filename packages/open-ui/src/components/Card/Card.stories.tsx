import React from 'react';

import { Card } from './Card';
import { Text } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';
import styles from 'styles/global.module.scss';

export const basic = () => (
  <div className={styles.bg} style={{ padding: '50px' }}>
    <Wrapper>
      <Card>
        <Text>
          Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
          eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
          Docendi accommodare mei an. Ea populo posidonium nec, eam natum
          invenire cu. Usu in utamur conclusionemque, eam ut mandamus
          efficiantur.
        </Text>
      </Card>
    </Wrapper>
  </div>
);

export const withTitle = () => (
  <div className={styles.bg} style={{ padding: '50px' }}>
    <Wrapper>
      <Card title="Title for card">
        <Text>
          Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
          eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
          Docendi accommodare mei an. Ea populo posidonium nec, eam natum
          invenire cu. Usu in utamur conclusionemque, eam ut mandamus
          efficiantur.
        </Text>
      </Card>
    </Wrapper>
  </div>
);

export default { title: 'Card' };
