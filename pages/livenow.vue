<template>
    <div class="main_card">
        <div class="main_inner_card">
            <div class="h-[76dvh] overflow-y-auto md:h-[90dvh] p-2">

                <div>
                    <div class="flex items-center bg-black px-4">
                        <img src="assets/images/icon/sidebar/live.svg" class="h-5 me-3" alt="Live Icon" />
                        <span class="text-2xl font-semibold">
                            Live now
                        </span>
                    </div>
                    <div class="my-3">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            <div v-for="n in 20" :key="n">
                                <div class="h-[110px] bg-gray-800 rounded-xl overflow-hidden">
                                    <img
                                    :src="`https://picsum.photos/id/${n + 10}/200/300`"
                                    class="w-full h-full object-cover"
                                    alt=""
                                    />
                                </div>
                                <div class="flex flex-col my-2">
                                    <span class="text-md text-white">Movie title</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>