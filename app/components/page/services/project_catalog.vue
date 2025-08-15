<template>
    <div>
        <section class="p-12 w-full">
            <div class="bg-blue-700 text-white p-8 lg:p-12 rounded-[10px]">
                <div class="w-full lg:w-5/12">
                    <h1 class="text-2xl font-bold">Project Catalog™</h1>
                    <h2 class="text-4xl lg:text-5xl mt-4 font-bold">
                        Clear scope.
                        <br />
                        Upfront price.
                        <br />
                        No surprises.
                    </h2>
                    <p class="mt-8 text-base lg:text-lg">
                        Complete your most pressing work with Project Catalog. Browse and buy predefined projects in
                        just a few clicks.
                    </p>
                    <div class="mt-8 relative">
                        <div class="bg-white flex items-center p-2 rounded-[10px]">
                            <Search color="black" class="ml-2" />
                            <input type="text" class="text-black flex-1 p-2 focus:outline-none"
                                placeholder="Search for projects" v-model="searchQuery" @input="filterResults"
                                @focus="isPopupVisible = true" @blur="isPopupVisible = false" />
                            <CircleX v-if="searchQuery" @click="clearSearch" color="black"
                                class="mr-2 cursor-pointer" />
                        </div>

                        <div v-if="isPopupVisible && filteredResults.length"
                            class="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-20">
                            <ul class="py-2 max-h-64 overflow-y-auto">
                                <li v-for="(result, index) in filteredResults" :key="index"
                                    class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                                    @mousedown.prevent="selectResult(result)">
                                    {{ result.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search, CircleX } from 'lucide-vue-next';

// Data Mockup
const searchData = [
    { name: 'Logo Design' },
    { name: 'Website Development' },
    { name: 'Mobile App Design' },
    { name: 'SEO Optimization' },
    { name: 'Social Media Management' },
    { name: 'Content Writing' },
    { name: 'Video Editing' },
    { name: 'UI/UX Design' },
    { name: 'PowerPoint Presentation' },
    { name: 'Data Entry' },
];

const searchQuery = ref('');
const isPopupVisible = ref(false);
const filteredResults = ref(searchData);

const filterResults = () => {
    if (searchQuery.value) {
        filteredResults.value = searchData.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    } else {
        filteredResults.value = searchData;
    }
};

const clearSearch = () => {
    searchQuery.value = '';
    filteredResults.value = searchData;
};

const selectResult = (result: { name: string }) => {
    searchQuery.value = result.name;
    isPopupVisible.value = false;
};
</script>