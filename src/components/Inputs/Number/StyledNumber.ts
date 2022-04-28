import styled from 'styled-components';

import { StyledButton } from 'components/Buttons/StyledButtons';

export const StyledNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 130px;
  font-size: 1rem;
`;

export const Button = styled(StyledButton)`
  padding: 0;
  height: 3rem;
  width: 3rem;
  max-width: 36px;
  max-height: 36px;
  font-size: 2rem;
  border: 0;
`;

export const Input = styled.input`
  all: unset;
  max-width: 40px;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:disabled {
    opacity: 0.4;
  }
`;
