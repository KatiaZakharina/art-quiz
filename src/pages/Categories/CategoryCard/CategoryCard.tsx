import { CardHeader, Details, Picture, Score, StyledCard, Title } from './StyledCategoryCard';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { QUESTIONS_NUM } from 'store/main/constants';

import reload from 'assets/svg/radix-icons_reload.svg';

type Props = { category: string; categoryScore: number; image: string };

export const CategoryCard = ({ category, categoryScore, image }: Props) => {
  return (
    <StyledCard inactive={categoryScore === 0} completed={categoryScore === QUESTIONS_NUM}>
      <CardHeader>
        <Title>{category}</Title>
        <Score>{categoryScore}/10</Score>
      </CardHeader>
      <Picture style={{ backgroundImage: `url(${image})` }} />
      <Details>
        <ThemedSVG src={reload} type="main" />
        <h5 className="card__again">Play again</h5>
      </Details>
    </StyledCard>
  );
};
