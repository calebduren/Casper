import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./*.hbs", "./partials/**/*.hbs", "./assets/ts/**/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
