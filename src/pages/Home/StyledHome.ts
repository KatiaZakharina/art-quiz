import styled from 'styled-components';

import { TopPanel } from 'components/layout/TopPanel';
import { StyledSVG } from 'components/ThemedSVG/StyledThemedSVG';
import { ColumnContainer } from 'components/layout/Container';

export const StyledHome = styled(ColumnContainer)`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(255, 255, 255, 0) 25%),
    center 20% / cover no-repeat
      url(${({ theme }) => require(`assets/background/${theme.background}`)});
`;

export const StyledTopPanel = styled(TopPanel)`
  justify-content: flex-end;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
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
