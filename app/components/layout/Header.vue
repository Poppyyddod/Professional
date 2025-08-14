<template>
    <header class="shadow-md">
        <div class="p-6 flex items-center gap-10">
            <h1 class="text-xl font-bold">Professional</h1>

            <UiDropdown title="Find talent">
                <template #hover-content>
                    <LayoutTalentContent />
                </template>
            </UiDropdown>

            <UiDropdown title="Find work">
                <template #hover-content>
                    <div class="p-10">
                        <h1>Post a job and hire a pro</h1>
                        <h1>Talent Marketplace</h1>
                    </div>
                </template>
            </UiDropdown>

            <UiDropdown title="Why professional" />

            <h2>Enterprise</h2>
            <h2>Pricing</h2>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedMenuItem = ref(0)

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

const talentCategories = {
    left: [
        "Development & IT",
        "Design & Creative",
        "Sales & Marketing",
        "Writing & Translation",
        "Admin & Customer Support"
    ],
    right: [
        "Finance & Accounting",
        "HR & Training",
        "Legal",
        "Engineering & Architecture",
        "Hire freelancers"
    ]
}

const projectCatalogItems = [
    { title: "Logo Design", imageBg: "bg-gradient-to-br from-pink-200 to-purple-200" },
    { title: "Articles & Blog Posts", imageBg: "bg-gradient-to-br from-blue-200 to-green-200" },
    { title: "WordPress", imageBg: "bg-gradient-to-br from-yellow-200 to-orange-200" },
    { title: "Social Media Management", imageBg: "bg-gradient-to-br from-green-300 to-teal-300" },
    { title: "Video Editing", imageBg: "bg-gradient-to-br from-purple-200 to-blue-200" },
    { title: "SEO", imageBg: "bg-gradient-to-br from-gray-300 to-gray-400" }
]
</script>