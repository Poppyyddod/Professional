<template>
    <div class="px-12 py-12 bg-white">
        <section class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Browse all categories</h2>

            <div class="relative">
                <button @click="scrollTabs('prev')"
                    class="absolute -left-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10 transition-opacity duration-300"
                    :class="{ 'opacity-0 pointer-events-none': isStart }">
                    <ChevronLeft class="w-5 h-5 text-gray-700" />
                </button>
                <button @click="scrollTabs('next')"
                    class="absolute -right-4 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10 transition-opacity duration-300"
                    :class="{ 'opacity-0 pointer-events-none': isEnd }">
                    <ChevronRight class="w-5 h-5 text-gray-700" />
                </button>

                <nav class="border-b border-gray-200 mb-8 overflow-x-hidden whitespace-nowrap scroll-smooth"
                    ref="tabsContainer">
                    <ul class="flex space-x-6">
                        <li v-for="category in categories" :key="category.name"
                            class="pb-2 cursor-pointer transition-colors duration-200" :class="{
                                'font-bold text-black border-b-2 border-black': activeCategory?.name === category.name,
                                'text-gray-500 hover:text-black': activeCategory?.name !== category.name
                            }" @click="toggleItems(category)">
                            {{ category.name }}
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="(item, index) in limitedItems" :key="index">
                    <a href="#" class="text-gray-700 hover:text-black transition-colors duration-200">
                        {{ item.name }}
                    </a>
                </div>
                <div v-if="activeCategory && activeCategory.items.length > 5 && !activeCategory.isMore"
                    class="col-span-2 md:col-span-1 flex items-center">
                    <button @click="activeCategory.isMore = true"
                        class="text-green-600 hover:text-green-700 font-medium text-left">
                        Show more ({{ activeCategory.items.length - 5 }})
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { ref, computed, watchEffect, onMounted } from 'vue';

interface Category {
    name: string;
    items: { name: string }[];
    isMore: boolean;
}

const categories = ref([
    {
        name: 'Design',
        items: [
            { name: 'Album Cover Design' },
            { name: 'Book Design' },
            { name: 'Brochure Design' },
            { name: 'Cartoons & Comics' },
            { name: 'Flyer Design' },
            { name: 'Infographic Design' },
            { name: 'Logo Design' },
            { name: 'Poster Design' },
            { name: 'Social Media Design' }
        ],
        isMore: false
    },
    {
        name: 'Video & Audio',
        items: [
            { name: 'Video Editing' },
            { name: 'Voice Over' },
            { name: 'Animation' },
            { name: 'Podcast Editing' },
            { name: 'Short Video Ads' },
            { name: 'Music Production' },
            { name: 'Music Editing' },
            { name: 'Music Composition' }
        ],
        isMore: false
    },
    {
        name: 'Development & IT',
        items: [
            { name: 'Web Development' },
            { name: 'Mobile Apps' },
            { name: 'eCommerce' },
            { name: 'AI Development' },
            { name: 'Game Development' },
            { name: 'UX/UI Design' },
            { name: 'Software Development' },
            { name: 'Cybersecurity' }
        ],
        isMore: false
    },
    {
        name: 'Marketing',
        items: [
            { name: 'Social Media Marketing' },
            { name: 'SEO' },
            { name: 'Content Marketing' },
            { name: 'Email Marketing' },
            { name: 'SEM' },
            { name: 'PPC' },
            { name: 'Digital Marketing' },
            { name: 'Brand Marketing' }
        ],
        isMore: false
    }
] as Category[]);

const activeCategory = ref(categories.value[0]);
const tabsContainer = ref<HTMLElement | null>(null);
const isStart = ref(true);
const isEnd = ref(false);

const scrollTabs = (direction: 'next' | 'prev') => {
    if (tabsContainer.value) {
        const scrollAmount = 150;
        if (direction === 'next') {
            tabsContainer.value.scrollLeft += scrollAmount;
        } else {
            tabsContainer.value.scrollLeft -= scrollAmount;
        }
    }
};

const checkScrollPosition = () => {
    if (tabsContainer.value) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsContainer.value;
        isStart.value = scrollLeft <= 0;
        isEnd.value = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
    }
};

const toggleItems = (category: Category) => {
    if (activeCategory.value) {
        activeCategory.value.isMore = false;
    }
    activeCategory.value = category;
};

const limitedItems = computed(() => {
    if (!activeCategory.value) {
        return [];
    }
    return activeCategory.value.isMore
        ? activeCategory.value.items
        : activeCategory.value.items.slice(0, 5);
});

watchEffect(() => {
    if (activeCategory.value) {
        activeCategory.value.isMore = false;
    }
});

onMounted(() => {
    if (tabsContainer.value) {
        tabsContainer.value.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition();
    }
});
</script>