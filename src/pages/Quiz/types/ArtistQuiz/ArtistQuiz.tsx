import { Answer, Answers, AnswerSkeleton, Question, StyledArtistQuiz } from './StyledArtistQuiz';

import { picturesData } from 'translation/localizedPicturesData';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <StyledArtistQuiz>
      <Question>
        {t('Which is')} {picturesData.data[correctNum].author} {t('picture?')}
      </Question>
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
