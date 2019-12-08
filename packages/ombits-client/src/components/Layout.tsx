import React from 'react';
import { useCurrentRoute, useViewElement } from 'react-navi';
import { animated, useTransition } from 'react-spring';
import 'nprogress/nprogress.css';

import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
  currentUser: any;
  onLogout: () => void;
}

export const Layout: React.FC<Props> = props => {
  const { currentUser, onLogout } = props;
  const currentRoute = useCurrentRoute();
  const viewElement = useViewElement();
  const transitions = useTransition(viewElement, currentRoute.url.href, {
    from: { opacity: 0, transform: 'scale(0.9) translateY(-50%)' },
    enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
    leave: { opacity: 0, transform: 'scale(0.9) translateY(50%)' },
  });

  return (
    <div className="layout">
      <Header />
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
      {!!currentUser && <Footer onLogout={onLogout} />}

      <style jsx>{`
        .layout {
          height: 100vh;
          min-height: 500px;
          position: relative;
        }
      `}</style>
    </div>
  );
};
