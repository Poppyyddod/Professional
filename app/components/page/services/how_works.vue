<template>
    <div>
        <section class="px-12 bg-white">
            <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <!-- Left Column -->
                <div class="space-y-8">
                    <h2 class="text-4xl font-bold">How it works</h2>

                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <Eye class="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                                <h3 class="font-semibold text-lg">Browse</h3>
                                <p class="text-gray-600">
                                    Find the type of work you need, clearly defined and ready to start.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <ShoppingCart class="w-6 h-6 text-green-500 mt-1" />
                            <div>
                                <h3 class="font-semibold text-lg">Buy</h3>
                                <p class="text-gray-600">
                                    Work begins as soon as you purchase and provide requirements.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <Check class="w-6 h-6 text-emerald-500 mt-1" />
                            <div>
                                <h3 class="font-semibold text-lg">Approve</h3>
                                <p class="text-gray-600">
                                    Receive your project by a set deadline. Review, approve, and pay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column -->
                <div class="flex justify-end relative">
                    <div class="w-full max-w-md">
                        <img src="https://www.upwork.com/static/assets/CatalogApp/img/projects.0649863.svg"
                            alt="Project illustration" class="w-full h-auto" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Eye, ShoppingCart, Check } from 'lucide-vue-next'
</script>