import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: calc(100vw - 4rem);
  height: 100%;
  max-width: 1440px;
`;

export const ColumnContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
