import { useEffect, useState } from "react";
import { Cloud, Sun, CloudRain, Snowflake } from "lucide-react"; // مكتبة الأيقونات الموجودة في مشروعك

export function Weather() {
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  
  // إحداثيات بويبلان (Bouiblane)
  const lat = 33.66; 
  const lon = -4.01;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          code: data.current_weather.weathercode
        });
      } catch (error) {
        console.error("خطأ في جلب بيانات الطقس", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return null;

  // اختيار الأيقونة بناءً على حالة الطقس
  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun className="w-4 h-4 text-orange-500" />;
    if (code >= 1 && code <= 3) return <Cloud className="w-4 h-4 text-gray-400" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-4 h-4 text-blue-400" />;
    if (code >= 71 && code <= 77) return <Snowflake className="w-4 h-4 text-blue-200" />;
    return <Sun className="w-4 h-4" />;
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-stone-100/50 rounded-full border border-stone-200 shadow-sm">
      {getWeatherIcon(weather.code)}
      <span className="text-sm font-medium text-stone-700">{weather.temp}°C</span>
    </div>
  );
}