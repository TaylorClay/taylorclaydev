import NextLink from 'next/link';
import Text from '@nextui-org/react/text';
import { styled } from '@compiled/react';

const Anchor = styled.a`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  background-size: 400% 400%;
  animation: ${(props) => props.selected && props.isDark ? `wave 10s ease infinite` : `none`};
  background-image: ${(props) => props.selected && props.isDark ?
          `linear-gradient(-45deg, ${props.colors.warning.value}, ${props.colors.error.value}, ${props.colors.primary.value}, ${props.colors.success.value})`
          : `none`
  };
  background-color: ${(props) => props.isDark ? props.colors.gray900.value : props.selected ? props.colors.black.value : props.colors.accents1.value};
  
  :hover {
    text-shadow: ${(props) => props.selected || props.disabled  ? 'none' : `0 0 25px ${props.colors.white.value}, 0 0 10px ${props.colors.white.value}`};
  }

  @keyframes wave {
    0%, 100% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 600px) {
    box-shadow: ${(props) => (
            props.selected && props.isDark ? `inset 0px 0px 8px 6px ${props.colors.gray900.value}, inset 0px 0px 8px 6px ${props.colors.gray900.value}`
                    : props.selected ? `inset 0px 0px 8px 6px ${props.colors.accents1.value}, inset 0px 0px 8px 6px ${props.colors.accents1.value}`
                            : `none`
    )};
  }

  @media (min-width: 600px) {
    box-shadow: ${(props) => (
            props.selected && props.isDark ? `inset -10px 0px 8px 6px ${props.colors.gray900.value}, inset 10px 0px 8px 6px ${props.colors.gray900.value}`
                    : props.selected ? `inset -10px 0px 8px 6px ${props.colors.accents1.value}, inset 10px 0px 8px 6px ${props.colors.accents1.value}`
                            : `none`
    )};
  }

    @media (min-width: 1100px) {
      box-shadow: ${(props) => (
              props.selected && props.isDark ? `inset -50px 0px 8px 6px ${props.colors.gray900.value}, inset 50px 0px 8px 6px ${props.colors.gray900.value}`
                      : props.selected ? `inset -50px 0px 8px 6px ${props.colors.accents1.value}, inset 50px 0px 8px 6px ${props.colors.accents1.value}`
                              : `none`
      )};
    }
`;

const ButtonText = styled(Text)`
  color: ${(props) => props.color};
  font-size: 1.75rem;
  font-weight: bold;
  
  @media (max-width: 830px) {
    font-size: 1.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export default function NavItem({
  pageName,
  href = '',
  isDark,
  theme,
  pathname,
  disabled,
}) {
  if (disabled) {
    return (
      <Anchor isDark={isDark} colors={theme.colors} selected={false} disabled>
        <ButtonText
          color={theme.colors.gray600.value}
        >
          {pageName}
        </ButtonText>
      </Anchor>
    )
  }
  const _href = `/${href}`;
  const _selected = pathname === _href;

  return (
    <NextLink href={_href} passHref>
      <Anchor isDark={isDark} colors={theme.colors} selected={_selected}>
        <ButtonText
          color={_selected ? theme.colors.white.value : isDark ? theme.colors.white.value : theme.colors.black.value}
        >
          {pageName}
        </ButtonText>
      </Anchor>
    </NextLink>
  );
}
