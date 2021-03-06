import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { CardList } from './StyledCategories';
import { CategoryCard } from './CategoryCard/CategoryCard';
import { CardSkeleton } from './CategoryCard/CardSkeleton';
import { ColumnContainer, Nav, Row } from 'components/Layout';

import { Category, QuizType } from 'store/quiz/types';
import { useAppSelector } from 'store/hooks';
import { categoriesNumber, imageTypeOffset, QUESTIONS_NUM } from 'store/quiz/constants';
import { cacheImages } from 'helpers/cacheImages';

import settings from 'assets/svg/settings.svg';
import { categories } from 'translation/localizedCategories';

type CategoriesProps = { type: QuizType };

export function Categories({ type }: CategoriesProps) {
  const categoryScore = useAppSelector((state) => state.quiz.score[type]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  const images = Array(categoriesNumber[type])
    .fill('')
    .map((_, idx) => {
      const imgNum = idx * QUESTIONS_NUM + imageTypeOffset[type];
      return require(`assets/img/${imgNum}.jpg`);
    });

  useEffect(() => {
    cacheImages(images, setIsLoading);
  }, [images]);

  return (
    <ColumnContainer>
      <Row>
        <Nav title={t('Categories')} />
        <Link to="/settings">
          <ThemedSVG src={settings} type="inverse_main" height="2.5rem" width="2.5rem" />
        </Link>
      </Row>

      <CardList>
        {!isLoading
          ? Object.entries(categoryScore).map(([category, { score }], idx) => (
              <CategoryCard
                type={type}
                category={category as Category}
                categoryName={categories[type][idx]}
                categoryScore={score.value}
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
