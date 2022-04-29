import styled, { css } from 'styled-components';

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.div`
  position: relative;
  font-size: 0.8rem;
`;

export const Picture = styled.div`
  height: calc(50vw - 40px);
  width: calc(50vw - 40px);
  background: center / cover no-repeat;
  transition: background-image 0.7s ease-in-out;
  border-radius: 15px;
  cursor: pointer;

  @media (min-width: 600px) {
    height: calc(33vw - 20px);
    width: calc(33vw - 20px);
  }
  @media (min-width: 768px) {
    height: calc(25vw - 30px);
    width: calc(25vw - 30px);
  }
  @media (min-width: 1240px) {
    height: calc(15vw - 10px);
    width: calc(15vw - 10px);
    max-width: 200px;
    max-height: 200px;
  }
`;

export const Details = styled.div`
  position: absolute;
  bottom: 25px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50px;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.main};
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;
  border-radius: 0 0 15px 15px;
  pointer-events: none;
  transform-origin: bottom;
  transform: translateY(80px);
`;
export const Score = styled.div``;

const inactiveCss = css`
  ${Picture} {
    filter: grayscale(100%);
  }

  ${Score} {
    display: none;
  }
`;

const completedCss = css`
  filter: none;
  &:hover ${Details} {
    transform: translateY(+25px);
  }

  &:hover ${CardHeader} {
    color: ${({ theme }) => theme.colors.secondary};

    & ${Title} {
      text-decoration: underline;
    }
    & ${Title}::after {
      content: '►';
      position: absolute;
      right: -25px;
      font-size: 1rem;
    }
  }
`;

export const StyledCard = styled.div<{ inactive?: boolean; completed?: boolean }>`
  position: relative;
  margin-bottom: 25px;
  width: max-content;
  overflow: hidden;
  cursor: pointer;

  ${({ inactive }) => (inactive ? inactiveCss : null)}
  ${({ completed }) => (completed ? completedCss : null)}
`;
