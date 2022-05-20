import { StyledLinearProgress, StyledTimer, TimerCount } from './StyledTimer';

import close from 'assets/svg/eva_close-outline.svg';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  answerQuestion,
  changeTimer,
  deleteTimer,
  playTimer,
  setModalVisibility,
  setTimer,
  stopTimer,
} from 'store/quiz/actions';
import { TIMER_DURATION } from 'store/quiz/constants';
import { selectCurrentQuiz } from 'store/quiz/selectors';

export const Timer = () => {
  const { timer, timerStopped } = useAppSelector((state) => state.quiz);
  const currentQuiz = useAppSelector(selectCurrentQuiz);
  const dispatch = useAppDispatch();

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => {
      dispatch(changeTimer(500));
    }, 500);

    dispatch(playTimer());
    dispatch(setTimer(id));

    return () => {
      dispatch(deleteTimer());
    };
  }, []);

  useEffect(() => {
    console.log(timer);
    const id = setTimeout(
      () => {
        if (timerStopped) return;
        //FIXME:

        dispatch(answerQuestion(false));
        dispatch(setModalVisibility({ type: 'answer', visible: true }));
      },
      TIMER_DURATION,
      timer
    );

    return () => {
      clearTimeout(id);
    };
  }, [currentQuiz, timerStopped]);

  useEffect(() => {
    setProgress(100 - (timer / TIMER_DURATION) * 100);
  }, [timer]);

  const onCloseQuiz = () => {
    dispatch(stopTimer());
    dispatch(setModalVisibility({ type: 'quit', visible: true }));
  };

  return (
    <StyledTimer>
      <ThemedSVG src={close} height="2rem" width="2rem" onClick={onCloseQuiz} />
      <StyledLinearProgress variant="determinate" value={progress} />
      <TimerCount>{String(Math.floor(timer / 1000)).padStart(2, '0')}</TimerCount>
    </StyledTimer>
  );
};
