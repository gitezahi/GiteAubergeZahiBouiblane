import React from "react";
import { Music, Headset } from "lucide-react";
import { useI18n } from "../../i18n/I18nContext";

const TRACKS = [
  {
    id: 1,
    titleKey: "music.track1.title",
    artistKey: "music.track1.artist",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/188989381&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 2,
    titleKey: "music.track2.title",
    artistKey: "music.track2.artist",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2229189053&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 3,
    titleKey: "music.track3.title",
    artistKey: "music.track3.artist",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/696811662&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    id: 4,
    titleKey: "music.track4.title",
    artistKey: "music.track4.artist",
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2229198941&color=%237c8a71&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  }
];

export function MusicSection() {
  const { t, dir } = useI18n();

  return (
    <section id="music" className="py-24 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="size-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Music className="size-8 text-olive" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-serif text-olive">
            {t('music.mainTitle')}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t('music.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TRACKS.map((track) => (
            <div key={track.id} className="bg-white p-4 rounded-3xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className={`flex items-center gap-3 mb-4 px-2 ${dir === "rtl" ? "flex-row" : "flex-row"}`}>
                <Headset className="size-5 text-terracotta" />
                <div className={dir === "rtl" ? "text-right" : "text-left"}>
                  <h3 className="font-bold text-foreground text-sm">{t(track.titleKey)}</h3>
                  <p className="text-xs text-muted-foreground">{t(track.artistKey)}</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden bg-muted">
                <iframe
                  width="100%"
                  height="160"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.src}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center italic text-muted-foreground text-sm">
          {t('music.footerNote')}
        </div>
      </div>
    </section>
  );
}