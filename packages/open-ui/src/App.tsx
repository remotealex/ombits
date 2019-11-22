import React from 'react';

import { Title, Text } from 'components/Typography';

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Title as="h1" text="Open UI" marginBottom={4} marginTop={2} />
      <Text>Welcome to Open UI :)</Text>
    </div>
  );
};

export default App;
