import React from 'react';
import { Title, Wrapper, AutoGrid, Card } from 'om-ui';
import { useNavigation } from 'react-navi';
import { useQuery } from '@apollo/react-hooks';

import { GET_PROJECTS } from '../queries/projects';

export const Home = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Your bits" marginBottom={3} />
        <AutoGrid gutters sm={2} md={3} stretch>
          {data.projects.map((project: any) => (
            <Card
              key={project._id}
              title={project.title}
              onClick={() => {
                navigation.navigate(`/planning/${project._id}`);
              }}
            >
              0 bits
            </Card>
          ))}
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
