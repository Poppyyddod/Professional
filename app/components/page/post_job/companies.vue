<template>
    <div>
        <section class="p-6 md:p-12">
            <div class="mb-8 text-center">
                <h4 class="text-3xl font-bold md:text-4xl">You’re in good company</h4>
                <p class="mt-3 text-base md:text-xl">
                    Millions of companies, big and small, use Upwork to get great work done. Join them today.
                </p>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div v-for="num in 4" :key="num"
                    class="bg-white shadow-md hover:shadow-xl cursor-pointer p-6 rounded-xl flex flex-col justify-between items-start transition-shadow duration-200">
                    <p class="font-bold text-lg leading-snug break-words mb-4">
                        Here's some example text to show how the card looks. The `break-words` class ensures long text
                        doesn't overflow.
                    </p>
                    <div class="mt-auto">
                        <ArrowRight class="text-blue-500 w-6 h-6" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>