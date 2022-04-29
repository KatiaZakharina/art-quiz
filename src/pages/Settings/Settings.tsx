import { ColumnContainer } from 'components/layout/Container';
import { Nav } from 'components/layout/Nav';
import { SettingsForm } from './SettingsForm/SettingsForm';

export function Settings() {
  return (
    <ColumnContainer>
      <Nav title="Settings" />
      <SettingsForm />
    </ColumnContainer>
  );
}
