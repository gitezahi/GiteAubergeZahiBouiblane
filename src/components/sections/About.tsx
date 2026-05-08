import React from 'react';
// استيراد الصورة - تأكد من وجود صورة بهذا الاسم في مجلد assets
import aboutImage from '../assets/about.jpg'; 

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* الجانب الأيمن: الصورة */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Gîte Auberge Zahi Bouiblane" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl hidden md:block">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Nature & Authenticité</p>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: النصوص المترجمة */}
          <div className="lg:w-1/2 w-full space-y-8">
            
            {/* النسخة العربية */}
            <div dir="rtl" className="border-r-4 border-green-600 pr-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">من نحن</h2>
              <p className="text-gray-700 leading-relaxed">
                مرحباً بكم في **دار الضيافة زاهي بويبلان**، وجهتكم المثالية للاسترخاء واكتشاف سحر الأطلس المتوسط. نحن عائلة زاهي، نفتح لكم أبواب دارنا المتواضع في قلب جبل بويبلان الشامخ، لنشارككم شغفنا بهذه المنطقة وتاريخها العريق.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                انطلق مشروعنا من رغبتنا في تقديم تجربة ضيافة مغربية حقيقية، حيث نمزج بين بساطة الحياة الجبلية وراحة الاستقبال الأصيل. في دارنا، لست مجرد زائر، بل أنت فرد من العائلة؛ تستمتع بوجباتنا التقليدية المحضرة بحب، وتستنشق هواء الغابات النقي، وتستكشف مسارات الجبال.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                هدفنا هو توفير ملاذ هادئ لكل باحث عن السكينة بعيداً عن صخب المدينة، سواء كنت من عشاق التخييم، أو من محبي رياضة المشي الجبلي، أو ببساطة تريد الاستمتاع بجمال الثلوج والطبيعة الخلابة.
              </p>
            </div>

            {/* Version Française */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">À Propos de Nous</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bienvenue au **Gîte Auberge Zahi**, votre refuge au cœur du mont Bouiblane. Nous offrons une expérience authentique alliant randonnée, camping et gastronomie locale. Ici, vous n'êtes pas un simple client, mais un membre de notre famille.
              </p>
            </div>

            {/* English Version */}
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">About Us</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Welcome to **Zahi Guest House**, your perfect getaway in Mount Bouiblane. Whether you are a hiking enthusiast, a camping lover, or simply seeking peace in nature and snow, we provide a warm family atmosphere and authentic Moroccan hospitality.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;