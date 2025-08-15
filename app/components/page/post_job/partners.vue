<template>
    <div class="px-4 lg:px-12 py-6">
        <section class="max-w-7xl mx-auto flex items-center flex-col sm:flex-row gap-4 h-auto">
            <p class="text-gray-500 text-sm font-semibold whitespace-nowrap flex-shrink-0 text-center sm:text-left">
                TRUSTED BY
            </p>

            <div class="flex justify-center sm:justify-between flex-wrap gap-x-8 gap-y-4 flex-1">
                <img v-for="item in trusteds" :key="item.id" :src="item.img" :alt="item.alt"
                    class="w-auto h-8 sm:h-10 object-contain rounded" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const trusteds = ref([
    { id: 1, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "L.L. Bean logo" },
    { id: 2, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "PayPal logo" },
    { id: 3, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "Bayer logo" },
    { id: 4, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg", alt: "Cisco logo" },
]);
</script>