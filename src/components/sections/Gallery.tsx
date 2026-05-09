import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Play, Image as ImageIcon } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Gallery = () => {
  const { t } = useI18n();
  const items = t('gallery.items');
  const galleryItems = Array.isArray(items) ? items : [];

  const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1 });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary font-amiri mb-4">{t('gallery.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('gallery.desc')}</p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {galleryItems.map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <div 
                className="relative cursor-pointer overflow-hidden rounded-xl aspect-video shadow-md"
                onClick={() => setLightboxController({ toggler: !lightboxController.toggler, slide: index + 1 })}
              >
                <img src={item.url} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                   {item.type === 'video' ? <Play className="text-white w-12 h-12" /> : <ImageIcon className="text-white w-12 h-12" />}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <FsLightbox toggler={lightboxController.toggler} sources={galleryItems.map((i: any) => i.url)} slide={lightboxController.slide} />
    </section>
  );
};