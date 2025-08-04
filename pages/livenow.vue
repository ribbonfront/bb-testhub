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
                            <div v-for="(each, n) in movList" :key="n">
                                <div class="h-[110px] bg-gray-800 rounded-xl overflow-hidden">
                                    <img
                                    :src="each.coverImg"
                                    class="w-full h-full object-cover"
                                    alt=""
                                    />
                                </div>
                                <div class="flex flex-col my-2">
                                    <span class="text-md text-white">{{ each.name }}</span>
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
type Movie = {
  id: number;
  name: string;
  detail: string;
  coverImg: string;
  catId: number;
  duration: number;
};

const movList = ref<Movie[]>([
  {
    id: 1,
    name: "Wendy",
    detail: "detail1",
    coverImg: "/movies/mov1.png",
    catId: 1,
    duration: 2
  },
  {
    id: 2,
    name: "Interstellar",
    detail: "detail2",
    coverImg: "/movies/mov2.png",
    catId: 2,
    duration: 1
  },
  {
    id: 3,
    name: "After",
    detail: "detail3",
    coverImg: "/movies/mov3.png",
    catId: 2,
    duration: 3
  },
  {
    id: 4,
    name: "Joker",
    detail: "detail4",
    coverImg: "/movies/mov4.png",
    catId: 1,
    duration: 2
  },
  {
    id: 5,
    name: "After",
    detail: "detail5",
    coverImg: "/movies/mov5.png",
    catId: 2,
    duration: 1
  },
]);
</script>

<style scoped>
</style>