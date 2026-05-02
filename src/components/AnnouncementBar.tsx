export function AnnouncementBar() {
  return (
    <div className="bg-olive text-cream py-2.5 overflow-hidden whitespace-nowrap border-b border-olive/20 relative z-[100]">
      <div className="inline-block animate-marquee whitespace-nowrap">
        <span className="mx-8 text-sm md:text-base font-serif italic text-white">
          🏔️ مأوى زاهي.. نافذتكم على جبال بويبلان الساحرة 🏔️
        </span>
        <span className="mx-8 text-sm md:text-base font-medium text-white">
          📱 للوصول إلينا بسرعة، أضف الموقع لشاشتك الرئيسية: اضغط على (⋮) في أندرويد أو (⎙) في آيفون، ثم اختر "إضافة إلى الشاشة الرئيسية"
        </span>
        {/* التكرار لضمان الحركة المستمرة */}
        <span className="mx-8 text-sm md:text-base font-serif italic text-white">
          🏔️ مأوى زاهي.. نافذتكم على جبال بويبلان الساحرة 🏔️
        </span>
        <span className="mx-8 text-sm md:text-base font-medium text-white">
          📱 للوصول إلينا بسرعة، أضف الموقع لشاشتك الرئيسية
        </span>
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}