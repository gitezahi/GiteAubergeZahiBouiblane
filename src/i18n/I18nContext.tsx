// داخل ملف I18nContext.tsx - ابحث عن useMemo واستبدل دالة t
t: (key: string) => {
  // تفكيك المفتاح بناءً على النقطة (مثلاً hero.title تصبح مصفوفة)
  const keys = key.split('.'); 
  let result: any = translations[lang];

  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      // إذا لم يجد النص في اللغة الحالية، يبحث في العربية كاحتياط
      let fallback: any = translations.ar;
      for (const fk of keys) {
        fallback = fallback?.[fk];
      }
      return typeof fallback === 'string' ? fallback : key;
    }
  }
  return typeof result === 'string' ? result : key;
},
