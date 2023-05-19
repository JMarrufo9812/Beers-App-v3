import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

const locale =
  (navigator.language || navigator.userLanguage).split('-')[0] === 'es'
    ? 'es'
    : 'en'
if (document) {
  document.querySelector('html').setAttribute('lang', locale)
}

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], 'en' | 'es'>({
  locale,
  messages: {
    en,
    es,
  },
})
