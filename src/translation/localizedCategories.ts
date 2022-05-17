import { getCurrentLanguage } from './getCurrentLanguage';

import categoriesRu from 'model/categories_ru.json';
import categories from 'model/categories.json';

const currentLang = getCurrentLanguage();
const currentCategories = currentLang === 'ru' ? categoriesRu : categories;

export { currentCategories as categories };
