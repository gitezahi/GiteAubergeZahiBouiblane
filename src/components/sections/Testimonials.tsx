import React from "react";
import { Star, Quote } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext"; // استيراد سياق الترجمة الخاص بك

const TESTIMONIALS = [
  {
    id: 1,
    name: "ELASBIHANI Zakarya",
    role: "Local Guide",
    stars: 5,
    textKey: "testimonials.1.text", // مفتاح الترجمة
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX...", // يمكنك إبقاء الروابط كما هي
    initials: "EL"
  },
  {
    id: 2,
    name: "David Whichello",
    role: "Traveler",
    stars: 5,
    textKey: "testimonials.2.text",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjY...",
    initials: "DW"
  },
  {
    id: 3,
    name: "Meziane Ayyoub",
    role: "Visitor",
    stars: 5,
    textKey: "testimonials.3.text",
    avatar: "",
    initials: "MA"
  },
  {
    id: 4,
    name: "Mohamed Guerboub",
    role: "Nature Lover",
    stars: 5,
    textKey: "testimonials.4.text",
    avatar: "",
    initials: "MG"
  }
];

export function Testimonials() {
  const { t, dir } = useI18n(); // تفعيل دالة الترجمة ومعرفة اتجاه النص

  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif text-olive mb-4">
            {t("testimonials.title")}
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-secondary text-secondary" />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all group relative"
            >
              <Quote className="absolute top-4 right-4 size-8 text-olive/5 group-hover:text-olive/10 transition-colors" />
              
              <div className="flex items-center gap-3 mb-4">
                {item.avatar ? (
                  <img src={item.avatar} alt={item.name} className="size-10 rounded-full object-cover" />
                ) : (
                  <div className="size-10 rounded-full bg-olive/10 flex items-center justify-center text-olive font-bold text-xs">
                    {item.initials}
                  </div>
                )}
                <div className={dir === "rtl" ? "text-right" : "text-left"}>
                  <h3 className="font-bold text-foreground text-sm leading-none mb-1">{item.name}</h3>
                  <div className="flex gap-0.5">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="size-3 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>

              <p className={`text-sm text-muted-foreground leading-relaxed italic ${dir === "rtl" ? "text-right" : "text-left"}`}>
                "{t(item.textKey)}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-olive font-medium hover:underline text-sm"
          >
            + اقرأ المزيد من التقييمات على خرائط جوجل
          </a>
        </div>
      </div>
    </section>
  );
}