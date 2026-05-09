export type Lang = "ar" | "fr" | "en" | "es" | "de";

export const LANGUAGES: { code: Lang; label: string; flag: string; dir: "rtl" | "ltr" }[] = [
  { code: "ar", label: "العربية", flag: "🇲🇦", dir: "rtl" },
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", label: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "de", label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
];

const galleryItemsData = [
  // الفيديوهات
  { type: "video", url: "https://www.youtube.com/watch?v=O9JwT1D3nEw", thumb: "https://img.youtube.com/vi/O9JwT1D3nEw/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=z30f0SxjbAY", thumb: "https://img.youtube.com/vi/z30f0SxjbAY/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=nfDGEt5oYL4", thumb: "https://img.youtube.com/vi/nfDGEt5oYL4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=ymutPtM-XsM", thumb: "https://img.youtube.com/vi/ymutPtM-XsM/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=AB8pEFDPGQw", thumb: "https://img.youtube.com/vi/AB8pEFDPGQw/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9HEOJyV-T8Y", thumb: "https://img.youtube.com/vi/9HEOJyV-T8Y/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=dx3V_A919Ck", thumb: "https://img.youtube.com/vi/dx3V_A919Ck/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=OtWRlvwQ17Y", thumb: "https://img.youtube.com/vi/OtWRlvwQ17Y/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=fiC56y5Iu8o", thumb: "https://img.youtube.com/vi/fiC56y5Iu8o/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=T-rjdMPsXN8", thumb: "https://img.youtube.com/vi/T-rjdMPsXN8/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=pY8rcZUkVzk", thumb: "https://img.youtube.com/vi/pY8rcZUkVzk/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=7txF4u8WdI0", thumb: "https://img.youtube.com/vi/7txF4u8WdI0/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=0KitPyS7WpI", thumb: "https://img.youtube.com/vi/0KitPyS7WpI/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=Yg7HgVf9nEQ", thumb: "https://img.youtube.com/vi/Yg7HgVf9nEQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=kIe1o0EOdDE", thumb: "https://img.youtube.com/vi/kIe1o0EOdDE/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=z-fl0RNGP80", thumb: "https://img.youtube.com/vi/z-fl0RNGP80/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=99QvQqicFI4", thumb: "https://img.youtube.com/vi/99QvQqicFI4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=ZTt1B-KmBm0", thumb: "https://img.youtube.com/vi/ZTt1B-KmBm0/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=V9jte7veWJQ", thumb: "https://img.youtube.com/vi/V9jte7veWJQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=Lmn_l1AjBDY", thumb: "https://img.youtube.com/vi/Lmn_l1AjBDY/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9lRHYG_6CTQ", thumb: "https://img.youtube.com/vi/9lRHYG_6CTQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=pONcfndAafg", thumb: "https://img.youtube.com/vi/pONcfndAafg/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=UUKxeWhkvJA", thumb: "https://img.youtube.com/vi/UUKxeWhkvJA/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=u3cAJqwQjoQ", thumb: "https://img.youtube.com/vi/u3cAJqwQjoQ/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=9hvY_tg9zj4", thumb: "https://img.youtube.com/vi/9hvY_tg9zj4/0.jpg" },
  { type: "video", url: "https://www.youtube.com/watch?v=wQHOMqyhnHc", thumb: "https://img.youtube.com/vi/wQHOMqyhnHc/0.jpg" },

  // الصور
  { type: "image", url: "https://i.ibb.co/jPsPHmgd/1.jpg", thumb: "https://i.ibb.co/jPsPHmgd/1.jpg" },
  { type: "image", url: "https://i.ibb.co/WW3Q0kFs/2.jpg", thumb: "https://i.ibb.co/WW3Q0kFs/2.jpg" },
  { type: "image", url: "https://i.ibb.co/wZ3LsC2G/3.jpg", thumb: "https://i.ibb.co/wZ3LsC2G/3.jpg" },
  { type: "image", url: "https://i.ibb.co/nNt5HnZc/4.jpg", thumb: "https://i.ibb.co/nNt5HnZc/4.jpg" },
  { type: "image", url: "https://i.ibb.co/NgXLwbmt/5.jpg", thumb: "https://i.ibb.co/NgXLwbmt/5.jpg" },
  { type: "image", url: "https://i.ibb.co/s9yXFQYX/6.jpg", thumb: "https://i.ibb.co/s9yXFQYX/6.jpg" },
  { type: "image", url: "https://i.ibb.co/nsDHXPgS/7.jpg", thumb: "https://i.ibb.co/nsDHXPgS/7.jpg" },
  { type: "image", url: "https://i.ibb.co/xSD2dbDG/8.jpg", thumb: "https://i.ibb.co/xSD2dbDG/8.jpg" },
  { type: "image", url: "https://i.ibb.co/snz66yy/9.jpg", thumb: "https://i.ibb.co/snz66yy/9.jpg" },
  { type: "image", url: "https://i.ibb.co/rGWFK5m7/10.jpg", thumb: "https://i.ibb.co/rGWFK5m7/10.jpg" },
  { type: "image", url: "https://i.ibb.co/9HxYn0Np/11.jpg", thumb: "https://i.ibb.co/9HxYn0Np/11.jpg" },
  { type: "image", url: "https://i.ibb.co/1GJ49C05/12.jpg", thumb: "https://i.ibb.co/1GJ49C05/12.jpg" },
  { type: "image", url: "https://i.ibb.co/VpBbQVh1/13.jpg", thumb: "https://i.ibb.co/VpBbQVh1/13.jpg" },
  { type: "image", url: "https://i.ibb.co/sJMGNQYP/14.jpg", thumb: "https://i.ibb.co/sJMGNQYP/14.jpg" },
  { type: "image", url: "https://i.ibb.co/B2RvjXhY/15.jpg", thumb: "https://i.ibb.co/B2RvjXhY/15.jpg" },
  { type: "image", url: "https://i.ibb.co/GftsVhQt/16.jpg", thumb: "https://i.ibb.co/GftsVhQt/16.jpg" },
  { type: "image", url: "https://i.ibb.co/NngzTNJ0/17.jpg", thumb: "https://i.ibb.co/NngzTNJ0/17.jpg" },
  { type: "image", url: "https://i.ibb.co/3545drCK/18.jpg", thumb: "https://i.ibb.co/3545drCK/18.jpg" },
  { type: "image", url: "https://i.ibb.co/gZGp6wcR/20.jpg", thumb: "https://i.ibb.co/gZGp6wcR/20.jpg" },
  { type: "image", url: "https://i.ibb.co/3yJLT2bX/21.jpg", thumb: "https://i.ibb.co/3yJLT2bX/21.jpg" },
  { type: "image", url: "https://i.ibb.co/7tbVFDX4/22.jpg", thumb: "https://i.ibb.co/7tbVFDX4/22.jpg" },
  { type: "image", url: "https://i.ibb.co/5xsr4rGf/24.jpg", thumb: "https://i.ibb.co/5xsr4rGf/24.jpg" },
  { type: "image", url: "https://i.ibb.co/CK80bs5G/26.jpg", thumb: "https://i.ibb.co/CK80bs5G/26.jpg" },
  { type: "image", url: "https://i.ibb.co/DDxVT3sz/27.jpg", thumb: "https://i.ibb.co/DDxVT3sz/27.jpg" },
  { type: "image", url: "https://i.ibb.co/PGvbP65y/28.jpg", thumb: "https://i.ibb.co/PGvbP65y/28.jpg" },
  { type: "image", url: "https://i.ibb.co/MkfBfJSR/29.jpg", thumb: "https://i.ibb.co/MkfBfJSR/29.jpg" },
  { type: "image", url: "https://i.ibb.co/Rkjs9JNq/30.jpg", thumb: "https://i.ibb.co/Rkjs9JNq/30.jpg" },
  { type: "image", url: "https://i.ibb.co/BKQTJG6f/31.jpg", thumb: "https://i.ibb.co/BKQTJG6f/31.jpg" },
  { type: "image", url: "https://i.ibb.co/0ysLcQBX/32.jpg", thumb: "https://i.ibb.co/0ysLcQBX/32.jpg" },
  { type: "image", url: "https://i.ibb.co/Zz2xKHG3/33.jpg", thumb: "https://i.ibb.co/Zz2xKHG3/33.jpg" },
  { type: "image", url: "https://i.ibb.co/ymrwj50p/34.jpg", thumb: "https://i.ibb.co/ymrwj50p/34.jpg" },
  { type: "image", url: "https://i.ibb.co/ZppDwwLF/35.jpg", thumb: "https://i.ibb.co/ZppDwwLF/35.jpg" },
  { type: "image", url: "https://i.ibb.co/Z6zXCfmS/36.jpg", thumb: "https://i.ibb.co/Z6zXCfmS/36.jpg" },
  { type: "image", url: "https://i.ibb.co/bgcbXcRj/37.jpg", thumb: "https://i.ibb.co/bgcbXcRj/37.jpg" },
  { type: "image", url: "https://i.ibb.co/5xhcqkyp/38.jpg", thumb: "https://i.ibb.co/5xhcqkyp/38.jpg" },
  { type: "image", url: "https://i.ibb.co/Nds0W4Hg/39.jpg", thumb: "https://i.ibb.co/Nds0W4Hg/39.jpg" },
  { type: "image", url: "https://i.ibb.co/V0QhL1BD/40.jpg", thumb: "https://i.ibb.co/V0QhL1BD/40.jpg" },
  { type: "image", url: "https://i.ibb.co/RkJDtr4X/41.jpg", thumb: "https://i.ibb.co/RkJDtr4X/41.jpg" },
  { type: "image", url: "https://i.ibb.co/Lz6Wtgpq/42.jpg", thumb: "https://i.ibb.co/Lz6Wtgpq/42.jpg" },
  { type: "image", url: "https://i.ibb.co/XfnjYmN3/43.jpg", thumb: "https://i.ibb.co/XfnjYmN3/43.jpg" },
  { type: "image", url: "https://i.ibb.co/Swmh93Kq/44.jpg", thumb: "https://i.ibb.co/Swmh93Kq/44.jpg" },
  { type: "image", url: "https://i.ibb.co/WW5Fg6Kp/45.jpg", thumb: "https://i.ibb.co/WW5Fg6Kp/45.jpg" },
  { type: "image", url: "https://i.ibb.co/HL2ypX6p/46.jpg", thumb: "https://i.ibb.co/HL2ypX6p/46.jpg" },
  { type: "image", url: "https://i.ibb.co/4nLMjg5x/47.jpg", thumb: "https://i.ibb.co/4nLMjg5x/47.jpg" },
  { type: "image", url: "https://i.ibb.co/CKZvS5YP/48.jpg", thumb: "https://i.ibb.co/CKZvS5YP/48.jpg" },
  { type: "image", url: "https://i.ibb.co/RGzy9Y0M/49.jpg", thumb: "https://i.ibb.co/RGzy9Y0M/49.jpg" },
  { type: "image", url: "https://i.ibb.co/LdW4tyfR/50.jpg", thumb: "https://i.ibb.co/LdW4tyfR/50.jpg" },
  { type: "image", url: "https://i.ibb.co/FbzTsgc6/446.jpg", thumb: "https://i.ibb.co/FbzTsgc6/446.jpg" },
  { type: "image", url: "https://i.ibb.co/wFXgHr4C/FB-IMG-1776092006170.jpg", thumb: "https://i.ibb.co/wFXgHr4C/FB-IMG-1776092006170.jpg" },
  { type: "image", url: "https://i.ibb.co/35zgN1ZV/FB-IMG-1776092170683.jpg", thumb: "https://i.ibb.co/35zgN1ZV/FB-IMG-1776092170683.jpg" },
  { type: "image", url: "https://i.ibb.co/Wvrz0YtZ/FB-IMG-1776092208356.jpg", thumb: "https://i.ibb.co/Wvrz0YtZ/FB-IMG-1776092208356.jpg" },
  { type: "image", url: "https://i.ibb.co/LDy0jqfd/FB-IMG-1776092341899.jpg", thumb: "https://i.ibb.co/LDy0jqfd/FB-IMG-1776092341899.jpg" },
  { type: "image", url: "https://i.ibb.co/23D0Tggc/FB-IMG-1776092353595.jpg", thumb: "https://i.ibb.co/23D0Tggc/FB-IMG-1776092353595.jpg" },
  { type: "image", url: "https://i.ibb.co/kVtBghjd/FB-IMG-1776093814427.jpg", thumb: "https://i.ibb.co/kVtBghjd/FB-IMG-1776093814427.jpg" },
  { type: "image", url: "https://i.ibb.co/Z6tGzFNH/4.jpg", thumb: "https://i.ibb.co/Z6tGzFNH/4.jpg" },
  { type: "image", url: "https://i.ibb.co/bjCsJs6b/1.jpg", thumb: "https://i.ibb.co/bjCsJs6b/1.jpg" },
  { type: "image", url: "https://i.ibb.co/zV53Cxkd/jp2.jpg", thumb: "https://i.ibb.co/zV53Cxkd/jp2.jpg" },
  { type: "image", url: "https://i.ibb.co/RTyL94c4/image.jpg", thumb: "https://i.ibb.co/RTyL94c4/image.jpg" },
  { type: "image", url: "https://i.ibb.co/YBKHmnKH/3.jpg", thumb: "https://i.ibb.co/YBKHmnKH/3.jpg" },
  { type: "image", url: "https://i.ibb.co/7tw0K78N/5.jpg", thumb: "https://i.ibb.co/7tw0K78N/5.jpg" },
  { type: "image", url: "https://i.ibb.co/prKwLfbs/6.jpg", thumb: "https://i.ibb.co/prKwLfbs/6.jpg" },
  { type: "image", url: "https://i.ibb.co/8DbN6h78/7.jpg", thumb: "https://i.ibb.co/8DbN6h78/7.jpg" },
  { type: "image", url: "https://i.ibb.co/zW86jkDM/8.jpg", thumb: "https://i.ibb.co/zW86jkDM/8.jpg" },
  { type: "image", url: "https://i.ibb.co/JRYW1Prx/9.jpg", thumb: "https://i.ibb.co/JRYW1Prx/9.jpg" }
];

