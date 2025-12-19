import { useTranslation } from 'react-i18next';

import { enUS, deDE, svSE } from '@mui/material/locale';

const LANGS = [
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
  },
  {
    label: 'German',
    value: 'de',
    systemValue: deDE,
  },
  {
    label: 'Swedish',
    value: 'se',
    systemValue: svSE,
  },
];

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();
  const langStorage = localStorage.getItem('i18nextLng');
  const currentLang =
    LANGS.find((_lang) => _lang.value === langStorage) || LANGS[1];

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    translate,
    currentLang,
    allLang: LANGS,
  };
}
