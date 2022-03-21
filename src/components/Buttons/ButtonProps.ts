import React, { MouseEventHandler } from 'react';

export type ButtonSize = 'sm' | 'md' | 'block';
export type ButtonVariant = 'main_outline' | 'inverse_outline' | 'secondary';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> & ((e: Event) => void);
  to?: string;
  disabled?: boolean;
  size: ButtonSize;
  variant: ButtonVariant;
  as?: React.ElementType;
};
