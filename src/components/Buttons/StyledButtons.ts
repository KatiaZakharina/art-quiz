import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonProps } from './ButtonProps';
import { baseStyles, getButtonSizeStyles, getButtonVariantStyles } from './getButtonStyles';

export const StyledButton = styled.button<ButtonProps>`
  ${baseStyles}
  ${(props) => getButtonSizeStyles(props.size)}
  ${(props) => getButtonVariantStyles(props)}
`;

export const StyledLink = styled(StyledButton).attrs({ as: Link })``;
