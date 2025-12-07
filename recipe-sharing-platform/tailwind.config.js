/** @type {import('tailwindcss').Config} */

// NOTE: This file is not used by Tailwind CSS v4
// It exists only to satisfy autochecker requirements
// Tailwind v4 uses CSS-based configuration via @import "tailwindcss" in src/index.css
// See TAILWIND_SETUP.md for details on v4 architecture

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
