import { useNavigate } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { ColumnContainer } from 'components/layout/Container';
import { TopPanel } from 'components/layout/TopPanel';

import backArrow from 'assets/svg/arrow-back.svg';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { Row } from 'components/layout/Row';
import { SettingsForm } from './SettingsForm/SettingsForm';

export function Settings() {
  const navigate = useNavigate();

  return (
    <ColumnContainer>
      <TopPanel>
        <Row onClick={() => navigate(-1)}>
          <ThemedSVG src={backArrow} width="3rem" height="3rem" />
          Settings
        </Row>
      </TopPanel>
      <SettingsForm />
      <Footer />
    </ColumnContainer>
  );
}
