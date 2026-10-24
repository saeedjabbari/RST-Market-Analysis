import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { OEMCompany } from '../types';

interface RealLeafletMapProps {
  oems: OEMCompany[];
  selectedOem: OEMCompany | null;
  onSelectOem: (oem: OEMCompany) => void;
  selectedCountry: string;
  selectedCity: string;
}

export const RealLeafletMap: React.FC<RealLeafletMapProps> = ({
  oems,
  selectedOem,
  onSelectOem,
  selectedCountry,
  selectedCity,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Initialize map once
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Create map centered on Middle East (Iran/Iraq/Turkey)
      const map = L.map(mapContainerRef.current, {
        center: [33.5, 46.5],
        zoom: 5,
        minZoom: 3,
        maxZoom: 18,
        scrollWheelZoom: true,
      });

      // CartoDB Voyager tiles (crisp, elegant, executive style)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Create a layer group for markers
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;

      // Invalidate size on load to ensure smooth rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 200);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersLayerRef.current = null;
      }
    };
  }, []);

  // Update markers and view when oems or selection change
  useEffect(() => {
    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    if (!map || !markersLayer) return;

    markersLayer.clearLayers();

    // Factory location marker (Spoota Industrial Group in Urmia)
    const spootaFactoryIcon = L.divIcon({
      className: 'spoota-factory-marker',
      html: `
        <div style="
          background: #ea580c;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 14px rgba(234, 88, 12, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 13px;
          transform: translate(-50%, -50%);
        ">
          RST
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
    });

    const spootaMarker = L.marker([37.4520, 45.1480], { icon: spootaFactoryIcon })
      .bindPopup(`
        <div style="font-family: 'Vazirmatn', sans-serif; text-align: right; direction: rtl;">
          <div style="font-size: 10px; color: #ea580c; font-weight: 800;">کارخانه مرکزی تولید محور</div>
          <div style="font-size: 13px; font-weight: 900; margin: 2px 0;">محورسازان جهان اسپوتا (RST)</div>
          <div style="font-size: 11px; color: #52525b;">کیلومتر ۱۲ جاده ارومیه به مهاباد</div>
          <a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" style="
            display: inline-block;
            margin-top: 6px;
            padding: 4px 10px;
            background: #ea580c;
            color: white;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 800;
            text-decoration: none;
          ">
            ورود به وب‌سایت rstaxles.com ↗
          </a>
        </div>
      `);
    markersLayer.addLayer(spootaMarker);

    // Add markers for all visible OEMs
    oems.forEach((oem) => {
      if (!oem.lat || !oem.lng) return;

      const isSelected = selectedOem?.id === oem.id;
      const isIran = oem.country === 'ایران';
      const bgColor = isSelected ? '#ea580c' : isIran ? '#18181b' : '#3f3f46';
      const borderColor = isSelected ? '#ffffff' : '#ffffff';
      const size = isSelected ? 34 : 26;

      const customIcon = L.divIcon({
        className: `oem-marker-${oem.id}`,
        html: `
          <div style="
            background: ${bgColor};
            color: white;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            border: 2px solid ${borderColor};
            box-shadow: 0 3px 10px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Vazirmatn', sans-serif;
            font-weight: 900;
            font-size: ${isSelected ? '12px' : '10px'};
            transform: translate(-50%, -50%);
            transition: transform 0.2s ease;
          ">
            ${oem.id}
          </div>
        `,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const marker = L.marker([oem.lat, oem.lng], { icon: customIcon });

      const popupHtml = `
        <div style="font-family: 'Vazirmatn', sans-serif; text-align: right; direction: rtl; min-width: 190px;">
          <div style="font-size: 10px; color: #ea580c; font-weight: 800;">${oem.country} — ${oem.city} (#${oem.id})</div>
          <div style="font-size: 12px; font-weight: 900; margin: 3px 0; color: #09090b;">${oem.name}</div>
          <div style="font-size: 11px; color: #52525b; margin-bottom: 6px;">
            <strong>محصولات:</strong> ${oem.portfolio}
          </div>
          <div style="font-size: 11px; color: #18181b; margin-bottom: 8px;">
            <strong>برند محور فعلی:</strong> ${oem.axleBrand}
          </div>
          <div style="display: flex; gap: 4px;">
            <a href="${oem.website}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              padding: 4px 8px;
              background: #18181b;
              color: white;
              border-radius: 6px;
              font-size: 10.5px;
              font-weight: 700;
              text-align: center;
              text-decoration: none;
            ">
              وب‌سایت ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml);

      marker.on('click', () => {
        onSelectOem(oem);
      });

      markersLayer.addLayer(marker);

      // Open popup if this marker is selected
      if (isSelected) {
        marker.openPopup();
      }
    });

    // Handle smooth flyTo when user filters by country or city
    if (selectedCity === 'ارومیه') {
      map.flyTo([37.5527, 45.0761], 10, { duration: 1 });
    } else if (selectedCity === 'تبریز') {
      map.flyTo([38.0800, 46.2919], 10, { duration: 1 });
    } else if (selectedCity === 'البرز' || selectedCity === 'تهران') {
      map.flyTo([35.7500, 51.1500], 9, { duration: 1 });
    } else if (selectedCity === 'کاشان' || selectedCity === 'اصفهان') {
      map.flyTo([33.3000, 51.5000], 8, { duration: 1 });
    } else if (selectedCountry === 'ایران') {
      map.flyTo([34.5, 49.5], 6, { duration: 1 });
    } else if (selectedCountry === 'ترکیه') {
      map.flyTo([39.0, 32.5], 6, { duration: 1 });
    } else if (selectedCountry === 'عربستان') {
      map.flyTo([24.5, 46.5], 6, { duration: 1 });
    } else if (selectedCountry === 'امارات') {
      map.flyTo([25.2, 55.3], 8, { duration: 1 });
    } else if (selectedCountry === 'اردن') {
      map.flyTo([31.9, 36.0], 8, { duration: 1 });
    } else if (selectedCountry === 'مصر') {
      map.flyTo([30.1, 31.4], 7, { duration: 1 });
    } else if (selectedOem && selectedOem.lat && selectedOem.lng && selectedCountry === 'ALL') {
      map.flyTo([selectedOem.lat, selectedOem.lng], Math.max(map.getZoom(), 8), { duration: 0.8 });
    }
  }, [oems, selectedOem, selectedCountry, selectedCity, onSelectOem]);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Preset Camera Views */}
      <div className="absolute top-3 right-3 z-[1000] flex flex-wrap gap-1 bg-white/95 dark:bg-zinc-900/95 backdrop-blur p-1 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold">
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([33.5, 46.5], 5, { duration: 1 })}
          className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🌍 خاورمیانه
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([37.52, 45.08], 10, { duration: 1 })}
          className="px-2 py-1 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 hover:bg-orange-600 hover:text-white transition-colors"
        >
          📍 قطب ارومیه (اسپوتا)
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([35.75, 51.15], 9, { duration: 1 })}
          className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🏙️ تهران و البرز
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([38.5, 31.0], 6, { duration: 1 })}
          className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🇹🇷 قونیه و ترکیه
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([25.0, 48.0], 6, { duration: 1 })}
          className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🇸🇦 عربستان و امارات
        </button>
      </div>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-3 right-3 z-[1000] bg-white/95 dark:bg-zinc-900/95 backdrop-blur p-2 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 text-[11px] space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-orange-600 inline-block shadow-sm"></span>
          <span className="font-bold text-zinc-900 dark:text-white">کارخانه محورسازان جهان اسپوتا (ارومیه)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-zinc-900 dark:bg-white inline-block"></span>
          <span className="text-zinc-700 dark:text-zinc-300">تولیدکنندگان ۵۰ گانه OEM تریلر</span>
        </div>
      </div>
    </div>
  );
};
