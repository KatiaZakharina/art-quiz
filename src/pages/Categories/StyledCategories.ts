import styled from 'styled-components';

export const CardList = styled.div`
  flex: 1 1 auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  column-count: 2;
  gap: 20px;
  @media (min-width: 600px) {
    column-count: 3;
  }
  @media (min-width: 768px) {
    column-count: 4;
  }
  @media (min-width: 1240px) {
    column-count: 6;
  }
`;
