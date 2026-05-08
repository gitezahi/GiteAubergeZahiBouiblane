import { useI18n } from "../../i18n/I18nContext";
import { Mountain } from "lucide-react"; 

export const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {/* 1. إعادة عبارة من نحن */}
            <span className="text-primary font-bold tracking-wider uppercase mb-2 block">
              {t('about.kicker')}
            </span>
            
            {/* 2. العنوان المترجم */}
            <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
            
            {/* 3. الفقرات المترجمة (هذا سيحذف المربعات اللغوية الزائدة) */}
            <div className="space-y-4 text-lg text-muted-foreground text-justify">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* 4. إعادة أيقونة الجبل والارتفاع بدقة */}
            <div className="mt-8 flex items-center gap-4 text-primary bg-primary/5 p-4 rounded-xl w-fit">
              <Mountain className="w-8 h-8" />
              <div>
                <p className="text-sm text-muted-foreground leading-none mb-1">Altitude</p>
                <p className="text-2xl font-bold leading-none">3192m</p>
              </div>
            </div>
          </div>

          {/* 5. الصورة الجانبية مع نص بديل مترجم */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
             <img 
               src="/bouiblane-summit.jpg" 
               alt={t('hero.imageAlt')} 
               className="w-full h-64 md:h-[450px] object-cover hover:scale-105 transition-transform duration-500" 
             />
          </div>
        </div>
      </div>
    </section>
  );
};