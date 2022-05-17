import styled from 'styled-components';

import { ColumnContainer, TopPanel } from 'components/Layout';
import { StyledSVG } from 'components/ThemedSVG/StyledThemedSVG';

export const StyledHome = styled.div`
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 25%),
    center 20% / cover no-repeat
      url(${({ theme }) => require(`../../assets/background/${theme.background}`)});

  & ${ColumnContainer} {
    justify-content: space-between;
    height: 100vh;
  }
`;

export const StyledTopPanel = styled(TopPanel)`
  justify-content: flex-end;
`;

export const StyledLogo = styled(StyledSVG)`
  display: block;
  margin: 0 auto 5vh auto;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 2rem;
`;
