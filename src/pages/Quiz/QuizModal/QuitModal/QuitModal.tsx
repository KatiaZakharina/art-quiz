import { Backdrop, Modal } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Buttons/Buttons';
import { StyledBox } from 'components/Modal/StyledModal';
import { useAppDispatch } from 'store/hooks';
import { deleteTimer, endQuiz, playTimer, setModalVisibility } from 'store/quiz/actions';
import { Question, ButtonsWrapper } from './StyledQuitModal';

export const QuitModal = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onCancel = () => {
    dispatch(setModalVisibility({ type: 'quit', visible: false }));
    dispatch(playTimer());
  };

  const onConfirm = () => {
    dispatch(endQuiz());
    dispatch(setModalVisibility({ type: 'quit', visible: false }));
    dispatch(deleteTimer());
  };

  return (
    <Modal
      open={true}
      onClose={onCancel}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <StyledBox>
        <Question>{t('Do you really want to quit the game?')}</Question>

        <ButtonsWrapper>
          <Button size="full" variant="secondary" onClick={onCancel}>
            {t('Cancel')}
          </Button>

          <Button size="full" variant="main_outline" onClick={onConfirm}>
            {t('Yes')}
          </Button>
        </ButtonsWrapper>
      </StyledBox>
    </Modal>
  );
};
