import { Navigate } from 'react-router-dom';

import { ColumnContainer } from 'components/layout/Container';
import { ArtistQuiz } from './ArtistQuiz/ArtistQuiz';
import { QuizModal } from './QuizModal/QuizModal';
import { Timer } from './Timer/Timer';

import { useAppSelector } from 'store/hooks';
import { selectCurrentQuiz, selectVisibleModalType } from 'store/quiz/selectors';
import { PictureQuiz } from './PictureQuiz/PictureQuiz';

export const Quiz = () => {
  const currentQuiz = useAppSelector(selectCurrentQuiz);

  const visibleModalType = useAppSelector(selectVisibleModalType);

  if (!currentQuiz) {
    return <Navigate to="/" />;
  }

  const { type } = currentQuiz;

  console.log(visibleModalType);

  return (
    <ColumnContainer>
      <Timer />
      {type === 'artists' ? <ArtistQuiz /> : <PictureQuiz />}

      {visibleModalType && <QuizModal type={visibleModalType} />}
    </ColumnContainer>
  );
};
