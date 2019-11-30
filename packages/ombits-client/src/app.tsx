import React from 'react';
import { useCurrentRoute, useViewElement } from 'react-navi';
import { animated, useTransition } from 'react-spring';

export const App = () => {
  const currentRoute = useCurrentRoute();
  const viewElement = useViewElement();
  const transitions = useTransition(viewElement, currentRoute.url.href, {
    from: { opacity: 0, transform: 'scale(0.9) translateY(-50%)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scale(0.9) translateY(50%)' },
  });

  return (
    <>
      {transitions.map(({ item, props: style, key }) => (
        <animated.div
          key={key}
          style={{
            ...style,
            position: 'absolute',
            top: 0,
            width: '100%',
            bottom: 0,
          }}
        >
          {item}
        </animated.div>
      ))}
    </>
  );
};
