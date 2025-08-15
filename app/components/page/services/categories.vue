<template>
    <div>
        <section class="p-12 bg-white relative">
            <h1 class="font-bold text-4xl mb-6">Shop by category</h1>

            <!-- Carousel Wrapper -->
            <div class="relative">
                <!-- Previous Button -->
                <button @click="prev"
                    class="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition disabled:opacity-30 z-10"
                    :disabled="currentIndex === 0" aria-label="Previous">
                    <ChevronLeft class="w-6 h-6 text-white" />
                </button>


                <!-- Next Button -->
                <button @click="next"
                    class="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-blue-500 hover:bg-blue-600 transition disabled:opacity-30 z-10"
                    :disabled="currentIndex >= maxIndex" aria-label="Next">
                    <ChevronRight class="w-6 h-6 text-white" />
                </button>


                <!-- Cards Wrapper -->
                <div class="overflow-hidden py-2 w-full" @touchstart="onTouchStart" @touchmove="onTouchMove"
                    @touchend="onTouchEnd">
                    <div class="flex transition-transform duration-300"
                        :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }">
                        <div v-for="cat in categories" :key="cat.id"
                            class="bg-gray-100 w-[270px] flex-shrink-0 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer group mr-8">
                            <div class="overflow-hidden">
                                <img class="w-full h-48 object-cover" :src="cat.image" :alt="cat.title" />
                            </div>
                            <div
                                class="px-3 py-6 font-medium text-xl text-zinc-800 bg-white transition group-hover:text-blue-500">
                                {{ cat.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { ref, markRaw, computed } from 'vue'

interface Category {
    id: number
    title: string
    image: string
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
    })
])




// Carousel config
const cardWidth = 274 // 270px + margin
const visibleCount = 3
const currentIndex = ref<number>(0)

const maxIndex = computed(() => {
    return categories.value.length - visibleCount
})

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const next = () => {
    if (currentIndex.value <= maxIndex.value - 1) {
        currentIndex.value++
    }
}

let startX = 0
let endX = 0

const onTouchStart = (e: TouchEvent) => {
    const touch = e.touches?.[0]
    if (touch) {
        startX = touch.clientX
    }
}

const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches?.[0]
    if (touch) {
        endX = touch.clientX
    }
}

const onTouchEnd = () => {
    const diff = startX - endX
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            next()
        } else {
            prev()
        }
    }
    startX = 0
    endX = 0
}
</script>