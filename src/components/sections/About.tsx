import React from 'react';
import { useI18n } from '@/i18n/I18nContext'; // استدعاء نظام الترجمة الخاص بك
import aboutImage from '../../assets/group.jpg'; 
import { Mountain } from 'lucide-react'; // استيراد أيقونة الجبل

export const About = () => {
  const { t, language } = useI18n(); // الحصول على اللغة الحالية ودالة الترجمة

  // تحديد اتجاه النص بناءً على اللغة
  const isRTL = language === 'ar';

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* الجانب الخاص بالصورة مع أيقونة الارتفاع */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Gîte Auberge Zahi" 
                className="rounded-lg shadow-2xl w-full h-[450px] object-cover"
              />
              {/* الأيقونة التي كانت تحت الصورة - ارتفاع الجبل */}
              <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-[#8B4513] text-white p-4 rounded-lg flex items-center gap-3 shadow-lg`}>
                <Mountain size={32} />
                <div>
                  <p className="text-xs opacity-80">Alt.</p>
                  <p className="font-bold">3192m</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الخاص بالنصوص */}
          <div className={`lg:w-1/2 w-full ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {/* عنوان "من نحن" باللون البني كما طلبت */}
            <h2 className="text-3xl font-bold mb-6 text-[#8B4513]">
              {t('about.title')}
            </h2>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {/* النص الوصفي الكامل - سيتحول آلياً عند تغيير اللغة */}
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};