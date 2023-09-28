// import '@compiled/react';
// import useTheme from '@nextui-org/react/use-theme';
// import { Text } from "@nextui-org/react";
// import { styled } from '@compiled/react';
//
// import MainPageLayout from 'components/MainPageLayout';
//
// const NameAndAvatarContainer = styled.div`
//   display: flex;
//   margin-bottom: 3vh;
// `;
//
// const AvatarContainer = styled.div`
//   display: inline-block;
//   width: fit-content;
//   align-self: center;
// `;
//
// const NameContainer = styled.div`
//   display: inline-block;
//   width: fit-content;
//   //align-self: end;
//   margin-left: 2vw;
// `;
//
// const Avatar = styled.img`
//   border-radius: 50%;
//   width: 150px;
//
//   @media (max-width: 550px) {
//     width: 100px;
//   }
// `;
//
// const Name = styled.h1`
//   margin: -50px 0 0;
//   font-size: 4rem;
//
//   @media (max-width: 550px) {
//     margin: -35px 0 0;
//     font-size: 3rem;
//   }
// `;
//
// const Description = styled(Text)`
//   font-size: 1.75rem;
//   font-weight: bold;
//   margin: 0;
//   background-image: ${(props) => props.isDark ?
//     `linear-gradient(-45deg, ${props.colors.blue600.value} 0%, ${props.colors.purple600.value} 15%, ${props.colors.pink600.value} 60%, ${props.colors.yellow600.value} 70%, ${props.colors.red600.value} 100%)`
//     : 'unset'
//   };
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: ${(props) => props.isDark ? 'transparent' : ''};
// `;
//
// export default function Home() {
//   const { isDark, theme } = useTheme();
//   return (
//     <MainPageLayout title={'Home'}>
//       <NameAndAvatarContainer>
//         <AvatarContainer>
//           <Avatar
//             src="https://media.licdn.com/dms/image/C5603AQHSiEjqyNMOKw/profile-displayphoto-shrink_400_400/0/1654621021649?e=1681948800&amp;v=beta&amp;t=SVmRxOk8fqrRwCJ8mrnpW76aYZD4HCfHZfzv065GmBs"
//             alt="Taylor Clay"
//           />
//         </AvatarContainer>
//         <NameContainer>
//           <h2>Hi, I'm</h2>
//           <Name>Taylor</Name>
//         </NameContainer>
//       </NameAndAvatarContainer>
//
//       <Description isDark={isDark} colors={theme.colors}>
//         I am a Senior Frontend Engineer with a passion for Web Performance.<br />
//         I specialize in building high-performing, visually stunning websites and web apps that provide a delightful user experience.<br />
//         I have a deep understanding of React, and enjoy working in the React ecosystem.<br />
//         I am consistently working to improve my technical skills, specifically around Web technologies, but also my interpersonal skills.
//       </Description>
//     </MainPageLayout>
//   );
// }
