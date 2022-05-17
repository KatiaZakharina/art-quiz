import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';
import { selectCurrentQuiz } from 'store/quiz/selectors';
import { Quiz } from './Quiz';

export const QuizWithType = () => {
  const startedQuiz = useAppSelector(selectCurrentQuiz);

  return startedQuiz ? <Quiz /> : <Navigate to="/" />;
};
