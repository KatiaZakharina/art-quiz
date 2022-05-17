import { useTranslation } from 'react-i18next';

import { ColumnContainer, Nav } from 'components/Layout';
import { SettingsForm } from './SettingsForm/SettingsForm';

export function Settings() {
  const { t } = useTranslation();

  return (
    <ColumnContainer>
      <Nav title={t('Settings')} />
      <SettingsForm />
    </ColumnContainer>
  );
}
