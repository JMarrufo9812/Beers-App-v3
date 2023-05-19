import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ErrorHandler } from '@/entities/interfaces/error'

export const useErrorStore = defineStore('error', () => {
  // state
  const errorHandler = ref<ErrorHandler>({
    text: null,
    show: false,
  })

  // Actions
  const setError = (error: ErrorHandler): void => {
    errorHandler.value.text = error.text
    errorHandler.value.color = error.color || 'red'
    errorHandler.value.show = error.show
    errorHandler.value.timeout = error.timeout || 5
  }

  return {
    errorHandler,
    setError,
  }
})
