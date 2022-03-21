import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Colors } from '../../styles/theme';

export const StyledSVG = styled(SVG)<{ type: Colors; width?: string; height?: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  & path {
    fill: ${({ theme, type }) => theme.colors[type]};
  }

  & circle {
    stroke: ${({ theme, type }) => theme.colors[type]};
  }
`;
