<template>
    <!-- desktop side bar -->
    <div class="w-full">
        <aside
            class="h-screen w-full bg-black py-2 px-4 text-white top-0 left-0 z-40 flex flex-col shadow-lg"
        >
            <div class="flex items-center justify-between h-16 w-full relative">
                <img src="assets/images/logo/logo_login.png" alt="Logo">
                <NuxtLink
                    to="/notification"
                    class="flex items-center gap-3 p-3 rounded-lg"
                >
                    <button class="z-[99] absolute right-0">
                        <img src="assets/images/icon/sidebar/bell.svg" alt="Logo">
                    </button>
                </NuxtLink>
            </div>

            <nav class="flex-1 overflow-y-auto">
            <ul class="space-y-2">
                <li>
                <NuxtLink
                    to="/"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    active-class="bg-gray-800"
                >
                    <img :src="route.path === '/'
                        ? '/sidebar/active_home.svg'
                        : '/sidebar/home.svg'"
                        class="w-5 h-5" alt="Icon" />
                    <span>Home</span>
                </NuxtLink>
                </li>

                <li>
                <NuxtLink
                    to="/livenow"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    active-class="bg-gray-800"
                >
                    <img :src="route.path === '/livenow'
                        ? '/sidebar/active_live.svg'
                        : '/sidebar/live.svg'"
                        class="w-5 h-5" alt="Icon" />
                    <span>Live now</span>
                </NuxtLink>
                </li>

                <li>
                <NuxtLink
                    to="/favorite"
                    class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                    active-class="bg-gray-800"
                >
                      <img :src="route.path === '/favorite'
                        ? '/sidebar/active_fav.svg'
                        : '/sidebar/fav.svg'"
                        class="w-5 h-5" alt="Icon" />
                    <span>Favorite</span>
                </NuxtLink>
                </li>
            </ul>
            </nav>

        </aside>
    </div>
</template>
<script setup>
    const route = useRoute()
</script>