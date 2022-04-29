import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ColumnContainer } from 'components/layout/Container';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { Row } from 'components/layout/Row';
import { Nav } from 'components/layout/Nav';
import { CardList } from './StyledCategories';
import { CategoryCard } from './CategoryCard/CategoryCard';
import { CardSkeleton } from './CategoryCard/CardSkeleton';

import { QuizType } from 'store/main/types';
import { useAppSelector } from 'store/hooks';
import { categoriesNumber } from 'store/main/constants';
import { cacheImages } from 'helpers/cacheImages';

import settings from 'assets/svg/settings.svg';

type CategoriesProps = { type: QuizType };

export function Categories({ type }: CategoriesProps) {
  const categoryScore = useAppSelector((state) => state.mainReducer.categoriesScore[type]);
  const [isLoaded, setIsLoaded] = useState(true);

  const images = Array(categoriesNumber[type])
    .fill('')
    .map((_, idx) => {
      const imgNum = idx * 10 + categoriesNumber[type];
      return require(`assets/img/${imgNum}.jpg`);
    });

  useEffect(() => {
    cacheImages(images, setIsLoaded);
  }, [images]);

  return (
    <ColumnContainer>
      <Row>
        <Nav title="Categories" />
        <Link to="/settings">
          <ThemedSVG src={settings} type="inverse_main" height="2.5rem" width="2.5rem" />
        </Link>
      </Row>

      <CardList>
        {!isLoaded
          ? Object.entries(categoryScore).map(([category, score], idx) => (
              <CategoryCard
                category={category}
                categoryScore={score}
                image={images[idx]}
                key={idx}
              />
            ))
          : Array(categoriesNumber[type])
              .fill(0)
              .map((_, idx) => <CardSkeleton key={idx} />)}
      </CardList>
    </ColumnContainer>
  );
}
