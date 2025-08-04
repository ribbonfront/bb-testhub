<template>
    <!-- desktop side bar -->
    <div class="w-full">
        <topbar
            class="w-full bg-black py-2 px-4 text-white top-0 left-0 z-40 flex flex-col shadow-lg"
        >
            <div class="flex items-center justify-between h-16 w-full relative">
                <img src="assets/images/logo/logo_login.png" alt="Logo">
                <NuxtLink
                    to="/notification"
                    class="flex items-center gap-3 p-3 rounded-lg"
                >
                    <button class="z-[99] absolute right-0">
                        <img src="assets/images/icon/sidebar/bell.svg" alt="Logo" class="w-6">
                    </button>
                </NuxtLink>
            </div>
        </topbar>
        <footer class="w-full flex justify-between p-3 px-8 fixed bottom-2 z-50">
            <div>
                <NuxtLink
                    to="/"
                    class="flex items-center gap-3 p-3 rounded-lg"
                >
                     <img :src="route.path === '/'
                        ? '/sidebar/active_home.svg'
                        : '/sidebar/home.svg'"
                        class="w-6" alt="Icon" />
                </NuxtLink>
            </div>
            <div>
                <NuxtLink
                    to="/livenow"
                    class="flex items-center gap-3 p-3 rounded-lg"
                >
                     <img :src="route.path === '/livenow'
                        ? '/sidebar/active_live.svg'
                        : '/sidebar/live.svg'"
                        class="w-7" alt="Icon" />
                </NuxtLink>
            </div>
            <div>
                <NuxtLink
                    to="/favorite"
                    class="flex items-center gap-3 p-3 rounded-lg"
                >
                    <img :src="route.path === '/favorite'
                        ? '/sidebar/active_fav.svg'
                        : '/sidebar/fav.svg'"
                        class="w-6" alt="Icon" />
                </NuxtLink>
            </div>
            
        </footer>
    </div>
</template>
<script setup>
    const route = useRoute()
</script>