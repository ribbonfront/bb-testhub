<template>
  <div class="min-h-screen" :class="themeStore.colorMode === 'light' ? 'light_mode' : 'dark_mode'">
    <div class="text-end p-2">
      <button @click="themeStore.toggleTheme()">
          <component :is="themeStore.colorMode === 'light' ? SunIcon : MoonIcon" class="w-6 h-6" />
      </button>
    </div>
    
    <slot />
  </div>
</template>

<script setup lang="ts">
    import { useThemeStore } from '~/stores/switchTheme'
    import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
    
    const themeStore = useThemeStore()
</script>