<template>
  <div class="relative" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <div
      class="flex gap-2 items-center cursor-pointer max-w-7xl mx-auto px-4 py-2 hover:text-blue-500 transition-colors duration-200">
      <h2 class="font-medium">{{ title }}</h2>
      <ChevronUp v-if="isHover" class="transition-transform duration-200" />
      <ChevronDown v-else class="transition-transform duration-200" />
    </div>

    <div v-if="isHover" class="absolute left-0 top-full w-full z-10">
      <div class="fixed left-0 w-screen bg-white border-t border-gray-200 shadow-md">
        <div class="py-6">
          <slot name="hover-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const isHover = ref(false)
defineProps<{
  title?: string
}>()
</script>

<style></style>
