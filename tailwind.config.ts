import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                pink: "#ff0099",
                teal: "#009688",
                gray: {
                    25: "#e0e1e3",
                    50: "#dadddf",
                    100: "#cacccf",
                    200: "#b8babb",
                    300: "#a0a1a4",
                    400: "#86888a",
                    500: "#717274",
                    600: "#595a5c",
                    700: "#434648",
                    800: "#212225",
                    900: "#111214",
                },
            },
        },
    },
    plugins: [],
};
export default config;
