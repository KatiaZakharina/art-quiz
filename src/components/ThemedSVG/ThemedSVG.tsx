import { Colors } from 'styles/theme';
import { StyledSVG } from './StyledThemedSVG';

export type ThemedSVGProps = {
  src: string;
  type?: Colors;
  width?: string;
  height?: string;
  onClick?: () => void;
};

export function ThemedSVG(props: ThemedSVGProps) {
  return <StyledSVG {...props} />;
}
