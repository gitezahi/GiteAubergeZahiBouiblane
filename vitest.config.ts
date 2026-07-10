import { defineConfig } from "vite"; // ✅ تم التغيير هنا لتجنب تعارض الأنواع
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/GiteAubergeZahiBouiblane/",
  
  plugins: [react()],
  // @ts-ignore - لتخطي فحص التايب سكريبت الخاص بإعدادات التست مؤقتاً
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: { 
      "@": path.resolve(__dirname, "./src") 
    },
  },
});