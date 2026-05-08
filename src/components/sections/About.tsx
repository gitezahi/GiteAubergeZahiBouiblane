import React from 'react';
// استخدام صورة موجودة فعلياً في مجلدك لإصلاح خطأ البناء
import aboutImage from '../../assets/group.jpg'; 

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
                alt="عائلة زاهي بويبلان" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl hidden md:block">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Nature & Authenticité</p>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: النصوص باللغات الخمس */}
          <div className="lg:w-1/2 w-full space-y-8 text-right" dir="rtl">
            
            {/* النسخة العربية - تم تصحيح "في دارنا" */}
            <div className="border-r-4 border-green-600 pr-6">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">من نحن</h2>
              <p className="text-gray-700 leading-relaxed">
                مرحباً بكم في **دار الضيافة زاهي بويبلان**، وجهتكم المثالية للاسترخاء واكتشاف سحر الأطلس المتوسط. نحن عائلة زاهي، نفتح لكم أبواب دارنا المتواضع في قلب جبل بويبلان الشامخ، لنشارككم شغفنا بهذه المنطقة وتاريخها العريق.
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                انطلق مشروعنا من رغبتنا في تقديم تجربة ضيافة مغربية حقيقية، حيث نمزج بين بساطة الحياة الجبلية وراحة الاستقبال الأصيل. في دارنا، لست مجرد زائر، بل أنت فرد من العائلة؛ تستمتع بوجباتنا التقليدية المحضرة بحب، وتستنشق هواء الغابات النقي، وتستكشف مسارات الجبال.
              </p>
            </div>

            {/* اللغات الأخرى (تظهر بشكل مبسط أو حسب لغة الموقع المبرمجة) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left" dir="ltr">
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-blue-600">Français</h4>
                <p className="text-xs text-gray-600">Bienvenue au Gîte Zahi, une expérience familiale authentique au mont Bouiblane.</p>
              </div>
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-orange-600">English</h4>
                <p className="text-xs text-gray-600">Welcome to Zahi Guest House, your nature escape in the Middle Atlas mountains.</p>
              </div>
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-red-600">Español</h4>
                <p className="text-xs text-gray-600">Bienvenidos a la Casa Zahi, hospitalidad marroquí en el corazón del Atlas.</p>
              </div>
              <div className="p-3 bg-white rounded shadow-sm">
                <h4 className="font-bold text-yellow-600">Deutsch</h4>
                <p className="text-xs text-gray-600">Willkommen im Gästehaus Zahi, Ihr Rückzugsort in den Bergen von Bouiblane.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;