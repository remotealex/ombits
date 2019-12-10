import React from 'react';
import { Title, Wrapper, AutoGrid, Card } from 'om-ui';
import { useNavigation, Link } from 'react-navi';
import { useQuery } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

import { GET_PROJECTS, GET_PROJECT } from '../queries/projects';

export const Home = () => {
  const navigation = useNavigation();
  const { loading, error, data, client } = useQuery(GET_PROJECTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <section>
      <Wrapper>
        <Title as="h2" text="Your bits" marginBottom={3} />
        <AutoGrid gutters sm={2} md={3} stretch>
          {data.projects.map((project: any) => (
            <div className="card-wrapper" key={project._id}>
              <Card
                title={project.title}
                onMouseOver={() => {
                  // Pre-fetch project
                  client.query({
                    query: GET_PROJECT,
                    variables: { _id: project._id },
                  });
                }}
                onClick={() => {
                  navigation.navigate(`/planning/${project._id}`);
                }}
              >
                {project.bits.length} bits
              </Card>
              <Link
                className="focus-link"
                title="Enter focus mode"
                href={`/focus/${project._id}`}
              >
                <FontAwesomeIcon icon={faBullseye} size="2x" />
              </Link>
            </div>
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
            <div className="plus">+</div>
          </Card>
        </AutoGrid>
      </Wrapper>

      <style jsx>{`
        section {
          padding-top: 80px;
        }

        .plus {
          font-size: 40px;
        }

        .card-wrapper {
          align-items: center;
          display: flex;
          justify-content: center;
          flex: 1;
        }
      `}</style>
      <style jsx global>{`
        .focus-link {
          background: rgba(36, 38, 41, 0.65);
          border-bottom-right-radius: 5px;
          border-top-right-radius: 5px;
          display: inline-block;
          padding: 12px;
        }

        .focus-link path {
          fill: rgba(255, 255, 255, 0.8);
          transition: fill 0.3s;
        }

        .focus-link:hover path {
          fill: rgba(255, 255, 255, 1);
        }
      `}</style>
    </section>
  );
};
