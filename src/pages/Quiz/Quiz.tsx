import { useEffect, useState } from 'react';

import { ColumnContainer } from 'components/Layout';
import { QuizModal } from './QuizModal/QuizModal';
import { Timer } from './Timer/Timer';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ArtistQuiz, PictureQuiz } from './types';
import { categoriesNumber, imageTypeOffset, QUESTIONS_NUM } from 'store/quiz/constants';
import { answerQuestion, setModalVisibility } from 'store/quiz/actions';
import { getUniqueRandomsInRange } from 'helpers/getUniqueRandomsInRange';
import { cacheImages } from 'helpers/cacheImages';

import {
  selectCurrentCorrectNum,
  selectCurrentQuiz,
  selectVisibleModalType,
} from 'store/quiz/selectors';

export const Quiz = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const visibleModalType = useAppSelector(selectVisibleModalType);
  const { type } = useAppSelector(selectCurrentQuiz);
  const dispatch = useAppDispatch();

  const minImgNum = imageTypeOffset[type];
  const maxImgNum = minImgNum + QUESTIONS_NUM * categoriesNumber[type];
  const correctNum = useAppSelector(selectCurrentCorrectNum);

  useEffect(() => {
    const answers = getUniqueRandomsInRange(minImgNum, maxImgNum, 4, correctNum);
    setAnswers(answers);
    setIsLoading(true);

    const answersImages = answers.map((num) => require(`assets/img/${num}.jpg`));
    cacheImages(answersImages, setIsLoading);
  }, [correctNum]);

  const onAnswerQuestion = (num: number) => {
    dispatch(answerQuestion(num === correctNum));
    dispatch(setModalVisibility({ type: 'answer', visible: true }));
  };

  return (
    <ColumnContainer>
      <Timer />
      {type === 'artists' ? (
        <ArtistQuiz
          isLoading={isLoading}
          onAnswerQuestion={onAnswerQuestion}
          answers={answers}
          correctNum={correctNum}
        />
      ) : (
        <PictureQuiz
          isLoading={isLoading}
          onAnswerQuestion={onAnswerQuestion}
          answers={answers}
          correctNum={correctNum}
        />
      )}

      {visibleModalType && <QuizModal type={visibleModalType} />}
    </ColumnContainer>
  );
};
