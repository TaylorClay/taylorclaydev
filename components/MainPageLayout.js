import { useState } from 'react';
import NextHead from 'next/head';
import { styled } from '@compiled/react';

import NavBar from './navigation/NavBar';
import NavItem from './navigation/NavItem';
import A11yContext from '../context/A11yContext';

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    :hover {
      margin-left: 0.5rem;
    }
  }
`;

export default function MainPageLayout({
  title,
  children,
}) {
  const [a11yEnabled, toggleA11y] = useState(false);

  return (
    <div
      css={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <NextHead>
        <title>Taylor Clay | {title}</title>
        <link rel='icon' href='/favicon.ico' />
      </NextHead>

      <A11yContext.Provider value={{ a11yEnabled, toggleA11y }}>
        <NavBar toggleA11y={toggleA11y}>
          {props => (
            <>
              <NavItem pageName={'About'} {...props} />
              <NavItem href={'blog'} pageName={'Blog'} {...props} disabled />
              <NavItem href={'contact'} pageName={'Contact'} {...props} />
              <NavItem href={'resources'} pageName={'Resources'} {...props} />
              <NavItem href={'resume'} pageName={'Resume'} {...props} />
            </>
          )}
        </NavBar>

        <main css={{
          margin: '50px 5vw 0',
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          {children}
        </main>

        <Footer />
      </A11yContext.Provider>
    </div>
  );
}