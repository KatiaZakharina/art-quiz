import { StyledLinearProgress, StyledTimer, TimerCount } from './StyledTimer';

import close from 'assets/svg/eva_close-outline.svg';
import { ThemedSVG } from 'components/ThemedSVG/ThemedSVG';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'store/hooks';
import { setModalVisibility } from 'store/quiz/actions';

export const Timer = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //FIXME: move close logic
  const onCloseQuiz = () => {
    dispatch(setModalVisibility({ type: 'quit', visible: false }));
  };

  return (
    <StyledTimer>
      <ThemedSVG src={close} height="2rem" width="2rem" onClick={onCloseQuiz} />
      <StyledLinearProgress variant="determinate" value={progress} />
      {/* <input className="quiz__timeline range-input" type="range" min="0" step="1" value="100" /> */}
      <TimerCount className="quiz__time">0:00</TimerCount>
    </StyledTimer>
  );
};
