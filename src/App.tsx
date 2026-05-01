import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        {/* تم ضبط basename ليتوافق تماماً مع مسار GitHub Pages الخاص بك */}
        <BrowserRouter basename="/GiteAubergeZahiBouiblane">
          <div className="flex flex-col min-h-screen">
            <AnnouncementBar />
            <Routes>
              {/* إضافة عدة مسارات لضمان ظهور الصفحة الرئيسية تحت أي ظرف */}
              <Route path="/" element={<Index />} />
              <Route path="/index" element={<Index />} />
              <Route path="/GiteAubergeZahiBouiblane" element={<Index />} />
              
              {/* صفحة الخطأ تظهر فقط إذا كان المسار غير موجود تماماً */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

export default App;