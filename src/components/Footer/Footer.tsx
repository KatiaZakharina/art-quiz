import { DevInfo, GitHubLogo, StyledFooter } from './StyledFooter';

import github from 'assets/svg/github.svg';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <a href="https://github.com/KatiaZakharina/art-quiz" target="_blank" rel="noreferrer">
        <GitHubLogo src={github} />
      </a>
      <DevInfo>
        <a href="https://github.com/KatiaZakharina" target="_blank" rel="noreferrer">
          {t('Katia Zakharina')}
        </a>
        <span>2022</span>
      </DevInfo>
    </StyledFooter>
  );
}
