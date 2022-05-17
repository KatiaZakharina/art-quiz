import i18n from 'translation';
import { Languages } from 'store/quiz/types';

export const changeLanguage = (newLanguage: Languages) => {
  let language;
  switch (newLanguage) {
    case Languages.RU:
      language = 'ru';
      break;

    case Languages.EN:
      language = 'en';
      break;

    default:
      language = 'ru';
      break;
  }
  i18n.changeLanguage(language);
  localStorage.setItem('current-language', language);
};
