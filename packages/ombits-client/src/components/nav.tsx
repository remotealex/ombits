import React from 'react';
import { Link } from 'react-navi';
import { Wrapper, AutoGrid, Card, Title } from 'om-ui';

interface Props {
  onCloseNav: () => void;
}

export const Nav: React.FC<Props> = ({ onCloseNav }) => {
  return (
    <>
      <Wrapper>
        <div className="title">
          <Title as="h4" text="Jump to" marginBottom={1} marginTop={2} />
        </div>
        <AutoGrid gutters md={3} marginBottom={2}>
          <Link href="/" className="nav-link" onClick={onCloseNav}>
            <Card>Planning mode</Card>
          </Link>
          <Link href="/focus" className="nav-link" onClick={onCloseNav}>
            <Card>Focus mode</Card>
          </Link>
          <Link href="/settings" className="nav-link" onClick={onCloseNav}>
            <Card>Settings mode</Card>
          </Link>
        </AutoGrid>
      </Wrapper>
      <style jsx>{`
        .header {
          position: relative;
          z-index: 1;
        }

        .title {
          text-align: center;
          text-transform: uppercase;
          opacity: 0.1;
        }

        .nav {
          width: 100%;
          position: absolute;
          top: 1px;
          background: #16161a;
          border-bottom: 1px solid #72757e;
          transform: translateY(-100%);
          transition: all 0.3s;
        }

        .nav--visible {
          transform: translateY(0);
        }

        .mode {
          background: #16161a;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top: none;
          border-left: 1px solid #72757e;
          border-right: 1px solid #72757e;
          border-bottom: 1px solid #72757e;
          bottom: 0;
          color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          font-size: 14px;
          left: 50%;
          outline: none;
          padding: 8px 20px;
          position: absolute;
          transform: translate(-50%, 100%);
          transition: all 0.2s ease;
        }

        .mode:hover {
          color: rgba(255, 255, 255, 0.7);
        }

        .mode:focus {
          color: rgba(255, 255, 255, 1);
        }
      `}</style>
      {/* We need to use global here as the JSX class name transform doesn't work with <Link> */}
      <style jsx global>{`
        .nav-link {
          display: inline-block;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s;
          width: 100%;
        }

        .nav-link:hover {
          opacity: 0.6;
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};
