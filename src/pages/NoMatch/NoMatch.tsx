import { useTranslation } from 'react-i18next';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { Message, StyledNoMatch, Title } from './StyledNoMatch';

import warningIcon from 'assets/svg/warning.svg';

export function NoMatch() {
  const { t } = useTranslation();
  return (
    <StyledNoMatch>
      <div>
        <ThemedSVG src={warningIcon} width="2rem" height="2rem" />
        <Title>{t('This page is not found')}</Title>
        <Message to="/">{t('Go to the main page')}</Message>
      </div>
    </StyledNoMatch>
  );
}
