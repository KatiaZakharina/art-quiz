import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ColumnContainer } from 'components/Layout';

export const StyledNoMatch = styled(ColumnContainer)`
  justify-content: center;
`;

export const Title = styled.h1`
  display: inline-block;
  margin-left: 10px;
  font-size: 2rem;
`;
export const Message = styled(Link)`
  display: block;
  margin-top: 20px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.inverse_main};
  text-align: center;
`;
