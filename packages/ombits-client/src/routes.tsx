import React from 'react';
import { mount, route, compose, withView, map, redirect } from 'navi';

import { Focus } from './pages/Focus';
import { Home } from './pages/Home';
import { Planning } from './pages/Planning';
import { Layout } from './components/Layout';
import { Context, withAuth } from './utils/with-auth';

export const routes = compose(
  withView((_, context: Context) => (
    <Layout
      currentUser={context.currentUser}
      onLogout={() => context.authService.logout()}
    />
  )),
  mount({
    '/login': map(
      async (_, context: Context) =>
        context.currentUser
          ? redirect('/')
          : route({
              title: 'Login | Ombits',
              getView: async () => {
                const { Login } = await import('./pages/Login');
                return <Login authService={context.authService} />;
              },
            }),
    ),
    '/': withAuth(route({ view: <Home /> })),
    '/planning/:_id': withAuth(
      route(req => {
        return {
          title: 'Planning | Ombits',
          state: {
            isPlanningMode: true,
            navTabText: 'Planning mode',
            projectId: req.params._id,
          },
          view: <Planning projectId={req.params._id} />,
        };
      }),
    ),
    '/focus/:_id': withAuth(
      route(req => {
        return {
          title: 'Focus | Ombits',
          state: {
            isFocusMode: true,
            navTabText: 'Focus mode',
            projectId: req.params._id,
          },
          view: <Focus projectId={req.params._id} />,
        };
      }),
    ),
  }),
);
