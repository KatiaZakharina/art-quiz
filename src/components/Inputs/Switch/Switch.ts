import styled, { css } from 'styled-components';
import { Switch } from '@mui/material';
import { rgba } from 'styles/rgba';

export const SwitchInput = styled(Switch)`
  ${({ theme }) => css`
    & .MuiSwitch-track,
    & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
      background-color: ${theme.colors.secondary};
    }

    & .MuiSwitch-switchBase.Mui-checked {
      color: ${theme.colors.secondary};
      &:hover {
        background-color: ${rgba(theme.colors.secondary, 0.4)};
      }
    }
  `}
`;
