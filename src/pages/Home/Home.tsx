import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ButtonsWrapper, StyledHome, StyledLogo, StyledTopPanel } from './StyledHome';
import { Button } from 'components/Buttons/Buttons';
import { Footer } from 'components/Footer/Footer';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { ColumnContainer } from 'components/Layout';

import settings from 'assets/svg/settings.svg';
import logo from 'assets/svg/art_quiz.svg';

export function Home() {
  const { t } = useTranslation();

  return (
    <StyledHome>
      <ColumnContainer>
        <StyledTopPanel>
          <Link to="/settings">
            <ThemedSVG src={settings} type="inverse_main" height="2.5rem" width="2.5rem" />
          </Link>
        </StyledTopPanel>

        <div>
          <StyledLogo src={logo} type="inverse_main" height="8rem" width="23rem" />

          <ButtonsWrapper>
            <Button size="md" variant="inverse_outline" to="/artists">
              {t('Artist quiz')}
            </Button>
            <Button size="md" variant="inverse_outline" to="/pictures">
              {t('Pictures quiz')}
            </Button>
          </ButtonsWrapper>
        </div>

        <Footer />
      </ColumnContainer>
    </StyledHome>
  );
}
