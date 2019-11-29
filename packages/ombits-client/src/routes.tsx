import React from 'react';
import { mount, route } from 'navi';

import { Focus } from './pages/focus';

export const routes = mount({
  '/': route({
    view: <Focus />,
  }),
});
