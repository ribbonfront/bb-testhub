import { defineStore } from 'pinia'

export const useThemeStore = defineStore('colorMode', {
  state: () => ({
    colorMode: 'dark' as 'light' | 'dark'
  }),
  actions: {
    toggleTheme() {
      this.colorMode = this.colorMode === 'light' ? 'dark' : 'light'
    }
  }
})