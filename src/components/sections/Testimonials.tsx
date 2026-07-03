import React from "react";
import { Star } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";
import { translations } from "../../i18n/translations";

export const Testimonials = () => {
  const { t, lang } = useI18n();

  // 1. جلب قواميس الترجمة الحالية
  const currentTranslations = (translations as any)[lang] || translations.ar;
  const arTranslations = translations.ar as any;

  // 2. تحويل الهيكل المرقم (1, 2, 3...) إلى مصفوفة قابلة للقراءة بمرونة بجميع اللغات
  const getReviewItems = (source: any) => {
    if (!source || !source.testimonials) return [];
    const items = [];
    // نقوم بالمرور على الأرقام من 1 إلى 4 لجلب الآراء المكتوبة في ملف الترجمة
    for (let i = 1; i <= 4; i++) {
      if (source.testimonials[i]) {
        items.push(source.testimonials[i]);
      }
    }
    return items;
  };

  // 3. تطبيق خطة الأمان: إذا لم توجد آراء للغة الحالية، نسحب آراء القسم العربي
  let reviews = getReviewItems(currentTranslations);
  if (reviews.length === 0) {
    reviews = getReviewItems(arTranslations);
  }

  // 4. نصوص وصفية مرنة لحل مشكلة اختفاء حقل الوصف (desc)
  const descriptions: Record<string, string> = {
    ar: "آراء وارتسامات ضيوفنا الكرام حول إقامتهم في دار الضيافة",
    fr: "Ce que nos chers clients pensent de leur séjour chez nous.",
    en: "What our dear guests think about their stay with us.",
    es: "Lo que nuestros queridos huéspedes opinan sobre su estancia.",
    de: "Was unsere lieben Gäste über ihren Aufenthalt bei uns denken."
  };

  const currentDesc = descriptions[lang] || descriptions.ar;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary font-amiri mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {currentDesc}
          </p>
        </div>

        {reviews.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review: any, index: number) => {
              // توليد اسم مستعار ذكي كزائر للموقع بحسب اللغة في حال عدم وجود حقل الاسم
              const visitorName = review.name || `${t("nav.about")} ${index + 1}`;
              
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic mb-6">
                      "{review.text}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {visitorName[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{visitorName}</h4>
                      <p className="text-sm text-gray-500">
                        {lang === 'ar' ? "زائر محلي" : "Visitante"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};