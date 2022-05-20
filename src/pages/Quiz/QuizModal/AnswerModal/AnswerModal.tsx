import { useTranslation } from 'react-i18next';
import { Backdrop, Modal } from '@mui/material';

import { Description, Picture, PictureName } from './StyledAnswerModal';
import { Close, StyledBox } from 'components/Modal/StyledModal';
import { Button } from 'components/Buttons/Buttons';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  clearTimer,
  deleteTimer,
  getNextQuestion,
  playTimer,
  setModalVisibility,
} from 'store/quiz/actions';
import { QUESTIONS_NUM } from 'store/quiz/constants';
import {
  selectCurrentCorrectNum,
  selectCurrentQuiz,
  selectCurrentScore,
} from 'store/quiz/selectors';

import { picturesData } from 'translation/localizedPicturesData';

export const AnswerModal = () => {
  const { question } = useAppSelector(selectCurrentQuiz);

  const isCorrect = useAppSelector(selectCurrentScore).results[question];
  const correctNum = useAppSelector(selectCurrentCorrectNum);

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const onClose = () => {
    dispatch(setModalVisibility({ type: 'answer', visible: false }));

    if (question + 1 < QUESTIONS_NUM) {
      dispatch(getNextQuestion());
      dispatch(clearTimer());
      dispatch(playTimer());
    } else {
      dispatch(setModalVisibility({ type: 'finalResult', visible: true }));
      dispatch(deleteTimer());
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
          {t('Next')}
        </Button>
      </StyledBox>
    </Modal>
  );
};
