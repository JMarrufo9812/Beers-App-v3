import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const flagSidebar = ref(true)

  function toggleFlagSidebar(): void {
    flagSidebar.value = !flagSidebar.value
  }

  return {
    flagSidebar,
    toggleFlagSidebar,
  }
})
