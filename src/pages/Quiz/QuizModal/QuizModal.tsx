import { ModalType } from 'store/quiz/types';
import { AnswerModal } from './AnswerModal/AnswerModal';
import { FinalModal } from './FinalModal/FinalModal';
import { QuitModal } from './QuitModal/QuitModal';

type Props = { type: ModalType };

export const QuizModal = ({ type }: Props) => {
  const modals = {
    //TODO: suspense and audio answer and final result
    answer: () => <AnswerModal />,
    finalResult: () => <FinalModal />,
    quit: () => <QuitModal />,
  };

  return modals[type]();
};
