import type { Config } from "tailwindcss";

const config: Config = {
  // 這裡確保 shadcn 的組件也能被讀取到樣式
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // 如果你手動加了 lib 或其他資料夾，也要記得補在這裡
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        // 你可以把你的主題色直接定義在這裡，方便以後使用
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite', // 這是常見的慢速旋轉名稱
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // shadcn 常用動畫插件
};

export default config;