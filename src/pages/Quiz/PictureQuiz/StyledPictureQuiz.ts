import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { GRAY } from 'styles/colors';

export const StyledArtistQuiz = styled.div`
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

export const Answers = styled.div`
  column-count: 2;
  gap: 20px;
`;

export const Answer = styled.div`
  height: calc(50vmin - 100px);
  width: calc(50vmin - 100px);
  min-width: 120px;
  min-height: 120px;
  margin-bottom: 20px;
  background: center / cover no-repeat;
  border-radius: 15px;
  cursor: pointer;
`;

export const AnswerSkeleton = styled(Answer).attrs({
  as: Skeleton,
  variant: 'rectangular',
  height: 'calc(50vmin - 100px)',
  sx: { bgcolor: GRAY },
  style: { borderRadius: '15px' },
})``;
