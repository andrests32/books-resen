import type { Config } from "tailwindcss"

export default {
    darkMode: "class",

    content: [
        "./src/**/*.{astro,html,js,ts,jsx,tsx,vue,svelte}",
    ],

    theme: {
        extend: {

            /* =========================
               COLORS
            ========================= */
            colors: {

                /* PRIMARY */
                primary: {
                    100: "var(--color-primary-100)",
                    400: "var(--color-primary-400)",
                    600: "var(--color-primary-600)",
                },

                /* BACKGROUNDS */
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                muted: "var(--color-muted-bg)",

                /* TEXT */
                text: {
                    DEFAULT: "var(--color-text)",
                    muted: "var(--color-text-muted)",
                    light: "var(--color-text-light)",
                },

                /* BORDERS */
                border: "var(--color-border)",
                divider: "var(--color-divider)",

                /* ACCENTS */
                accent: "var(--color-accent)",
                "accent-gray": "var(--color-accent-gray)",
                highlight: "var(--color-highlight)",

                /* BLACKS */
                black: {
                    elegant: "var(--color-black-elegant)",
                    soft: "var(--color-black-soft)",
                },

                /* GRAYS (dark ready) */
                gray: {
                    1: "var(--color-gray-1)",
                    2: "var(--color-gray-2)",
                    3: "var(--color-gray-3)",
                    4: "var(--color-gray-4)",
                    5: "var(--color-gray-5)",
                    6: "var(--color-gray-6)",
                    text: "var(--color-gray-text)",
                    muted: "var(--color-gray-text-muted)",
                },
            },

            /* =========================
               FONTS
            ========================= */
            fontFamily: {
                primary: ["var(--font-primary)"],
                text: ["var(--font-text)"],
                accent: ["var(--font-accent)"],
            },

        },
    },

    plugins: [require("@tailwindcss/typography")],
} satisfies Config