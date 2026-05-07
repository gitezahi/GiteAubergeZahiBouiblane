import React from "react";
import { useTranslation } from "react-i18next";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">{t("testimonials.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
             <p className="italic">"{t("testimonials.1.text")}"</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-sm">
             <p className="italic">"{t("testimonials.2.text")}"</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;