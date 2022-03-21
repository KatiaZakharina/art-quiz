import { ButtonProps } from './ButtonProps';
import { StyledButton, StyledLink } from './StyledButtons';

export function Button(props: ButtonProps) {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
}
