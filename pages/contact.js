import { SocialIcon } from 'react-social-icons';
import useTheme from '@nextui-org/react/use-theme';
import SocialCard from '@nextui-org/react/card';
import { styled } from '@compiled/react';

import MainPageLayout from '../components/MainPageLayout';

const SocialCardStyle = {
  height: '25vh',
  width: '30vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > div': {
    padding: '0',
  },

  '@media (max-width: 550px)': {
    width: '66vw',
  },

  '@media (max-width: 768px)': {
    width: '50vw',
  }
}

const SocialIconStyle = { 
  height: '15vh',
  width: '15vh',
  padding: '0',
}

const SocialHeading = styled.h1`
  font-size: 4vh;
  margin-bottom: 1vh;
`;

// <div class="social-container" style="position:absolute;top:0;left:0;width:100%;height:100%;display: flex;justify-content: center;">
//    <svg class="social-svg" style="border-radius:50%;position:absolute;top:0;/* left:0; *//* width:100%; */height:100%;fill-rule:evenodd" viewBox="0 0 64 64">


export default function Contact() {
  const { theme } = useTheme();

  return (
    <MainPageLayout title={'Contact'}>
      <div css={{
        display: 'grid',
        gridGap: '1rem',
        margin: '0 auto',

        '@media (min-width: 768px)': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        }
      }}>
        <SocialCard css={SocialCardStyle}>
          <SocialHeading>Connect</SocialHeading>
          <SocialIcon url="https://www.linkedin.com/in/taylor-clay" fgColor={theme.colors.white.value} style={SocialIconStyle} />
        </SocialCard>

        <SocialCard css={SocialCardStyle}>
          <SocialHeading>Follow</SocialHeading>
          <SocialIcon url="https://github.com/TaylorClay" bgColor={'#6e5494'} fgColor={theme.colors.white.value} style={SocialIconStyle} />
        </SocialCard>

        <SocialCard css={SocialCardStyle}>
          <SocialHeading>Follow</SocialHeading>
          <SocialIcon url="https://twitter.com/TKtheDev" fgColor={theme.colors.white.value} style={SocialIconStyle} />
        </SocialCard>

        <SocialCard css={SocialCardStyle}>
          <SocialHeading>Email</SocialHeading>
          <SocialIcon network="email"  bgColor={theme.colors.warning.value} fgColor={theme.colors.black.value} style={SocialIconStyle} />
        </SocialCard>
      </div>
    </MainPageLayout>
  );
}
