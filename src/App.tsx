import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// تغيير الاستيراد هنا من BrowserRouter إلى HashRouter
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider } from "@/i18n/I18nContext";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#7c8a71] text-white py-3 overflow-hidden whitespace-nowrap border-b border-black/10 relative z-[9999]">
      <div className="inline-block animate-marquee px-4">
        <span className="mx-10 text-sm md:text-base font-medium">🏔️ مأوى زاهي.. نافذتكم على جبال بويبلان الساحرة 🏔️</span>
        <span className="mx-10 text-sm md:text-base font-medium">📱 للوصول إلينا بسرعة، أضف الموقع لشاشتك الرئيسية</span>
        <span className="mx-10 text-sm md:text-base font-medium">🏠 نرحب بكم في قلب الطبيعة والأصالة الأطلسية</span>
        <span className="mx-10 text-sm md:text-base font-medium">🏔️ مأوى زاهي.. نافذتكم على جبال بويبلان الساحرة 🏔️</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* الحل الجذري: استخدام HashRouter بدلاً من BrowserRouter */}
        {/* لاحظ أننا لم نعد بحاجة لـ basename هنا لأن الهاش يتعامل مع المسارات تلقائياً */}
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <AnnouncementBar />
            <Routes>
              {/* مسار واحد فقط للصفحة الرئيسية يكفي الآن */}
              <Route path="/" element={<Index />} />
              
              {/* أي مسار غير معروف سيوجه لصفحة 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;

