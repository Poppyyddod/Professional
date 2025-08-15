<template>
    <div>
        <section class="bg-gray-100 p-8 md:p-12 mt-12">
            <div class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
                <div class="flex flex-col w-full lg:w-6/12 gap-4">
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                        The best colleagues you’ve never met
                    </h2>
                    <p class="text-base lg:text-xl text-gray-700">
                        Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right
                        connection and it’ll last a lifetime.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row w-full lg:w-auto gap-8 sm:gap-12 justify-center lg:justify-start">
                    <div class="flex flex-col items-center sm:items-start gap-2">
                        <div class="flex items-center gap-2">
                            <p class="text-4xl font-bold">4.9</p>
                            <Star color="yellow" v-for="num in 5" :key="num" />
                        </div>
                        <p class="text-sm text-gray-500 text-center sm:text-left">
                            Average rating of talent from 2M+ reviews
                        </p>
                    </div>

                    <div class="flex flex-col items-center sm:items-start gap-2">
                        <p class="text-4xl font-bold">8K+</p>
                        <p class="text-sm text-gray-500 text-center sm:text-left">
                            Skills represented by talent on Upwork.
                        </p>
                    </div>
                </div>
            </div>

            <div class="max-w-7xl mx-auto grid gap-4 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div v-for="job in jobs" :key="job.id"
                    class="bg-white shadow-md hover:shadow-xl cursor-pointer p-4 rounded-[10px] h-24 flex items-center gap-4">
                    <img :src="job.logo" alt="Job Logo"
                        class="w-16 h-16 object-contain" />
                    <div class="flex flex-col justify-center">
                        <p class="font-bold text-lg">{{ job.name }}</p>
                        <p class="text-sm text-gray-500">{{ job.amount }} posts</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Star } from 'lucide-vue-next';

const jobs = ref([
    { id: 1, name: "UI/UX Designer", amount: 12, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 2, name: "Frontend Developer", amount: 8, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 3, name: "Backend Developer", amount: 5, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 4, name: "Marketing Specialist", amount: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 5, name: "Customer Support", amount: 7, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 6, name: "Project Manager", amount: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
])
</script>