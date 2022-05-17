import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import { Colors } from 'styles/theme';

export const StyledSVG = styled(SVG)<{
  type?: Colors;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 1;
  }

  opacity: 0.8;

  & path {
    fill: ${({ theme, type = 'inverse_main' }) => theme.colors[type]};
  }

  & circle {
    stroke: ${({ theme, type = 'inverse_main' }) => theme.colors[type]};
  }
`;
