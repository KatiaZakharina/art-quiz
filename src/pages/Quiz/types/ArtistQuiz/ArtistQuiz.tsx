import { Answer, Answers, AnswerSkeleton, Question, StyledArtistQuiz } from './StyledArtistQuiz';

import picturesData from 'model/pictures_ru.json';

type ArtistQuizProps = {
  answers: number[];
  isLoading: boolean;
  onAnswerQuestion: (num: number) => void;
  correctNum: number;
};

export const ArtistQuiz = ({
  answers,
  isLoading,
  onAnswerQuestion,
  correctNum,
}: ArtistQuizProps) => {
  return (
    <StyledArtistQuiz>
      <Question>Which is {picturesData.data[correctNum].author} picture?</Question>
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
