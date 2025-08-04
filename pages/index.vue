<template>
  <div class="">
    <div class="main_card">
      <div class="main_inner_card">
        <div class="h-[76dvh] overflow-y-auto md:h-[93dvh] p-2">
          <!-- top feature -->
          <div class="flex">
            <div class="relative w-[92%] md:w-[94%]">
              <img src="/assets/images/icon/dashboard/search.svg" alt="search" class="search_i_position">
              <input
                id="username"
                type="text"
                placeholder="Search movie"
                class="input_search"
              />
            </div>
            <button @click="openFilter = !openFilter">
              <div class="ml-2 flex items-center">
                <img src="/assets/images/icon/dashboard/filter.svg" alt="filter" class="h-4 me-1">
                <span class="text-[#FFFFFF66]">Filter</span>
              </div>
            </button>
          </div>
          <!-- filter -->
          <div v-if="openFilter" class="text-[#FFFFFF66] mt-2 mb-3 flex flex-col">
            <span>Category</span>
            <div class="py-1 flex flex-wrap gap-2 text-sm">
              <div class="filter_pill" @click="filterCat(0)">
                All Movie
              </div>
              <div class="filter_pill" @click="filterCat(1)">
                Action
              </div>
              <div class="filter_pill" @click="filterCat(2)">
                Drama
              </div>
            </div>
            <span>Length</span>
            <div class="py-1  flex flex-wrap w-full gap-2 text-sm">
              <div class="filter_pill">
                Under 40 Mins
              </div>
              <div class="filter_pill">
                Under 1 Hours
              </div>
              <div class="filter_pill">
                More than 1 Hrs
              </div>
            </div>
          </div>
          <!-- content -->
          <div class="my-2">
            <div class="overflow-x-auto">
              <div class="flex space-x-4 mb-2">
                <div
                  v-for="(each,n) in filteredMovies"
                  :key="n"
                  class="w-[240px] h-[340px] bg-gray-800 rounded-xl overflow-hidden"
                >
                  <img
                    :src="each.coverImg"
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          
          <span>Recently watch</span>
          <div class="my-2">
            <div class="overflow-x-auto">
              <div class="flex space-x-4 mb-2">
                <div
                  v-for="n in 10"
                  :key="n"
                  class="min-w-[220px] h-[130px] bg-gray-800 rounded-xl overflow-hidden"
                >
                  <img
                    :src="`https://picsum.photos/id/${n + 10}/200/300`"
                    class="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <span class="text-2xl font-semibold">
            New coming
          </span>
          <div class="my-2">
            <div class="overflow-x-auto">
              <div class="flex space-x-4 mb-2">

                <div v-for="n in 10" :key="n">
                  <div class="min-w-[260px] h-[150px] bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      :src="`https://picsum.photos/id/${n + 10}/200/300`"
                      class="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col my-2">
                    <span class="text-md">Movie title</span>
                    <div class="flex">
                      <div v-for="s in 3" :key="s">
                        <img class="me-1" src="/assets/images/icon/dashboard/full_star.svg" alt="">
                      </div>
                      <img class="me-1" src="/assets/images/icon/dashboard/half_star.svg" alt="">
                    </div>
                    <span class="text_sub">Length : 1hr 30m</span>
                    <div class="flex">
                      <img class="me-1" src="/assets/images/icon/dashboard/speaker.svg" alt="">
                      <span class="text_sub">EN / TH</span>
                    </div>
                  </div>
                </div>
      
              </div> 
            </div>
          </div>

          <span class="text-2xl font-semibold">
            Action
          </span>
          <div class="my-2">
            <div class="overflow-x-auto">
              <div class="flex space-x-4 mb-2">

                <div v-for="n in 10" :key="n">
                  <div class="min-w-[260px] h-[150px] bg-gray-800 rounded-xl overflow-hidden">
                    <img
                      :src="`https://picsum.photos/id/${n + 10}/200/300`"
                      class="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col mt-2">
                    <span class="text-md">Movie title</span>
                    <div class="flex">
                      <div v-for="s in 3" :key="s">
                        <img class="me-1" src="/assets/images/icon/dashboard/full_star.svg" alt="">
                      </div>
                      <img class="me-1" src="/assets/images/icon/dashboard/half_star.svg" alt="">
                    </div>
                    <span class="text_sub">Length : 1hr 30m</span>
                    <div class="flex">
                      <img class="me-1" src="/assets/images/icon/dashboard/speaker.svg" alt="">
                      <span class="text_sub">EN / TH</span>
                    </div>
                  </div>
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
definePageMeta({
  middleware: 'auth'
})

onMounted(() => {
  filterCat(0)
})

type Movie = {
  id: number
  name: string
  detail: string
  coverImg: string
  catId: number
}

const movList = ref<Movie[]>([
  {
      id: 1,
      name: 'Wendy',
      detail: 'detail1',
      coverImg: '/movies/mov1.png',
      catId: 1
  },
  {
      id: 2,
      name: 'Interstellar',
      detail: 'detail2',
      coverImg: '/movies/mov2.png',
      catId: 2
  },
  {
      id: 3,
      name: 'After',
      detail: 'detail3',
      coverImg: '/movies/mov3.png',
      catId: 2
  },
  {
      id: 4,
      name: 'After',
      detail: 'detail4',
      coverImg: '/movies/mov4.png',
      catId: 1
  },
  {
      id: 5,
      name: 'After',
      detail: 'detail5',
      coverImg: '/movies/mov5.png',
      catId: 2
  },
])


const openFilter = ref(false)

const filteredMovies = ref<Movie[]>([])

function filterCat(selectedCID: number = 0) {
    console.log('selectedCID:', selectedCID);
    if (selectedCID === 0) {
      filteredMovies.value = movList.value
    } else {
      filteredMovies.value = movList.value.filter(each => each.catId === selectedCID)
    }
  }

</script>

<style scoped>
</style>
