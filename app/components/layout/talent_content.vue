<template>
  <div>
    <div class="mx-auto px-6 py-8">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-4 space-y-2">
          <div v-for="(item, index) in menuItems" :key="index" class="group cursor-pointer"
            :class="{ 'bg-gray-50': selectedMenuItem === index }" @click="selectedMenuItem = index">
            <div class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div>
                <h3 class="font-medium text-gray-900">{{ item.title }}</h3>
                <p class="text-green-600 font-medium text-sm">{{ item.subtitle }}</p>
              </div>
              <ChevronRight class="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
            </div>
          </div>
        </div>

        <div class="col-span-8 pl-8 border-l border-gray-200">
          <div class="mb-6">
            <div class="w-12 h-1 bg-blue-500 rounded mb-4"></div>
            <h2 class="text-xl font-semibold text-gray-900 mb-3">
              {{ menuItems[selectedMenuItem]?.subtitle }}
              <span class="text-xs align-top ml-1">™</span>
            </h2>
          </div>

          <div v-if="selectedMenuItem === 0">
            <div class="grid grid-cols-2 gap-6">
              <div class="space-y-3"> 
                <a v-for="category in talentCategories" :key="category" href="#"
                  class="block text-gray-700 hover:bg-gray-300 font-medium p-2 rounded-lg ">
                  {{ category }}
                </a>
              </div>
            </div>
          </div>

          <div v-else-if="selectedMenuItem === 1">
            <div class="grid grid-cols-3 gap-4">
              <div v-for="project in projectCatalogItems" :key="project.title"
                class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div class="h-32" :class="project.imageBg"></div>
                <div class="p-4">
                  <h3 class="font-medium text-gray-900 text-center">{{ project.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="text-center py-8">
              <h3 class="text-lg font-medium text-gray-900">Expert Consultations</h3>
              <p class="text-gray-600 mt-2">Get personalized advice from industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>const selectedMenuItem = ref(0)

const menuItems = [
  {
    title: "Post a job and hire a pro",
    subtitle: "Talent Marketplace",
    description: "Learn about working with talent or explore your specific hiring needs.",
    ctaText: "Hire on Talent Marketplace"
  },
  {
    title: "Browse and buy projects",
    subtitle: "Project Catalog",
    description: "Browse and buy projects that have a clear scope and price.",
    ctaText: "Browse Project Catalog"
  },
  {
    title: "Get advice from an industry expert",
    subtitle: "Consultations",
    description: "Get personalized guidance from experienced professionals.",
    ctaText: "Book a Consultation"
  }
]

const talentCategories = [
  "Development & IT",
  "Design & Creative",
  "Sales & Marketing",
  "Writing & Translation",
  "Admin & Customer Support",
  "Finance & Accounting",
  "HR & Training",
  "Legal",
  "Engineering & Architecture",
  "Hire freelancers"
]

const projectCatalogItems = [
  { title: "Logo Design", imageBg: "bg-gradient-to-br from-pink-200 to-purple-200" },
  { title: "Articles & Blog Posts", imageBg: "bg-gradient-to-br from-blue-200 to-green-200" },
  { title: "WordPress", imageBg: "bg-gradient-to-br from-yellow-200 to-orange-200" },
  { title: "Social Media Management", imageBg: "bg-gradient-to-br from-green-300 to-teal-300" },
  { title: "Video Editing", imageBg: "bg-gradient-to-br from-purple-200 to-blue-200" },
  { title: "SEO", imageBg: "bg-gradient-to-br from-gray-300 to-gray-400" }
]

</script>

<style></style>