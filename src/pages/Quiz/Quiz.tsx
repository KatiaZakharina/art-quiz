import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ColumnContainer, Nav } from 'components/Layout';
import { QuizModal } from './QuizModal/QuizModal';
import { Timer } from './Timer/Timer';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ArtistQuiz, PictureQuiz } from './types';
import { categoriesNumber, imageTypeOffset, QUESTIONS_NUM } from 'store/quiz/constants';
import { answerQuestion, endQuiz, setModalVisibility, stopTimer } from 'store/quiz/actions';
import { getUniqueRandomsInRange } from 'helpers/getUniqueRandomsInRange';
import { cacheImages } from 'helpers/cacheImages';

import {
  selectCurrentCorrectNum,
  selectCurrentQuiz,
  selectSettings,
  selectVisibleModalType,
} from 'store/quiz/selectors';

export const Quiz = () => {
  const { t } = useTranslation();
  const [answers, setAnswers] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const visibleModalType = useAppSelector(selectVisibleModalType);
  const { type } = useAppSelector(selectCurrentQuiz);
  const { hasTimer } = useAppSelector(selectSettings);
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
    dispatch(stopTimer());
  };

  return (
    <ColumnContainer>
      {hasTimer ? (
        <Timer />
      ) : (
        <Nav
          title={t('Quit')}
          onClick={() => {
            dispatch(endQuiz());
          }}
        />
      )}

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
