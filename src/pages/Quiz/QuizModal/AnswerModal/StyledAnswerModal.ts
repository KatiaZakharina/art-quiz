import styled from 'styled-components';

import correctIcon from 'assets/svg/correct_check-circle.svg';
import wrongIcon from 'assets/svg/wrong_check-circle.svg';

export const Picture = styled.div<{ isCorrect: boolean; bgImage: string }>`
  position: relative;
  margin-bottom: 15px;
  height: 50vmin;
  width: 50vmin;
  max-width: 550px;
  max-height: 550px;
  background: center / cover no-repeat;
  background-image: url(${({ bgImage }) => bgImage});
  border-radius: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 35px;
    height: 35px;
    background: center / cover no-repeat;
    background-image: url(${({ isCorrect }) => (isCorrect ? correctIcon : wrongIcon)});
  }
`;

export const PictureName = styled.h4`
  text-align: center;
`;

export const Description = styled.p`
  margin: 0.5rem 0 1rem;
  font-size: 0.8rem;
  font-weight: normal;
`;
