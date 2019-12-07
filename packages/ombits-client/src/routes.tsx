import React from 'react';
import { mount, route } from 'navi';

import { Focus } from './pages/Focus';
import { Home } from './pages/Home';
import { Planning } from './pages/Planning';

export const routes = mount({
  '/': route({
    state: { navTabText: 'Home' },
    view: <Home />,
  }),
  '/planning/:_id': route(req => {
    return {
      state: { navTabText: 'Planning mode' },
      view: <Planning projectId={req.params._id} />,
    };
  }),
  '/focus': route({
    state: { navTabText: 'Focus mode' },
    view: <Focus />,
  }),
});
