import styled, { css } from 'styled-components';
import { Slider } from '@mui/material';

import { rgba } from 'styles/rgba';

export const RangeInput = styled(Slider)`
  ${({ theme }) => css`
    &.MuiSlider-root {
      color: ${theme.colors.secondary};
      height: 4px;
    }

    & .MuiSlider-thumb {
      color: ${theme.colors.secondary};

      &:hover,
      &.Mui-focusVisible {
        box-shadow: 0px 0px 0px 8px ${rgba(theme.colors.secondary, 0.4)};
      }
      &.Mui-active {
        box-shadow: 0px 0px 0px 14px ${rgba(theme.colors.secondary, 0.4)};
      }
    }
  `}
`;
