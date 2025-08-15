<template>
    <div
        class="bg-gray-100 flex-shrink-0 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer group">
        <div class="overflow-hidden w-[200px]">
            <img class="w-full h-48 object-cover" :src="category.image" :alt="category.title" />
        </div>
        <div
            class="px-3 py-6 font-medium text-lg text-zinc-800 text-center bg-white transition group-hover:text-blue-500 h-[80px] flex items-center justify-center">
            {{ category.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Category {
    id: number;
    title: string;
    image: string;
}

defineProps<{
    category: Category;
}>();
</script>