<template>
    <div class="px-12 py-12 bg-white">
        <section class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Inspired Designs</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 cursor-pointer">
                <div v-for="(service, index) in services" :key="index"
                    class="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                    <img :src="service.imageUrl" :alt="service.title" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800">{{ service.title }}</h3>
                        <p class="text-sm text-gray-600 mt-1">{{ service.deliveryTime }}</p>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-xl font-bold text-gray-900">From {{ service.price }}</span>
                            <div class="flex items-center">
                                <span class="text-yellow-400 scale-75">
                                    <Star />
                                </span>
                                <span class="ml-1 text-sm text-gray-700">{{ service.rating }} ({{ service.reviews
                                    }})</span>
                            </div>
                        </div>
                        <div class="flex items-center mt-4 pt-4 border-t border-gray-200">
                            <img :src="service.profilePic" :alt="service.name"
                                class="w-8 h-8 rounded-full object-cover mr-2">
                            <div>
                                <p class="text-sm font-medium text-gray-800">{{ service.name }}</p>
                                <p v-if="service.topRated" class="text-xs text-green-600 font-semibold">Top Rated Plus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';

// ข้อมูล Mock-up สำหรับการ์ด
const services = [
    {
        title: 'Expert-Crafted Logo Design with Unlimited Revisions',
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80',
        deliveryTime: '1 day delivery',
        price: '$35',
        rating: '5.0',
        reviews: 2276,
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
        name: 'Adam M.',
        topRated: true
    },
    {
        title: 'Modern Logo Design, Modern Logo with Multiple Concepts',
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80',
        deliveryTime: '1 day delivery',
        price: '$25',
        rating: '5.0',
        reviews: 3739,
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
        name: 'Jane D.',
        topRated: true
    },
    {
        title: 'An engaging Presentation in PowerPoint/Google slides/Keynote',
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80',
        deliveryTime: '2 day delivery',
        price: '$50',
        rating: '4.9',
        reviews: 5312,
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
        name: 'John S.',
        topRated: true
    },
    {
        title: 'A great PowerPoint template to feature your message with impact',
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1170&q=80',
        deliveryTime: '3 day delivery',
        price: '$99',
        rating: '4.8',
        reviews: 8125,
        profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
        name: 'Peter J.',
        topRated: true
    }
];
</script>