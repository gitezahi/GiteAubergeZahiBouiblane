import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url"; // 1️⃣ أضف هذا السطر في الأعلى

// 2️⃣ أضف هذين السطرين لتعريف المسار بدلاً من __dirname القديم
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/GiteAubergeZahiBouiblane/", // المسار الفرعي للمستودع
  
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { 
      "@": path.resolve(__dirname, "./src") // سيعمل هذا الآن 100% بدون أخطاء
    },
  },
});
