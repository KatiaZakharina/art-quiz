import { Backdrop, Modal } from '@mui/material';

import { Description, Picture, PictureName } from './StyledAnswerModal';
import { Close, StyledBox } from 'components/Modal/StyledModal';
import { Button } from 'components/Buttons/Buttons';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getNextQuestion, setModalVisibility } from 'store/quiz/actions';
import { QUESTIONS_NUM } from 'store/quiz/constants';
import {
  selectCurrentCorrectNum,
  selectCurrentQuiz,
  selectCurrentScore,
} from 'store/quiz/selectors';

import picturesData from 'model/pictures_ru.json';

export const AnswerModal = () => {
  const { question } = useAppSelector(selectCurrentQuiz);

  const isCorrect = useAppSelector(selectCurrentScore).results[question];
  const correctNum = useAppSelector(selectCurrentCorrectNum);

  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setModalVisibility({ type: 'answer', visible: false }));

    if (question + 1 < QUESTIONS_NUM) {
      dispatch(getNextQuestion());
    } else {
      dispatch(setModalVisibility({ type: 'finalResult', visible: true }));
    }
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
      <StyledBox>
        <Close onClick={onClose}>&times;</Close>
        <Picture isCorrect={isCorrect} bgImage={require(`assets/img/${correctNum}.jpg`)}></Picture>
        <PictureName>{picturesData.data[correctNum].name}</PictureName>
        <Description>
          {picturesData.data[correctNum].author}, {picturesData.data[correctNum].year}
        </Description>

        <Button size="full" variant="secondary" onClick={onClose}>
          Next
        </Button>
      </StyledBox>
    </Modal>
  );
};
