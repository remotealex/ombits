import React, { useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router, View, NotFoundBoundary } from 'react-navi';

import { routes } from './routes';
import { AuthService } from './utils/auth-service';

// import * as serviceWorker from './serviceWorker';

// Pass our GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const authService = new AuthService();

const Root = () => {
  // Use state to store the current user
  const [currentUser, setCurrentUser] = useState(authService.currentUser);

  // Subscribe that state to the value emitted by the auth service
  useEffect(() => authService.subscribe(setCurrentUser), []);

  return (
    <ApolloProvider client={client}>
      <Router routes={routes} context={{ currentUser, authService }}>
        <NotFoundBoundary render={() => <h1>404 - Not Found</h1>}>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </NotFoundBoundary>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
