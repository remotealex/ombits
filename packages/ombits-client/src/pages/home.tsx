import React from 'react';
import { Title, Wrapper, AutoGrid, Card } from 'om-ui';
import { useNavigation } from 'react-navi';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Your bits" marginBottom={3} />
        <AutoGrid gutters sm={2} md={3} stretch>
          <Card
            title="Morning routine"
            onClick={() => {
              navigation.navigate('/planning');
            }}
          >
            0 bits
          </Card>
          <Card
            textAlign="center"
            onClick={() => {
              alert('foo');
            }}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div>+</div>
          </Card>
        </AutoGrid>
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }

        div {
          font-size: 40px;
        }
      `}</style>
    </section>
  );
};
