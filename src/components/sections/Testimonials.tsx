import { useI18n } from "../../i18n/I18nContext";

export const Testimonials = () => {
  const { t } = useI18n();
  const list = t('testimonials.list');
  const testimonials = Array.isArray(list) ? list : [];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-amiri text-primary">{t('testimonials.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item: any, index: number) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-earth/10 italic text-earth/80">
              "{item.text}"
              <div className="mt-4 font-bold text-primary not-italic">— {item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};