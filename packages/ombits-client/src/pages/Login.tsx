import React, { useState } from 'react';
import { Button, Wrapper, Title, Text } from 'om-ui';

import { AuthService } from '../utils/auth-service';

interface Props {
  authService: AuthService;
}

export const Login: React.FC<Props> = ({ authService }) => {
  const [name, setName] = useState('');

  return (
    <Wrapper marginTop={4}>
      <form
        onSubmit={e => {
          e.preventDefault();
          authService.login({ _id: 'test', firstName: name, lastName: '' });
        }}
      >
        <Title as="h2" text="Who goes there?" marginBottom={2} />
        <Text marginBottom={2}>Your name, please:</Text>
        <input
          onChange={e => {
            setName(e.currentTarget.value);
          }}
          placeholder="First name"
          style={{ color: 'black', padding: '8px 16px', marginBottom: '16px' }}
          value={name}
        />
        <br />
        <Button type="submit" text="Login" intent="primary" />
      </form>
    </Wrapper>
  );
};
