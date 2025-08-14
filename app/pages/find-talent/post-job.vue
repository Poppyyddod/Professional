<template>
    <div class="flex flex-col">
        <!-- Hero 1 -->
        <PagePostJobHero1Section />

        <!-- Partners -->
        <section class="flex items-center px-12 gap-4 h-16">
            <!-- Title -->
            <p class="text-gray-500 text-sm m-0 whitespace-nowrap flex-shrink-0 w-1/12">TRUSTED BY</p>

            <!-- Logos -->
            <div class="flex justify-between flex-1">
                <img v-for="item in trusteds" :key="item.id" :src="item.img" alt="Trusted logo"
                    class="w-12 h-12 object-cover rounded" />
            </div>
        </section>

        <!-- Statistics + Jobs -->
        <section class="bg-gray-100 px-12 py-12 mt-12">
            <div class="w-full flex justify-between items-start gap-8">
                <!-- Left: Title & Description -->
                <div class="flex flex-col w-6/12 gap-4">
                    <h2 class="text-5xl font-bold text-zinc-900">The best colleagues you’ve never met</h2>
                    <p class="text-xl text-gray-700">
                        Logo designers. App developers. Customer support gurus. Marketing agencies. Make the right
                        connection and it’ll last a lifetime.
                    </p>
                </div>

                <!-- Right: Rating & Skills -->
                <div class="flex gap-12">
                    <!-- Rating Box -->
                    <div class="flex flex-col items-start gap-2">
                        <div class="flex items-center gap-2">
                            <p class="text-4xl font-bold">4.9</p>
                            <Star color="yellow" v-for="num in 5" :key="num" />
                        </div>
                        <p class="text-sm text-gray-500">Average rating of talent from 2M+ reviews</p>
                    </div>

                    <!-- Skills Box -->
                    <div class="flex flex-col items-start gap-2">
                        <p class="text-4xl font-bold">8K+</p>
                        <p class="text-sm text-gray-500">Skills represented by talent on Upwork.</p>
                    </div>
                </div>
            </div>

            <!-- Jobs Grid -->
            <div class="grid gap-4 mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div v-for="job in jobs" :key="job.id"
                    class="bg-white shadow-md hover:shadow-xl cursor-pointer p-4 rounded-[10px] h-24 flex items-center gap-4">
                    <img :src="job.logo" alt="Job Logo" class="w-16 h-16 object-contain" />
                    <div class="flex flex-col justify-center">
                        <p class="font-bold text-lg">{{ job.name }}</p>
                        <p class="text-sm text-gray-500">{{ job.amount }} posts</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Hero 2 -->
        <section class="flex justify-between p-12 flex-row-reverse">
            <!-- Details -->
            <div class="flex justify-evenly flex-col w-5/12 text-zinc-900">
                <h1 class="text-4xl font-bold">Post today, hire tomorrow</h1>
                <p class="text-xl">
                    We've got you covered from idea to delivery. Post your job and you'll start getting proposals. Once
                    you've found your expert, you can talk timings, availability, and prices before going ahead.
                </p>
                <button class="btn-brand-blue w-4/12 p-3 text-xl">Post a job</button>
            </div>

            <!-- Image -->
            <div>
                <img src="https://static.vecteezy.com/system/resources/previews/004/652/447/non_2x/close-up-business-woman-using-calculator-and-laptop-for-do-math-finance-on-wooden-desk-in-office-and-business-working-background-tax-accounting-statistics-and-analytic-research-concept-free-photo.jpg"
                    alt="image" width="650" height="650" />
            </div>
        </section>

        <!-- Hero -->
        <section class="flex flex-col justify-between p-12">
            <!-- Details -->
            <div class="flex justify-evenly flex-col text-zinc-900">
                <h4 class="text-4xl font-bold">You’re in good company</h4>
                <p class="text-xl mt-3">
                    Millions of companies, big and small, use Upwork to get great work done. Join them today.
                </p>
            </div>

            <div class="grid gap-4 mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div v-for="num in 3" :key="num"
                    class="bg-white shadow-md hover:shadow-xl cursor-pointer p-6 rounded-[10px] h-auto flex items-start gap-4">
                    <div class="flex flex-col justify-between w-full">
                        <p class="font-bold text-lg whitespace-normal break-words w-full">
                            lwindcss/tailwind.css, /assets/css/main.css, /pages/find-talent/post-job.vue?macro=true,
                            /@id/virtual:nuxt:D%3A%2FProgram%20install%2FGit%2FGithub%2Fother_project%2FProfessional%2F.nuxt%2Froutes.mjs
                        </p>
                        <ArrowRight class="text-blue-500" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Star, ArrowRight } from 'lucide-vue-next'

const trusteds = ref([
    { id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    // { id: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    // { id: 6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
])

const jobs = ref([
    { id: 1, name: "UI/UX Designer", amount: 12, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 2, name: "Frontend Developer", amount: 8, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 3, name: "Backend Developer", amount: 5, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 4, name: "Marketing Specialist", amount: 3, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 5, name: "Customer Support", amount: 7, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" },
    { id: 6, name: "Project Manager", amount: 2, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgqhB3HC4-MpEPQ9mOMXQ6JlQg2koqsi4ImA&s" }
])
</script>
