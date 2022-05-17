import styled from 'styled-components';
import { Skeleton } from '@mui/material';

import { StyledButton } from 'components/Buttons/StyledButtons';
import { GRAY } from 'styles/colors';

export const StyledPictureQuiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  max-width: 830px;
  color: ${({ theme }) => theme.colors.inverse_main};
`;

export const Question = styled.h2`
  margin: 30px 0;
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Picture = styled.div`
  width: calc(100vw - 50px);
  height: calc(50vh - 50px);
  max-width: 825px;
  margin-bottom: 20px;
  background: center / cover no-repeat;
  border-radius: 15px;
`;

export const PictureSkeleton = styled(Picture).attrs({
  as: Skeleton,
  variant: 'rectangular',
  height: 'calc(50vh - 50px)',
  sx: { bgcolor: GRAY },
  style: { borderRadius: '15px' },
})``;

export const Answers = styled.div`
  column-count: 2;
  gap: 20px;
`;

export const Answer = styled(StyledButton)`
  width: calc(min(100vw, 825px) / 2 - 40px);
  min-height: 50px;
  margin-bottom: 20px;
  min-height: 65px;
  cursor: pointer;
`;
