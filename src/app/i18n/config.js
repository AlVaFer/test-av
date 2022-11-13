import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '../locales/es-ES.json'

export const DEFAULT_LANG = 'es-ES'

use(initReactI18next).init({
  fallbackLng: DEFAULT_LANG,
  resources: { 'es-ES': { translation: es } },
  interpolation: {
    escapeValue: false,
  },
})
