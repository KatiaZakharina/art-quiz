import styled from 'styled-components';

import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { useNavigate } from 'react-router-dom';

import backArrow from 'assets/svg/arrow-back.svg';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: calc(100vw - 4rem);
  max-width: 1440px;
  padding: 1rem 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
`;

type Props = { title: string; onClick?: (event?: Event) => void };
export const Nav = ({ title, onClick }: Props) => {
  const navigate = useNavigate();

  const onBack = () => {
    onClick && onClick();
    navigate(-1);
  };

  return (
    <StyledNav>
      <NavItem onClick={onBack}>
        <ThemedSVG src={backArrow} width="3rem" height="3rem" />
        {title}
      </NavItem>
    </StyledNav>
  );
};
