import {
  Answer,
  Answers,
  Picture,
  PictureSkeleton,
  Question,
  StyledPictureQuiz,
} from './StyledPictureQuiz';

import picturesData from 'model/pictures_ru.json';

type PictureQuizProps = {
  answers: number[];
  correctNum: number;
  isLoading: boolean;
  onAnswerQuestion: (num: number) => void;
};

export const PictureQuiz = ({
  answers,
  isLoading,
  onAnswerQuestion,
  correctNum,
}: PictureQuizProps) => {
  return (
    <StyledPictureQuiz>
      <Question>Which is the author of this picture?</Question>
      {!isLoading ? (
        <Picture style={{ backgroundImage: `url(${require(`assets/img/${correctNum}.jpg`)})` }} />
      ) : (
        <PictureSkeleton />
      )}
      <Answers>
        {answers.map((num, idx) => (
          <Answer
            size="full"
            variant="inverse_outline"
            onClick={() => {
              onAnswerQuestion(num);
            }}
            key={idx}
          >
            {picturesData.data[num].author}
          </Answer>
        ))}
      </Answers>
    </StyledPictureQuiz>
  );
};
