import React from 'react';
import { gql } from 'apollo-boost';
// import { Query } from "react-apollo";
import { useQuery, useMutation } from '@apollo/react-hooks';
import { AutoGrid, Button } from 'open-ui';

const GET_USERS = gql`
  query {
    userses {
      id
      name
    }
  }
`;

const UPDATE_NAME = gql`
  mutation UpdateName($name: String) {
    updateUsers(
      data: { name: $name }
      where: { id: "ck3a2te5w47iz0b20zogv7c8n" }
    ) {
      id
      name
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const [updateName] = useMutation(UPDATE_NAME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div>
      {data.userses.map((u: any, idx: number) => (
        <div key={idx}>
          {u.name}
          <br />
          <input
            onChange={e => {
              updateName({ variables: { name: e.target.value } });
            }}
          />
        </div>
      ))}
      <Button text="Test" />
      <br />
      <AutoGrid>
        <div
          style={{
            background: 'blue',
            height: '20px',
            border: '1px solid green',
            width: '100%',
          }}
        />
        <div
          style={{
            background: 'blue',
            height: '20px',
            border: '1px solid green',
            width: '100%',
          }}
        />
        <div
          style={{
            background: 'blue',
            height: '20px',
            border: '1px solid green',
            width: '100%',
          }}
        />
      </AutoGrid>
    </div>
  );
};

export default App;
