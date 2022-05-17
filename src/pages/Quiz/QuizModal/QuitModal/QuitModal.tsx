import { Backdrop, Modal } from '@mui/material';
import { Button } from 'components/Buttons/Buttons';
import { Close, StyledBox } from 'components/Modal/StyledModal';
import { useAppDispatch } from 'store/hooks';
import { setModalVisibility } from 'store/quiz/actions';
import { Question } from './StyledQuitModal';

export const QuitModal = () => {
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModalVisibility({ type: 'quit', visible: false }));
  };
  return (
    <Modal
      open={true}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        <Close />
        <StyledBox>
          <Question>Do you really want to quit the game?</Question>

          <Button size="full" variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button size="full" variant="inverse_outline" onClick={onClose}>
            Yes
          </Button>
        </StyledBox>
      </>
    </Modal>
  );
};
