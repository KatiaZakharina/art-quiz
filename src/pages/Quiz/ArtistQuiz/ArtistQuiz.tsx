import { useEffect, useState } from 'react';

import { Answer, Answers, AnswerSkeleton, Question, StyledArtistQuiz } from './StyledArtistQuiz';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { categoriesNumber, imageTypeOffset, QUESTIONS_NUM } from 'store/quiz/constants';
import { answerQuestion, setModalVisibility } from 'store/quiz/actions';
import { selectCurrentCorrectNum, selectCurrentQuiz } from 'store/quiz/selectors';

import { getUniqueRandomsInRange } from 'helpers/getUniqueRandomsInRange';
import { cacheImages } from 'helpers/cacheImages';
import picturesData from 'model/pictures_ru.json';

export const ArtistQuiz = () => {
  const { type } = useAppSelector(selectCurrentQuiz);
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState<number[]>([]);

  const minImgNum = imageTypeOffset[type];
  const maxImgNum = minImgNum + QUESTIONS_NUM * categoriesNumber[type];
  const correctImgNum = useAppSelector(selectCurrentCorrectNum);

  useEffect(() => {
    const answers = getUniqueRandomsInRange(minImgNum, maxImgNum, 4, correctImgNum);
    setAnswers(answers);

    const answersImages = answers.map((num) => require(`assets/img/${num}.jpg`));
    cacheImages(answersImages, setIsLoading);
  }, [minImgNum, maxImgNum, correctImgNum]);

  const onAnswerQuestion = (num: number) => {
    dispatch(answerQuestion(num === correctImgNum));
    dispatch(setModalVisibility({ type: 'answer', visible: true }));
  };

  return (
    <StyledArtistQuiz>
      <Question>Which is {picturesData.data[correctImgNum].author} picture?</Question>
      <Answers>
        {answers.map((num, idx) =>
          !isLoading ? (
            <Answer
              onClick={() => {
                onAnswerQuestion(num);
              }}
              style={{ backgroundImage: `url(${require(`assets/img/${num}.jpg`)})` }}
              key={idx}
            />
          ) : (
            <AnswerSkeleton key={idx} />
          )
        )}
      </Answers>
    </StyledArtistQuiz>
  );
};
