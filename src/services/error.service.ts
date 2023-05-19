import { useErrorStore } from '@/store/state'
import { useAuthStore } from '@/store/auth'
import type { AxiosError } from 'axios'
import { i18n } from '@/plugins/i18n'

const errorStore = useErrorStore()
const authStore = useAuthStore()

export function manageError(error: AxiosError) {
  const { response } = error
  const messageError = Array.isArray(response.data) ? i18n.global.t('error.bad_request') : response.data.message
  
  switch (response.status) {
    case 400:
      errorStore.setError({ text: messageError, show: true })
      break
    case 401:
      authStore.logOut()
      break
    case 403:
      authStore.logOut()
      errorStore.setError({ text: messageError, show: true })
      break
    case 404:
      errorStore.setError({
        text: i18n.global.t('error.not_found'),
        show: true,
      })
      break
    case 0:
      errorStore.setError({
        text: i18n.global.t('error.server_disconnected'),
        show: true,
      })
      break
    case 500:
      errorStore.setError({
        text: i18n.global.t('error.server_error'),
        show: true,
      })
      break
  }
}

export function manageConnRefused() {
  errorStore.setError({
    text: i18n.global.t('error.server_disconnected'),
    show: true,
  })
}
