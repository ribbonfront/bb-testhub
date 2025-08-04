<template>
  <div class="min-h-screen" :class="themeStore.colorMode === 'light' ? 'light_mode' : 'dark_mode'">
    <!-- <div class="text-end p-2">
      <button @click="themeStore.toggleTheme()">
          <component :is="themeStore.colorMode === 'light' ? SunIcon : MoonIcon" class="w-6 h-6" />
      </button>
    </div> -->
    
    <div class="md:flex">
      <!-- desktop -->
      <div class="hidden md:block md:w-2/12">
        <Sidebar />
      </div>
      <!-- mobile -->
      <div class="block md:hidden">
        <MobileBar />
      </div>
      <div class="w-full flex-1 pl-80s z-[80] md:w-10/12 pb-12 md:py-0">
        <slot />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
    import { useThemeStore } from '~/stores/switchTheme'
    import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'
    import Sidebar from '@/components/Sidebar.vue'
    import MobileBar from '@/components/MobileBar.vue'
    
    const themeStore = useThemeStore()
</script>