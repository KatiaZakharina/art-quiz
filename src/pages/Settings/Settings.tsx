import { ColumnContainer } from 'components/Layout/Container';
import { Nav } from 'components/Layout/Nav';
import { SettingsForm } from './SettingsForm/SettingsForm';

export function Settings() {
  return (
    <ColumnContainer>
      <Nav title="Settings" />
      <SettingsForm />
    </ColumnContainer>
  );
}
