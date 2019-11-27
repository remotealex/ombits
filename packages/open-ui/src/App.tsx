import React, { Fragment, useState } from 'react';

import { Title, Text } from 'components/Typography';
import { Navigation, NavigationItem } from 'components/Navigation';
import { Wrapper } from 'components/Wrapper';
import { Grid, Col } from 'components/Grid';
import { Card } from 'components/Card';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';

const App: React.FC = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  return (
    <Fragment>
      <Navigation
        logo={
          <div
            style={{
              background: '#7f5af0',
              height: '25px',
              transform: 'rotate(45deg)',
              width: '25px',
            }}
          />
        }
      >
        <NavigationItem text="Home" />
      </Navigation>
      <Wrapper>
        <Title as="h1" text="Open UI" marginBottom={2} marginTop={2} />
        <Text marginBottom={2}>
          Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim, minimum
          eligendi eum id. Usu soleat regione cu, cum cu veri nullam platonem.
          Docendi accommodare mei an. Ea populo posidonium nec, eam natum
          invenire cu. Usu in utamur conclusionemque, eam ut mandamus
          efficiantur.
        </Text>
        <Button
          intent="primary"
          marginBottom={3}
          onClick={() => setModalVisibility(true)}
          text="Click here to view a popup"
        />
        <Title as="h2" text="No custom CSS" marginBottom={2} />
        <Grid gutters>
          <Col sm={6}>
            <Card>
              <Text>
                Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim,
                minimum eligendi eum id. Usu soleat regione cu, cum cu veri
                nullam platonem. Docendi accommodare mei an. Ea populo
                posidonium nec, eam natum invenire cu. Usu in utamur
                conclusionemque, eam ut mandamus efficiantur.
              </Text>
            </Card>
          </Col>
          <Col sm={6}>
            <Card>
              <Text>
                Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim,
                minimum eligendi eum id. Usu soleat regione cu, cum cu veri
                nullam platonem. Docendi accommodare mei an. Ea populo
                posidonium nec, eam natum invenire cu. Usu in utamur
                conclusionemque, eam ut mandamus efficiantur.
              </Text>
            </Card>
          </Col>
          <Col sm={8}>
            <Card>
              <Text>
                Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim,
                minimum eligendi eum id. Usu soleat regione cu, cum cu veri
                nullam platonem. Docendi accommodare mei an. Ea populo
                posidonium nec, eam natum invenire cu. Usu in utamur
                conclusionemque, eam ut mandamus efficiantur.
              </Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Text>
                Lorem ipsum dolor sit amet, ex omnium epicuri scribentur vim,
                minimum eligendi eum id. Usu soleat regione cu, cum cu veri. Usu
                soleat regione cu, cum cu.
              </Text>
            </Card>
          </Col>
        </Grid>
      </Wrapper>
      <Modal
        active={isModalVisible}
        onClose={() => setModalVisibility(false)}
        title="This is a modal popup"
        primaryButton={{
          onClick: () => {
            alert("You're awesome!");
          },
          text: 'Click me...',
        }}
        secondaryButton={{
          onClick: () => {
            setModalVisibility(false);
          },
          text: 'Cancel',
        }}
      >
        <Text>It can have anything you want in here!</Text>
      </Modal>
    </Fragment>
  );
};

export default App;