type Dict = Record<string, any>;

export const translations: Record<Lang, Dict> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      gallery: "المعرض",
      why: "لماذا تختارنا",
      weather: "الطقس والموقع",
      music: "الرواق الصوتي",
      quran: "الرواق القرآني",
      book: "احجز عبر واتساب"
    },
    hero: {
      tag: "دار الضيافة زاهي بويبلان",
      title: "استمتع بهدوء الطبيعة في قلب الأطلس",
      subtitle: "ملاذكم المثالي للاسترخاء واكتشاف سحر جبال بويبلان الأصيلة.",
      cta: "احجز الآن",
      discover: "اكتشف ضيافتنا",
      imageAlt: "جبل بويبلان عند الغروب",
      scroll: "اكتشف دار الضيافة"
    },
    about: {
      kicker: "من نحن",
      title: "ملاذك الهادئ في قلب جبال الأطلس",
      p1: "مرحباً بكم في دار الضيافة زاهي، وجهتكم المثالية للاسترخاء واكتشاف سحر الأطلس المتوسط. نحن عائلة زاهي، نفتح لكم أبواب دارنا في قلب جبل بويبلان الشامخ.",
      p2: "انطلق مشروعنا من رغبتنا في تقديم تجربة ضيافة مغربية حقيقية، حيث نمزج بين بساطة الحياة الجبلية وراحة الاستقبال الأصيل.",
      p3: "هدفنا هو توفير ملاذ هادئ لكل باحث عن السكينة بعيداً عن صخب المدينة، سواء كنت من عشاق التخييم، أو من محبي رياضة المشي الجبلي."
    },
    services: {
      kicker: "خدماتنا",
      title: "ندعوكم لاستكشاف أركان دار الضيافة بعيونكم",
      rooms: { title: "دفء المكان", desc: "إقامة مريحة بطابع جبلي يمنحكم الراحة والسكينة." },
      table: { title: "كرم المائدة", desc: "تعرّفوا على أطباقنا التقليدية التي تُطبخ بشغف ولمسة عائلية أصيلة." },
      adventure: { title: "روح المغامرة", desc: "وثّقنا لكم لحظات من مسارات المشي واستكشاف كنوز الطبيعة المحيطة بنا." },
      note: "كل صورة وفيديو هنا هي دعوة لتجربة واقعية لا تُنسى."
    },
    gallery: {
      kicker: "معرض الصور والفيديو",
      title: "نافذة على سحر بويبلان",
      desc: "هنا، الصور والفيديوهات ليست مجرد لقطات، بل هي نافذة تروي حكاية جمال دار الضيافة زاهي بويبلان قبل أن تطأ أقدامكم أرض بويبلان. نرحب بكم في رحلتنا البصرية، حيث تلتقي الضيافة الجبلية الأصيلة بعنفوان الطبيعة الخام؛ من بياض الثلوج التي تعانق قمنا شتاءً، إلى خضرة غابات الأرز في صيفنا الهادئ.",
      items: galleryItemsData
    },
    music: {
      mainTitle: "الرواق الصوتي",
      description: "ألحان من عبق التاريخ وجمال جبال الأطلس المتوسط",
      footerNote: "* استمتع بأنغام لوتار والقصائد أثناء تصفحك لجمال دار الضيافة",
      track1: { title: "مختارات محمد رويشة", artist: "الفن الأطلسي الأصيل" },
      track2: { title: "غرست وردة - رويشة", artist: "إبداعات وترية" },
      track3: { title: "مختارات عائشة مايا", artist: "تراث الأطلس المتوسط" },
      track4: { title: "أنغام بويبلان", artist: "مختارات مختارة" }
    },
    quran: {
      title: "الرواق القرآني",
      subtitle: "تلاوات خاشعة بالقرآن الكريم - برواية ورش عن نافع",
      playlistTitle: "المصحف المرتل كاملاً",
      reciterName: "بصوت القارئ محمد إرشاد مربعي",
      verse: "\"ألا بذكر الله تطمئن القلوب\""
    },
    why: {
      kicker: "لماذا تختارنا",
      title: "خمسة أسباب لتعيش التجربة معنا",
      1: { title: "موقع استراتيجي", desc: "في قلب جبل بويبلان، إطلالات بانورامية وسهولة الوصول إلى أفضل المسارات." },
      2: { title: "ضيافة عائلية", desc: "الضيف فرد من العائلة. خدمة شخصية تضمن لك الراحة والخصوصية." },
      3: { title: "أطباق تقليدية", desc: "مذاق الطبخ المغربي الجبلي الأصيل، بمنتجات محلية طبيعية." },
      4: { title: "أنشطة متنوعة", desc: "تزلج شتاءً، تخييم صيفاً، استكشاف المغارات والينابيع — دليلك في المنطقة." },
      5: { title: "هدوء تام", desc: "مكان مثالي لمن يبحث عن الراحة النفسية بعيداً عن ضجيج المدينة وتلوثها." }
    },
    contact: {
      kicker: "تواصل وموقع",
      title: "بويبلان · تازة",
      weather: "حالة الطقس في بويبلان",
      map: "الموقع على خرائط جوجل",
      openMap: "افتح الخريطة",
      localTime: "التوقيت المحلي · تازة"
    },
    book: {
      title: "هل أنت جاهز للقاء الجبل؟",
      desc: "تواصل معنا مباشرة عبر واتساب لحجز إقامتك.",
      cta: "احجز عبر واتساب",
      phone: "0673552963"
    },
    footer: {
      brandName: "دار الضيافة زاهي",
      tagline: "أصالة الضيافة في قلب جبال بويبلان",
      location: "تازة، جبل بويبلان، المغرب",
      tag: "دار الضيافة زاهي بويبلان · المغرب",
      follow: "تابعونا",
      rights: "جميع الحقوق محفوظة"
    },
    testimonials: {
      title: "ماذا يقول زوارنا",
      1: { text: "تجربة رائعة في منزل زاهي مع عائلته. ترحيب حار، ونظافة فائقة، ووجبات تقليدية وعضوية ممتازة." },
      2: { text: "أماكن إقامة مريحة، ومضيف مضياف للغاية، وموقع جميل. يقع على بعد بضعة مئات من الأمتار من الطريق." },
      3: { text: "استقبال رائع وحسن الضيافة في قلب جبال بويبلان." },
      4: { text: "مكان جميل جداً، خدمة جيدة، أشخاص كرماء، مناظر طبيعية رائعة." }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      gallery: "Galerie",
      why: "Pourquoi nous",
      weather: "Météo & Carte",
      music: "Espace Audio",
      quran: "Espace Coranique",
      book: "Réserver"
    },
    hero: {
      tag: "Dar al-Diyafa Zahi Bouyablane",
      title: "Vivez le calme au cœur de l'Atlas",
      subtitle: "Votre refuge idéal pour se détendre et découvrir le charme authentique de Bouyablane.",
      cta: "Réserver maintenant",
      discover: "Découvrir notre hospitalité",
      imageAlt: "Mont Bouyablane au coucher du soleil"
    },
    about: {
      kicker: "À propos",
      title: "Votre refuge paisible au cœur de l'Atlas",
      p1: "Bienvenue à Dar Diafa Zahi, votre destination idéale pour découvrir le charme du Moyen Atlas.",
      p2: "Notre projet est né du désir d'offrir une véritable expérience d'hospitalité marocaine authentique.",
      p3: "Notre but est d'offrir un refuge tranquille à tous ceux qui cherchent la sérénité loin du bruit."
    },
    services: {
      kicker: "Nos services",
      title: "Découvrez notre maison d'hôtes",
      rooms: { title: "Chaleur du lieu", desc: "Un hébergement confortable au caractère montagnard authentique." },
      table: { title: "Générosité de la table", desc: "Découvrez nos plats traditionnels préparés avec passion et amour." },
      adventure: { title: "Esprit d'aventure", desc: "Sentiers de randonnée et exploration des trésors naturels environnants." },
      note: "Chaque image et vidéo est une invitation à une expérience réelle."
    },
    gallery: {
      kicker: "Galerie Photos & Vidéos",
      title: "Fenêtre sur la magie de Bouiblane",
      desc: "Ici, les photos et vidéos ne sont pas de simples clichés, mais une fenêtre racontant l'histoire de la Maison d'Hôtes Zahi Bouiblane avant même que vous ne fouliez le sol de Bouiblane. Nous vous souhaitons la bienvenue dans notre voyage visuel, où l'hospitalité montagnarde authentique rencontre la nature brute ; de la blancheur des neiges hivernales à la verdure des forêts de cèdres en été.",
      items: galleryItemsData
    },
    music: {
      mainTitle: "Espace Audio",
      description: "Mélodies de l'histoire et beauté de l'Atlas",
      footerNote: "* Profitez des mélodies du Outar pendant votre visite"
    },
    quran: {
      title: "Espace Coranique",
      subtitle: "Récitations apaisantes - Selon Warsh",
      playlistTitle: "Le Coran complet",
      reciterName: "Récité par Mohamed Ershad Merbay",
      verse: "\"N'est-ce point par l'évocation d'Allah que se tranquillisent les cœurs ?\""
    },
    why: {
      kicker: "Pourquoi nous choisir",
      title: "Cinq raisons de nous rendre visite",
      1: { title: "Position stratégique", desc: "Au cœur de Bouiblane, vues panoramiques et accès facile aux sentiers." },
      2: { title: "Hospitalité familiale", desc: "L'invité est un membre de la famille. Confort et intimité garantis." },
      3: { title: "Cuisine traditionnelle", desc: "Saveurs authentiques de la montagne avec des produits locaux." },
      4: { title: "Activités variées", desc: "Ski en hiver, camping en été, exploration de grottes et sources." },
      5: { title: "Calme absolu", desc: "Idéal pour ceux qui recherchent le repos loin du bruit de la ville." }
    },
    contact: {
      kicker: "Contact & Carte",
      title: "Bouiblane · Taza",
      weather: "Météo à Bouiblane",
      map: "Localisation Google Maps",
      openMap: "Ouvrir la carte",
      localTime: "Heure locale · Taza"
    },
    book: {
      title: "Prêt à rencontrer la montagne ?",
      desc: "Contactez-nous directement par WhatsApp pour réserver.",
      cta: "Réserver sur WhatsApp",
      phone: "0673552963"
    },
    footer: {
      brandName: "Dar Al Diyafa Zahi",
      tagline: "L'authenticité de l'hospitalité au cœur du Bouiblane",
      location: "Taza, Mont Bouiblane, Maroc",
      tag: "Dar Diafa Zahi · Bouiblane · Maroc",
      follow: "Suivez-nous",
      rights: "Tous droits réservés"
    },
    testimonials: {
      title: "Ce que disent nos visiteurs",
      1: { text: "Superbe expérience chez la famille Zahi. Accueil chaleureux, propreté et repas bio excellents." },
      2: { text: "Logement confortable, hôte très accueillant et bel emplacement près de la route." },
      3: { text: "Excellent accueil et hospitalité au cœur des montagnes du Bouiblane." },
      4: { text: "Très bel endroit, service de qualité, gens généreux et paysages magnifiques." }
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      gallery: "Gallery",
      why: "Why us",
      weather: "Weather & Map",
      music: "Audio Lounge",
      quran: "Quran Lounge",
      book: "Book Now"
    },
    hero: {
      tag: "Dar al-Diyafa Zahi Bouyablane",
      title: "Enjoy Nature's Peace in the Heart of Atlas",
      subtitle: "Your ideal retreat to relax and discover the authentic charm of Bouyablane mountains.",
      cta: "Book Now",
      discover: "Discover Our Hospitality",
      imageAlt: "Mount Bouyablane at sunset"
    },
    about: {
      kicker: "About us",
      title: "Your peaceful haven in the heart of the Atlas",
      p1: "Welcome to Dar Diafa Zahi, your ideal destination to discover the charm of the Middle Atlas.",
      p2: "Our project began with a wish to offer a true Moroccan hospitality experience.",
      p3: "Our goal is to provide a quiet refuge for anyone seeking serenity far from city noise."
    },
    services: {
      kicker: "Our services",
      title: "Explore our guest house through your eyes",
      rooms: { title: "Warmth of place", desc: "Comfortable stay with an authentic mountain character." },
      table: { title: "A generous table", desc: "Discover traditional dishes cooked with passion and family touch." },
      adventure: { title: "Spirit of adventure", desc: "Hiking trails and exploration of the surrounding natural treasures." },
      note: "Every image and video here is an invitation to a real experience."
    },
    gallery: {
      kicker: "Photo & Video Gallery",
      title: "A Window to Bouiblane's Magic",
      desc: "Here, photos and videos are not just snapshots, but a window telling the story of Zahi Bouiblane Guesthouse before you even arrive in Bouiblane. We welcome you to our visual journey, where authentic mountain hospitality meets raw nature; from the white snows of winter to the lush green cedar forests of summer.",
      items: galleryItemsData
    },
    music: {
      mainTitle: "Audio Lounge",
      description: "Melodies from history and the beauty of the Atlas",
      footerNote: "* Enjoy the sounds of Outar while browsing"
    },
    quran: {
      title: "Quran Lounge",
      subtitle: "Humble recitations - According to Warsh",
      playlistTitle: "Complete Quran",
      reciterName: "Recited by Mohamed Ershad Merbay",
      verse: "\"Only in the remembrance of Allah do hearts find rest.\""
    },
    why: {
      kicker: "Why choose us",
      title: "Five reasons to visit us",
      1: { title: "Strategic location", desc: "In the heart of Bouiblane, panoramic views and easy access to trails." },
      2: { title: "Family hospitality", desc: "The guest is family. Personal service ensures comfort and privacy." },
      3: { title: "Traditional dishes", desc: "Authentic mountain cooking with fresh local products." },
      4: { title: "Varied activities", desc: "Skiing in winter, camping in summer, exploring caves and springs." },
      5: { title: "Absolute calm", desc: "Ideal for those seeking mental peace away from city noise." }
    },
    contact: {
      kicker: "Contact & Map",
      title: "Bouiblane · Taza",
      weather: "Weather in Bouiblane",
      map: "Google Maps location",
      openMap: "Open map",
      localTime: "Local time · Taza"
    },
    book: {
      title: "Ready to meet the mountain?",
      desc: "Contact us directly via WhatsApp to book your stay.",
      cta: "Book on WhatsApp",
      phone: "0673552963"
    },
    footer: {
      brandName: "Zahi Guest House",
      tagline: "Authentic hospitality in the heart of the Atlas",
      location: "Taza, Mount Bouiblane, Morocco",
      tag: "Dar Diafa Zahi · Bouiblane · Morocco",
      follow: "Follow us",
      rights: "All rights reserved"
    },
    testimonials: {
      title: "What our guests say",
      1: { text: "Great experience at Zahi's home. Warm welcome, very clean and excellent organic meals." },
      2: { text: "Comfortable accommodations, very hospitable host, and beautiful location." },
      3: { text: "Excellent welcome and hospitality in the heart of the Bouiblane mountains." },
      4: { text: "Very beautiful place, good service, generous people and wonderful landscapes." }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      gallery: "Galería",
      why: "Por qué nosotros",
      weather: "Clima y mapa",
      music: "Espacio Audio",
      quran: "Espacio Coránico",
      book: "Reservar"
    },
    hero: {
      tag: "Dar al-Diyafa Zahi Bouyablane",
      title: "Disfruta de la paz de la naturaleza",
      subtitle: "Tu refugio ideal para relajarte y descubrir el encanto de Bouyablane.",
      cta: "Reservar ahora",
      discover: "Descubre nuestra hospitalidad",
      imageAlt: "Monte Bouyablane al atardecer"
    },
    about: {
      kicker: "Sobre nosotros",
      title: "Tu remanso de paz en el corazón del Atlas",
      p1: "Bienvenido a Dar Diafa Zahi, su destino ideal para descubrir el encanto del Atlas Medio.",
      p2: "Nuestro proyecto nació del deseo de ofrecer una auténtica experiencia de hospitalidad marroquí.",
      p3: "Nuestro objetivo es proporcionar un refugio tranquilo lejos del ruido de la ciudad."
    },
    services: {
      kicker: "Nuestros servicios",
      title: "Explora nuestra casa de huéspedes",
      rooms: { title: "Calidez del lugar", desc: "Estancia confortable con un auténtico carácter de montaña." },
      table: { title: "Mesa generosa", desc: "Platos tradicionales cocinados con pasión y toque familiar." },
      adventure: { title: "Espíritu de aventura", desc: "Rutas de senderismo y exploración de tesoros naturales." },
      note: "Cada imagen y video es una invitación a una experiencia real."
    },
    gallery: {
      kicker: "Galería de Fotos y Videos",
      title: "Una ventana a la magia de Bouiblane",
      desc: "Aquí, las fotos y los videos no son simples capturas, sino una ventana que narra la historia de la Casa de Huéspedes Zahi Bouiblane antes de llegar a Bouiblane. Le damos la bienvenida a nuestro viaje visual, donde la auténtica hospitalidad de montaña se encuentra con la naturaleza pura; desde la nieve blanca del invierno hasta los verdes bosques de cedros del verano.",
      items: galleryItemsData
    },
    music: {
      mainTitle: "Espacio Audio",
      description: "Melodías de la historia y belleza del Atlas",
      footerNote: "* Disfruta de los sonidos del Outar mientras navegas"
    },
    quran: {
      title: "Espacio Coránico",
      subtitle: "Recitaciones humildes - Según Warsh",
      playlistTitle: "Corán Completo",
      reciterName: "Recitado por Mohamed Ershad Merbay",
      verse: "\"Solo en el recuerdo de Allah encuentran descanso los corazones.\""
    },
    why: {
      kicker: "Por qué elegirnos",
      title: "Cinco razones para visitarnos",
      1: { title: "Ubicación estratégica", desc: "En el corazón de Bouiblane, vistas panorámicas y acceso a senderos." },
      2: { title: "Hospitalidad familiar", desc: "El huésped es familia. Servicio personal que garantiza privacidad." },
      3: { title: "Platos tradicionales", desc: "Cocina auténtica de montaña con productos locales frescos." },
      4: { title: "Actividades variadas", desc: "Esquí en invierno, camping en verano, cuevas y manantiales." },
      5: { title: "Calma absoluta", desc: "Ideal para quienes buscan paz mental lejos del ruido urbano." }
    },
    contact: {
      kicker: "Contacto y Mapa",
      title: "Bouiblane · Taza",
      weather: "Clima en Bouiblane",
      map: "Ubicación en Google Maps",
      openMap: "Abrir mapa",
      localTime: "Hora local · Taza"
    },
    book: {
      title: "¿Listo para conocer la montaña?",
      desc: "Contáctenos directamente por WhatsApp para reservar.",
      cta: "Reservar en WhatsApp",
      phone: "0673552963"
    },
    footer: {
      brandName: "Casa de Huéspedes Zahi",
      tagline: "Hospitalidad auténtica en el corazón del Atlas",
      location: "Taza, Monte Bouiblane, Marruecos",
      tag: "Dar Diafa Zahi · Bouiblane · Marruecos",
      follow: "Síguenos",
      rights: "Todos los derechos reservados"
    },
    testimonials: {
      title: "Qué dicen nuestros huéspedes",
      1: { text: "Gran experiencia en casa de Zahi. Cálida bienvenida y excelente comida orgánica." },
      2: { text: "Alojamiento confortable, anfitrión muy hospitalario y hermosa ubicación." },
      3: { text: "Excelente acogida y hospitalidad en el corazón de las montañas de Bouiblane." },
      4: { text: "Lugar muy hermoso, buen servicio, gente generosa y paisajes maravillosos." }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienste",
      gallery: "Galerie",
      why: "Warum wir",
      weather: "Wetter & Karte",
      music: "Audio-Lounge",
      quran: "Koran-Lounge",
      book: "Buchen"
    },
    hero: {
      tag: "Dar al-Diyafa Zahi Bouyablane",
      title: "Genießen Sie die Ruhe der Natur",
      subtitle: "Ihr idealer Rückzugsort im Herzen des Atlasgebirges.",
      cta: "Jetzt buchen",
      discover: "Entdecken Sie unsere Gastfreundschaft",
      imageAlt: "Berg Bouyablane bei Sonnenuntergang"
    },
    about: {
      kicker: "Über uns",
      title: "Ihr friedlicher Rückzugsort im Atlas",
      p1: "Willkommen im Dar Diafa Zahi, Ihrem idealen Ziel im Mittleren Atlas.",
      p2: "Unser Projekt entstand aus dem Wunsch, echte marokkanische Gastfreundschaft zu bieten.",
      p3: "Unser Ziel ist es, einen ruhigen Zufluchtsort fernab vom Stadtlärm zu bieten."
    },
    services: {
      kicker: "Unsere Dienste",
      title: "Entdecken Sie unser Gästehaus",
      rooms: { title: "Wärme des Ortes", desc: "Komfortabler Aufenthalt mit authentischem Bergcharakter." },
      table: { title: "Großzügiger Tisch", desc: "Traditionelle Gerichte, gekocht mit Leidenschaft." },
      adventure: { title: "Abenteuergeist", desc: "Wanderwege und Erkundung der Naturschätze." },
      note: "Jedes Bild und Video ist eine Einladung zu einem echten Erlebnis."
    },
    gallery: {
      kicker: "Foto- und Videogalerie",
      title: "Ein Fenster zur Magie von Bouiblane",
      desc: "Hier sind Fotos und Videos nicht nur Schnappschüsse, sondern ein Fenster, das die Geschichte des Gästehauses Zahi Bouiblane erzählt, noch bevor Sie Bouiblane erreichen. Wir begrüßen Sie auf unserer visuellen Reise, wo authentische Gastfreundschaft in den Bergen auf unberührte Natur trifft; vom weißen Winterschnee bis zu den grünen Zedernwäldern im Sommer.",
      items: galleryItemsData
    },
    music: {
      mainTitle: "Audio-Lounge",
      description: "Melodien aus der Geschichte und Schönheit des Atlas",
      footerNote: "* Genießen Sie die Klänge von Outar beim Stöbern"
    },
    quran: {
      title: "Koran-Lounge",
      subtitle: "Demütige Rezitationen - Nach Warsh",
      playlistTitle: "Vollständiger Koran",
      reciterName: "Rezitiert von Mohamed Ershad Merbay",
      verse: "\"Nur im Gedenken an Allah finden Herzen Ruhe.\""
    },
    why: {
      kicker: "Warum uns wählen",
      title: "Fünf Gründe, uns zu besuchen",
      1: { title: "Strategische Lage", desc: "Im Herzen von Bouiblane, Panoramablick und einfacher Zugang zu Wanderwegen." },
      2: { title: "Familiäre Gastfreundschaft", desc: "Der Gast ist Familie. Persönlicher Service garantiert Komfort." },
      3: { title: "Traditionelle Gerichte", desc: "Authentische Bergküche mit frischen lokalen Produkten." },
      4: { title: "Vielfältige Aktivitäten", desc: "Skifahren im Winter, Camping im Sommer, Höhlen und Quellen." },
      5: { title: "Absolute Ruhe", desc: "Ideal für Ruhesuchende abseits des Stadtlärms." }
    },
    contact: {
      kicker: "Kontakt & Karte",
      title: "Bouiblane · Taza",
      weather: "Wetter in Bouiblane",
      map: "Google Maps Standort",
      openMap: "Karte öffnen",
      localTime: "Ortszeit · Taza"
    },
    book: {
      title: "Bereit für den Berg?",
      desc: "Kontaktieren Sie uns direkt über WhatsApp, um zu buchen.",
      cta: "Auf WhatsApp buchen",
      phone: "0673552963"
    },
    footer: {
      brandName: "Gästehaus Zahi",
      tagline: "Authentische Gastfreundschaft im Herzen des Atlas",
      location: "Taza, Berg Bouiblane, Marokko",
      tag: "Dar Diafa Zahi · Bouiblane · Marokko",
      follow: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten"
    },
    testimonials: {
      title: "Was unsere Gäste sagen",
      1: { text: "Tolle Erfahrung bei Familie Zahi. Herzlicher Empfang و sehr saubere und ausgezeichnete Bio-Gerichte." },
      2: { text: "Komfortable Unterkunft, sehr gastfreundlicher Gastgeber und schöne Lage." },
      3: { text: "Ausgezeichneter Empfang und Gastfreundschaft im Herzen der Bouiblane-Berge." },
      4: { text: "Sehr schöner Ort, guter Service, großzügige Menschen und wunderbare Landschaften." }
    }
  }
};
