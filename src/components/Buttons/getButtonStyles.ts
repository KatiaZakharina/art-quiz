import { css } from 'styled-components';

import { ThemeType } from '../../styles/theme';
import { ButtonProps, ButtonSize } from './ButtonProps';

export const baseStyles = css`
  display: block;
  font-weight: normal;
  font-size: 1.2rem;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 100px;
  transition: all 0.2s linear;
  cursor: pointer;
`;

export const getButtonSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'sm':
      return css`
        padding: 10px;
      `;
    case 'md':
      return css`
        padding: 1rem 3rem;
        width: 15rem;
        min-width: 150px;
      `;
    case 'block':
      return css`
        flex-grow: 1; //FIXME:
      `;
  }
};

export const getButtonVariantStyles = (props: ButtonProps & { theme: ThemeType }) => {
  const { theme, variant } = props;

  const activeState = css`
    &:active {
      background-color: ${theme.colors.secondary};
      border-color: ${theme.colors.secondary};
      opacity: 0.9;
    }
  `;

  type Outlined = 'main' | 'inverse_main';

  const getOutlinedStyle = (font: Outlined, bg: Outlined) => css`
    color: ${theme.colors[font]};
    background-color: transparent;
    border-color: ${theme.colors[font]};

    &:hover {
      color: ${theme.colors[bg]};
      background-color: ${theme.colors[font]};
    }
  `;

  switch (variant) {
    case 'main_outline':
      return css`
        ${getOutlinedStyle('main', 'inverse_main')}
        ${activeState}
      `;
    case 'inverse_outline':
      return css`
        ${getOutlinedStyle('inverse_main', 'main')}
        ${activeState}
      `;
    case 'secondary':
      return css`
        color: ${theme.colors.main};
        background-color: ${theme.colors.secondary};
        border-color: ${theme.colors.secondary};

        &:hover {
          background-color: ${theme.colors.inverse_main};
          border-color: ${theme.colors.inverse_main};
        }
        ${activeState}
      `;
  }
};
