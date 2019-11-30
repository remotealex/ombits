import React from 'react';
import { mount, route } from 'navi';

import { Focus } from './pages/focus';
import { Home } from './pages/home';
import { Planning } from './pages/planning';

export const routes = mount({
  '/': route({
    getState: () => ({ navTabText: 'Home' }),
    view: <Home />,
  }),
  '/planning': route({
    getState: () => ({ navTabText: 'Planning mode' }),
    view: <Planning />,
  }),
  '/focus': route({
    getState: () => ({ navTabText: 'Focus mode' }),
    view: <Focus />,
  }),
});
