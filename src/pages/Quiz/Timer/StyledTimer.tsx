import { LinearProgress } from '@mui/material';
import styled from 'styled-components';
import { rgba } from 'styles/rgba';

export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px 0;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  flex: 1 1 auto;

  &.MuiLinearProgress-root {
    background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.4)};
  }

  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const TimerCount = styled.div`
  padding: 5px 10px;
  font-size: 1.3rem;
`;
