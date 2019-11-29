import React from 'react';

import { Grid, Col } from './';
import { Wrapper } from 'components/Wrapper';
import { Text } from 'components/Typography';

const styles = {
  background: 'blue',
  padding: '10px',
  color: 'white',
  border: '1px dashed white',
};

export const cols = () => {
  return (
    <Wrapper>
      <Grid>
        <Col base={6}>
          <div style={styles}>col-6</div>
        </Col>
        <Col base={3}>
          <div style={styles}>col-3</div>
        </Col>
        <Col base={3}>
          <div style={styles}>col-3</div>
        </Col>
        <Col base={12}>
          <div style={styles}>col-12</div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export const responsive = () => {
  return (
    <Wrapper marginTop={1}>
      <Text
        marginBottom={1}
        text="It's easy to control columns for different screen sizes. You can also hide columns by passing `0`."
      />
      <Grid>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col sm={0} md={3}>
          <div style={styles}>base-12, sm-0, md-3</div>
        </Col>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col base={6} sm={6} md={3}>
          <div style={styles}>base-6, sm-6, md-3</div>
        </Col>
        <Col base={6} sm={5} md={7}>
          <div style={styles}>base-6, sm-5, md-7</div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export const gutters = () => {
  return (
    <Wrapper>
      <Grid gutters>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export const spacers = () => {
  return (
    <Wrapper marginTop={1}>
      <Text
        marginBottom={1}
        text="We can add <Col> tags with no content as 'spacers'. Spacers can be responsive too and be hidden passing `0`. Resize the window to see this in action."
      />
      <Grid>
        <Col sm={6} md={3}>
          <div style={styles}>base-12, sm-6, md-3</div>
        </Col>
        <Col base={0} md={3} />
        <Col sm={6}>
          <div style={styles}>base-12, sm-6</div>
        </Col>
      </Grid>
    </Wrapper>
  );
};

export default { title: 'Grid' };
