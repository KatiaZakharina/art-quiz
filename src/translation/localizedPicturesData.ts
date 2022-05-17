import { getCurrentLanguage } from './getCurrentLanguage';

import picturesDataRu from 'model/pictures_ru.json';
import picturesData from 'model/pictures.json';

const currentLang = getCurrentLanguage();
const currentPicturesData = currentLang === 'ru' ? picturesDataRu : picturesData;

export { currentPicturesData as picturesData };
