<template>
    <div class="main_card">
        <div class="main_inner_card">
            <div class="h-[76dvh] overflow-y-auto md:h-[93dvh] p-2">

                <div>
                    <div class="flex items-center sticky top-0 bg-black pb-2 px-4">
                        <img src="assets/images/icon/sidebar/bell.svg" class="h-5 me-3" alt="Live Icon" />
                        <span class="text-2xl font-semibold">
                            Notifications
                        </span>
                    </div>

                    <div v-for="(each, idx) in tabValue" :key="idx" class="mb-2">
                        <div v-if="openTabMap[each.id]" @click="toggleTab(each.id)" class="cursor-pointer">
                            <div class="bg-[#111111] rounded-xl px-3 py-2">
                                <div class="flex justify-between items-center">
                                    <div class="mb-2">New movie has been added!</div>
                                    <div class="rounded-full bg-[#FFB700] w-3 h-3"></div>
                                </div>
                                <div class="grid grid-cols-8">
                                    <div class="col-span-1">
                                        <img src="public/movies/mov1.png" class="cursor-default w-full" alt="Live Icon" />
                                    </div>
                                    <div class="col-span-7 ps-3 flex flex-col justify-between">
                                        <p class="text-sm text-[#FFFFFFCC]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium velit aspernatur ipsum nesciunt laborum quae dignissimos, odit molestiae? Quidem placeat totam distinctio eligendi nulla. Doloremque quisquam fugiat voluptatum unde reprehenderit.</p>
                                        <button type="button" class="bg-[#9D6400] px-2 py-1 rounded-xl hover:bg-[#d1a65dff]">
                                            watch now
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div v-else @click="toggleTab(each.id)" class="cursor-pointer">
                            <div class="bg-[#111111] rounded-xl px-3 py-2">
                                <div class="flex justify-between items-center">
                                    <div class="mb-2">New movie has been added!</div>
                                    <div class="rounded-full bg-[#FFFFFF66] w-3 h-3"></div>
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
    const tabValue = ref([
        {
            id: 1,
            title: 'Movie A',
            detail: 'ssssss'
        },
        {
            id: 2,
            title: 'Movie B',
            detail: 'ssssss 2'
        }
    ])

    const openTabMap = ref<Record<number, boolean>>({
        [tabValue.value[0].id]: true
    })

    // toggle function
    function toggleTab(id: number) {
        openTabMap.value[id] = !openTabMap.value[id]
    }
</script>

<style scoped>
</style>