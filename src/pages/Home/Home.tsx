import { Link } from 'react-router-dom';

import { ButtonsWrapper, StyledHome, StyledLogo, StyledTopPanel } from './StyledHome';
import { ColumnContainer } from '../../components/Layout/Container';

import settings from '../../assets/svg/settings.svg';
import logo from '../../assets/svg/art_quiz.svg';
import { Button } from '../../components/Buttons/Buttons';
import { Footer } from '../../components/Footer/Footer';
import { ThemedSVG } from '../../components/ThemedSVG/ThemedSVG';

export function Home() {
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
              Artist quiz
            </Button>
            <Button size="md" variant="inverse_outline" to="/pictures">
              Pictures quiz
            </Button>
          </ButtonsWrapper>
        </div>

        <Footer />
      </ColumnContainer>
    </StyledHome>
  );
}
