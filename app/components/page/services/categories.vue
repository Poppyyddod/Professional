<template>
    <div>
        <section class="p-12 bg-white relative">
            <h1 class="font-bold text-4xl mb-6">Shop by category</h1>

            <div class="relative">
                <button @click="prev"
                    class="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition disabled:opacity-30 z-10"
                    :disabled="currentIndex === 0" aria-label="Previous">
                    <ChevronLeft class="w-6 h-6 text-white" />
                </button>

                <button @click="next"
                    class="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition disabled:opacity-30 z-10"
                    :disabled="currentIndex >= maxIndex" aria-label="Next">
                    <ChevronRight class="w-6 h-6 text-white" />
                </button>

                <div class="overflow-hidden py-2 w-full" @touchstart="onTouchStart" @touchmove="onTouchMove"
                    @touchend="onTouchEnd">
                    <div class="flex transition-transform duration-300"
                        :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
                        <div v-for="cat in categories" :key="cat.id" class="w-[270px] mr-8">
                            <UiCardCategory :category="cat" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { ref, markRaw } from 'vue';

interface Category {
    id: number;
    title: string;
    image: string;
}

const categories = ref<Category[]>([
    markRaw({
        id: 1,
        title: 'Web Development',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 2,
        title: 'Graphic Design',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 3,
        title: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 4,
        title: 'Video Editing',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 5,
        title: 'Content Writing',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 6,
        title: 'App Development',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 7,
        title: 'Social Media Management',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 8,
        title: 'Digital Marketing',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 9,
        title: 'Photography',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
    markRaw({
        id: 10,
        title: 'Animation',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80'
    }),
])

const cardWidth = 274;
const visibleCount = 3;
const { currentIndex, next, prev, onTouchStart, onTouchMove, onTouchEnd, maxIndex } = useCarousel(
    categories.value.length,
    visibleCount,
    cardWidth
);
</script>