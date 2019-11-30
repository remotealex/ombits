import React from 'react';
import { mount, route } from 'navi';

import { Focus } from './pages/focus';
import { Planning } from './pages/planning';

export const routes = mount({
  '/': route({
    getState: () => ({ mode: 'Planning' }),
    view: <Planning />,
  }),
  '/focus': route({
    getState: () => ({ mode: 'Focus' }),
    view: <Focus />,
  }),
});
