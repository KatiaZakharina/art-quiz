import { Link } from 'react-router-dom';

import { CardHeader, Details, Picture, Score, StyledCard, Title } from './StyledCategoryCard';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { QUESTIONS_NUM } from 'store/quiz/constants';

import { useAppDispatch } from 'store/hooks';
import { Category, QuizType } from 'store/quiz/types';
import { startQuiz } from 'store/quiz/actions';

import reload from 'assets/svg/radix-icons_reload.svg';

type Props = {
  type: QuizType;
  category: Category;
  categoryName: string;
  categoryScore: number;
  image: string;
};

export const CategoryCard = ({ type, category, categoryScore, image, categoryName }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <StyledCard
      as={Link}
      to="/quiz"
      inactive={categoryScore === 0 ? 'inactive' : undefined}
      completed={categoryScore === QUESTIONS_NUM ? 'completed' : undefined}
      onClick={() => {
        dispatch(startQuiz({ type, category }));
      }}
    >
      <CardHeader>
        <Title>{categoryName}</Title>
        <Score>
          {categoryScore}/{QUESTIONS_NUM}
        </Score>
      </CardHeader>
      <Picture style={{ backgroundImage: `url(${image})` }} />
      <Details>
        <ThemedSVG src={reload} type="main" />
        <h5 className="card__again">Play again</h5>
      </Details>
    </StyledCard>
  );
};
