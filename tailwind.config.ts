  import type { Config } from 'tailwindcss'
  import colors from 'tailwindcss/colors'

  export default {
    content: [
      "./components/**/*.{vue,js,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./composables/**/*.{js,ts}",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue"
    ],
    theme: {
      extend: {
        colors: {
          'brand-blue': colors.blue
        }
      },
    },
    plugins: [],
  } satisfies Config
