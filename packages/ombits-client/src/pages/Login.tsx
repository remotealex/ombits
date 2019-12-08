import React, { useState } from 'react';
import { Button, Wrapper, Title, Text } from 'om-ui';

import { AuthService } from '../utils/auth-service';

interface Props {
  authService: AuthService;
}

export const Login: React.FC<Props> = ({ authService }) => {
  const [userId, setUserId] = useState('5deab9ed470df97d3f67f206');

  return (
    <Wrapper marginTop={4}>
      <form
        onSubmit={e => {
          e.preventDefault();
          authService.login({
            _id: userId,
            firstName: 'Alex',
            lastName: 'Price',
          });
        }}
      >
        <Title as="h2" text="Who goes there?" marginBottom={2} />
        <Text marginBottom={2}>Your userId, please:</Text>
        <input
          onChange={e => {
            setUserId(e.currentTarget.value);
          }}
          placeholder="5deab9ed470df97d3f67f206"
          style={{ color: 'black', padding: '8px 16px', marginBottom: '16px' }}
          value={userId}
        />
        <br />
        <Button type="submit" text="Login" intent="primary" />
      </form>
    </Wrapper>
  );
};
