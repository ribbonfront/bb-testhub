<template>
    <div class="main_card">
        <div class="main_inner_card">
            <div class="h-[76dvh] overflow-y-auto md:h-[90dvh] p-2">

                <div>
                    <div class="flex items-center bg-black px-4">
                        <img src="assets/images/icon/sidebar/fav.svg" class="h-5 me-3" alt="Live Icon" />
                        <span class="text-2xl font-semibold">
                            Favorite
                        </span>
                    </div>
                    <div class="my-3">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4">
                            <div v-for="n in 40" :key="n">
                                <div class="h-[90px] bg-gray-800 rounded-xl overflow-hidden">
                                    <img
                                    :src="`https://picsum.photos/id/${n + 10}/200/300`"
                                    class="w-full h-full object-cover"
                                    alt=""
                                    />
                                </div>
                                <div class="flex flex-col mt-2">
                                    <span class="text-md text-white">Movie title</span>
                                </div>
                                <div class="flex">
                                    <div v-for="s in 3" :key="s">
                                        <img class="me-1" src="/assets/images/icon/dashboard/full_star.svg" alt="">
                                    </div>
                                    <img class="me-1" src="/assets/images/icon/dashboard/half_star.svg" alt="">
                                    </div>
                                    <span class="text_sub">Length : 1hr 30m</span>
                                    <div class="flex">
                                    <img class="me-1" src="/assets/images/icon/favorite/gold_speaker.svg" alt="">
                                    <span class="text_sub">EN / TH</span>
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