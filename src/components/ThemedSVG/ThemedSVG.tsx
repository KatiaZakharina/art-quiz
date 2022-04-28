import { Colors } from 'styles/theme';
import { StyledSVG } from './StyledThemedSVG';

export type ThemedSVGProps = { src: string; type?: Colors; width?: string; height?: string };

export function ThemedSVG(props: ThemedSVGProps) {
  return <StyledSVG {...props} />;
}
