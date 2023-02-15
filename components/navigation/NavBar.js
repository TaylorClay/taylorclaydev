import { useCallback, useEffect, useState } from 'react';
import useTheme from '@nextui-org/react/use-theme';
import '@compiled/react';
import { useTheme as useNextTheme } from 'next-themes';
import { styled } from '@compiled/react';
import {SocialIcon} from "react-social-icons";

const ThemeSwitcher = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  margin: 0 4vw 0 auto;

  @media (max-width: 600px) {
    margin: 0 6vw 0 auto;
  }
`;

// Button to toggle a11y features. The current focus is font color contrast
// Everyone knows we can't have an "edgy" color theme with good contrast (I don't make the rules)
// There are few other a11y best-practices that should be broken by default,
// so hopefully this will only ever affect font color
// const A11ySwitcher = styled.button`
//   position: absolute;
//   top: 70px;
//   left: 30px;
//   background: none;
//   color: inherit;
//   border: none;
//   padding: 0;
//   font: inherit;
//   cursor: pointer;
//   outline: inherit;
// `;

const Header = styled.header`
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  border-bottom:  ${(props) => `3px ${props.isDark ? 'double' : 'solid'} ${props.isDark ? 'transparent' : props.colors.black.value}`};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-size: 400% 400%;
  background-image: ${(props) => props.isDark ?
          `linear-gradient(${props.colors.black.value}, ${props.colors.black.value}), radial-gradient(circle at left top, ${props.colors.warning.value}, ${props.colors.error.value}, ${props.colors.primary.value}, ${props.colors.success.value})`
          : 'none'
  };
  animation: wave 15s ease infinite;

  @keyframes wave {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const SocialContainer = styled.div`
  position: relative;
  display: flex;
  margin: 1vh 0 0 1vw;
`;

const SocialIconStyle = {
  margin: '0.25rem',
}

export default function NavBar({ children, toggleA11y }) {
  const { isDark, theme } = useTheme();
  const { setTheme } = useNextTheme();
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    // `useEffect` is only ran client-side, so `window` is safe here
    setPathname(window.location.pathname)

    import('boxicons');
  }, []);

  const onThemeSwitch = useCallback(() => setTheme(isDark ? 'light' : 'dark'), [isDark])
  // const onToggleA11y = useCallback(() => toggleA11y((prevA11y) => !prevA11y), [])

  return (
    <>
      <Header isDark={isDark} colors={theme.colors}>
        {/*<A11ySwitcher onClick={onToggleA11y}>*/}
        {/*  {<box-icon name='accessibility' color={isDark ? theme.colors.success.value : theme.colors.black.value} />}*/}
        {/*</A11ySwitcher>*/}
        {children({ isDark, theme, pathname })}
      </Header>
      <SocialContainer>
        <SocialIcon url="https://www.linkedin.com/in/taylor-clay" fgColor={theme.colors.white.value} style={SocialIconStyle} />
        <SocialIcon url="https://github.com/TaylorClay" bgColor={'#6e5494'} fgColor={theme.colors.white.value} style={SocialIconStyle} />
        <SocialIcon url="https://twitter.com/TKtheDev" fgColor={theme.colors.white.value} style={SocialIconStyle} />
        <SocialIcon network="email"  bgColor={theme.colors.warning.value} fgColor={theme.colors.black.value} style={SocialIconStyle} />
        <ThemeSwitcher onClick={onThemeSwitch}>
          {<box-icon type='solid' name={isDark ? 'sun' : 'moon'} color={isDark ? theme.colors.warning.value : theme.colors.secondary.value}/>}
        </ThemeSwitcher>
      </SocialContainer>
    </>
  );
}
