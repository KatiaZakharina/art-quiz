import { Backdrop, Modal } from '@mui/material';

import { StyledBox } from 'components/Modal/StyledModal';
import { Button } from 'components/Buttons/Buttons';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { categoriesNumber, QUESTIONS_NUM } from 'store/quiz/constants';
import { selectCurrentCategory, selectCurrentQuiz, selectCurrentScore } from 'store/quiz/selectors';

import loseImg from 'assets/svg/lose_champion-cup.svg';
import winImg from 'assets/svg/congratulation_stars.svg';
import completeImg from 'assets/svg/win_champion-cup.svg';
import { ModalActions, ModalPhrase, ScoreState } from './StyledFinalModal';
import { endQuiz, playAgain, nextQuiz, setModalVisibility } from 'store/quiz/actions';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
// import { useAudio } from './Audio';
// import { useEffect, useState } from 'react';

export const FinalModal = () => {
  const quizScore = useAppSelector(selectCurrentScore).value;
  const categoryIndex = useAppSelector(selectCurrentCategory).index;
  const { type } = useAppSelector(selectCurrentQuiz);
  const dispatch = useAppDispatch();

  // const [audioURL, setAudioURL] = useState('');
  // const [_, toggle] = useAudio(audioURL);
  //TODO:

  // useEffect(() => {
  //   toggle();
  // }, []);

  const onPlayAgain = () => {
    dispatch(playAgain());
    dispatch(setModalVisibility({ type: 'finalResult', visible: false }));
    // toggle();
  };
  const onFinishQuiz = () => {
    dispatch(endQuiz());
    dispatch(setModalVisibility({ type: 'finalResult', visible: false }));
    // toggle();
  };
  const onNextQuiz = () => {
    dispatch(nextQuiz());
    dispatch(setModalVisibility({ type: 'finalResult', visible: false }));
    // toggle();
  };

  let phrase;
  let score;
  let buttons;
  let img;

  switch (quizScore) {
    case 0:
      img = loseImg;
      // setAudioURL(require('assets/audio/mixkit-losing-marimba-2025.wav'));
      phrase = 'Play again?';
      score = 'Game over';
      buttons = [
        { text: 'Cancel', onClick: onFinishQuiz, to: '/' },
        { text: 'Yes', onClick: onPlayAgain },
      ];
      break;
    case QUESTIONS_NUM:
      img = winImg;
      // setAudioURL(require('assets/audio/mixkit-football-team-applause-509.wav'));

      status = 'win-quiz';
      phrase = 'Congratulations!';
      score = 'Grand result';
      buttons = [
        { text: 'Cancel', onClick: onFinishQuiz, to: '/' },
        { text: 'Next', onClick: onPlayAgain },
      ];
      break;
    default:
      img = completeImg;
      // setAudioURL(require('assets/audio/mixkit-unlock-game-notification-253.wav'));

      phrase = 'Congratulations!';
      score = `${quizScore}/${QUESTIONS_NUM}`;
      buttons = [
        { text: 'Home', onClick: onFinishQuiz, to: '/' },
        { text: 'Next Quiz', onClick: onNextQuiz, to: '/quiz' },
      ];
      break;
  }

  if (categoryIndex + 1 === categoriesNumber[type] && quizScore !== 0) {
    buttons = [{ text: 'Home', onClick: onFinishQuiz, to: '/' }];
  }

  return (
    <Modal
      open={true}
      // onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <StyledBox>
        <ThemedSVG src={img} type="secondary" />
        <ScoreState>{score}</ScoreState>
        <ModalPhrase>{phrase}</ModalPhrase>

        <ModalActions>
          {buttons.map((button, index) => (
            <Button
              variant="secondary"
              //FIXME:
              size="full"
              onClick={button.onClick}
              key={index}
              to={button?.to}
            >
              {button.text}
            </Button>
          ))}
        </ModalActions>
      </StyledBox>
    </Modal>
  );
};
