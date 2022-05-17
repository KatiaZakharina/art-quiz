import styled from 'styled-components';
import { Box, Modal } from '@mui/material';

import { BLACK, WHITE } from 'styles/colors';

export const StyledModal = styled(Modal).attrs({ sx: { borderRadius: 3 } })`
  /* h2 {
    margin-bottom: 55px;
    max-width: 200px;
    font-size: $fz4;
    font-weight: bold;
    text-align: center;
    color: $bg-color;
  } */
`;

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vmin;
  min-width: 290px;
  padding: 60px 20px 30px;
  color: ${BLACK};
  background-color: ${WHITE};
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;
export const Close = styled.div`
  position: absolute;
  top: 8px;
  right: 24px;
  font-size: 50px;
  color: #000;
  opacity: 0.5;
  font-weight: 100;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
