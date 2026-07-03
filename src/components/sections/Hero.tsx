import { useI18n } from "../../i18n/I18nContext"; // تصحيح المسار ليتوافق مع مجلد i18
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import hero from "@/assets/hero-mountain.jpg";

export function Hero() {
  const { t } = useI18n();
  
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={hero}
        alt={t("hero.imageAlt")} 
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth/40 via-earth/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--background)/0.95)_0%,_transparent_60%)]" />

      <div className="relative container mx-auto px-4 lg:px-8 pb-20 lg:pb-32 pt-32">
        <div className="max-w-3xl mx-auto animate-fade-up flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/80 backdrop-blur border border-border text-xs lg:text-sm text-earth font-medium tracking-wide">
            <span className="size-1.5 rounded-full bg-terracotta" />
            {t("hero.tag")} 
          </span>
          
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-foreground text-balance leading-[1.1] font-serif font-normal text-center">
            {t("hero.title")}
          </h1>
          
          <p className="mt-6 text-base lg:text-xl text-foreground/80 max-w-2xl leading-relaxed text-center">
            {t("hero.subtitle")}
          </p>
          
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* زر واتساب فقط - محجوز لـ hero.cta */}
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-warm h-12 px-7 text-base"
            >
              <a href="https://wa.me/212673552963" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                {t("hero.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}