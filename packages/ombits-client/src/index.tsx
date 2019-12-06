import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-navi';

import { routes } from './routes';
import { App } from './app';
import { Layout } from './components/layout';

// import * as serviceWorker from './serviceWorker';

// Pass our GraphQL endpoint to uri
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const Root = (
  <ApolloProvider client={client}>
    <Router routes={routes}>
      <Layout>
        <App />
      </Layout>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
