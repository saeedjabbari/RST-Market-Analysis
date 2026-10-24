import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { OEMCompany } from '../types';

interface RealLeafletMapProps {
  oems: OEMCompany[];
  selectedOem: OEMCompany | null;
  onSelectOem: (oem: OEMCompany) => void;
  selectedCountry: string;
  selectedCity: string;
}

type TileProvider = 'osm' | 'esri' | 'satellite';

const tileProviders: Record<TileProvider, {
  name: string;
  shortName: string;
  icon: string;
  url: string;
  attribution: string;
  maxZoom: number;
}> = {
  esri: {
    name: 'صنعتی دقیق (Esri)',
    shortName: 'صنعتی',
    icon: '🏭',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri &mdash; بدون نیاز به API Key',
    maxZoom: 18,
  },
  satellite: {
    name: 'ماهواره‌ای هوایی',
    shortName: 'ماهواره',
    icon: '🛰️',
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '&copy; Esri World Imagery',
    maxZoom: 18,
  },
  osm: {
    name: 'استاندارد آزاد (OSM)',
    shortName: 'نقشه',
    icon: '🗺️',
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19,
  },
};

export const RealLeafletMap: React.FC<RealLeafletMapProps> = ({
  oems,
  selectedOem,
  onSelectOem,
  selectedCountry,
  selectedCity,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const currentTileLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const [activeProvider, setActiveProvider] = useState<TileProvider>('esri');

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

      // Default Esri World Street layer (100% Free, NO API Key needed, high reliability)
      const tileConfig = tileProviders['esri'];
      const tileLayer = L.tileLayer(tileConfig.url, {
        attribution: tileConfig.attribution,
        maxZoom: tileConfig.maxZoom,
      }).addTo(map);

      currentTileLayerRef.current = tileLayer;

      // Create a layer group for markers
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersLayerRef.current = null;
        currentTileLayerRef.current = null;
      }
    };
  }, []);

  // Switch Tile Layer when user toggles provider
  const handleSwitchTileProvider = (providerKey: TileProvider) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (currentTileLayerRef.current) {
      map.removeLayer(currentTileLayerRef.current);
    }

    const config = tileProviders[providerKey];
    const newLayer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: config.maxZoom,
    }).addTo(map);

    currentTileLayerRef.current = newLayer;
    setActiveProvider(providerKey);
  };

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
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 16px rgba(234, 88, 12, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 13px;
          transform: translate(-50%, -50%);
          position: relative;
        ">
          RST
          <span style="
            position: absolute;
            top: -4px;
            right: -4px;
            width: 10px;
            height: 10px;
            background: #22c55e;
            border-radius: 50%;
            border: 2px solid #ffffff;
          "></span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

    const compactPopupOptions: L.PopupOptions = {
      maxWidth: 200,
      minWidth: 140,
      autoPan: true,
      autoPanPadding: [12, 12],
      closeButton: true,
      className: 'compact-oem-popup',
    };

    const spootaMarker = L.marker([37.4520, 45.1480], { icon: spootaFactoryIcon })
      .bindPopup(`
        <div style="font-family: 'Vazirmatn', sans-serif; text-align: right; direction: rtl; max-width: 185px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px; margin-bottom: 2px;">
            <span style="font-size: 11px; font-weight: 900; color: #ea580c; white-space: nowrap;">محورسازان اسپوتا (RST)</span>
            <span style="font-size: 8.5px; padding: 1px 4px; border-radius: 4px; background: #09090b; color: white; font-weight: 800;">مرکزی</span>
          </div>
          <div style="font-size: 9px; color: #52525b; margin-bottom: 3px;">📍 ارومیه (کیلومتر ۱۲ جاده مهاباد)</div>
          <div style="font-size: 9px; color: #ea580c; background: #fff7ed; padding: 2px 4px; border-radius: 4px; margin-bottom: 4px; border: 1px solid #fed7aa; font-weight: 700;">
            ⭐ ظرفیت: ۳۰,۰۰۰ محور ECE
          </div>
          <a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" style="
            display: block;
            text-align: center;
            padding: 3px 6px;
            background: #ea580c;
            color: white;
            border-radius: 4px;
            font-size: 9.5px;
            font-weight: 800;
            text-decoration: none;
          ">
            ورود به rstaxles.com ↗
          </a>
        </div>
      `, compactPopupOptions);
    markersLayer.addLayer(spootaMarker);

    // Add markers for all visible OEMs
    oems.forEach((oem) => {
      if (!oem.lat || !oem.lng) return;

      const isSelected = selectedOem?.id === oem.id;
      const isIran = oem.country === 'ایران';
      const bgColor = isSelected ? '#ea580c' : isIran ? '#18181b' : '#3f3f46';
      const size = isSelected ? 32 : 24;

      const customIcon = L.divIcon({
        className: `oem-marker-${oem.id}`,
        html: `
          <div style="
            background: ${bgColor};
            color: white;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Vazirmatn', sans-serif;
            font-weight: 900;
            font-size: ${isSelected ? '11px' : '9.5px'};
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
        <div style="font-family: 'Vazirmatn', sans-serif; text-align: right; direction: rtl; max-width: 180px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 4px; margin-bottom: 2px;">
            <span style="font-size: 11px; font-weight: 900; color: #09090b; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 125px;">
              ${oem.name}
            </span>
            <span style="font-size: 8.5px; padding: 1px 4px; border-radius: 4px; background: #ea580c; color: white; font-weight: 800; shrink: 0;">
              #${oem.id}
            </span>
          </div>
          <div style="font-size: 9px; color: #71717a; margin-bottom: 2px;">
            📍 ${oem.city} (${oem.country})
          </div>
          <div style="font-size: 9px; color: #27272a; margin-bottom: 3px; line-height: 1.25;">
            <span style="color: #71717a;">محور:</span> <strong>${oem.axleBrand}</strong>
          </div>
          <div style="display: flex; gap: 4px;">
            <a href="${oem.website}" target="_blank" rel="noopener noreferrer" style="
              flex: 1;
              padding: 3px 6px;
              background: #18181b;
              color: white;
              border-radius: 4px;
              font-size: 9.5px;
              font-weight: 700;
              text-align: center;
              text-decoration: none;
            ">
              وب‌سایت رسمی ↗
            </a>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, compactPopupOptions);

      marker.on('click', () => {
        onSelectOem(oem);
      });

      markersLayer.addLayer(marker);

      if (isSelected) {
        marker.openPopup();
      }
    });

    // Smooth flyTo based on selection
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
    <div className="relative w-full h-[460px] sm:h-[540px] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-inner">
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Layer Switcher (100% Free / No API Key) - Mobile Identifiable & Easily Selectable */}
      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-[1000] flex items-center gap-1 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-1 sm:p-1.5 rounded-xl shadow-lg border border-zinc-200/90 dark:border-zinc-700/90">
        <div className="flex items-center gap-1 px-1 sm:px-1.5 text-zinc-500 dark:text-zinc-400 font-black text-[10px] sm:text-xs select-none">
          <span className="text-xs sm:text-sm">🗂️</span>
          <span className="hidden sm:inline">لایه:</span>
        </div>
        <div className="flex items-center gap-1">
          {(Object.keys(tileProviders) as TileProvider[]).map((key) => {
            const provider = tileProviders[key];
            const isActive = activeProvider === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSwitchTileProvider(key)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center gap-1 select-none active:scale-95 ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 font-black ring-1 ring-orange-500'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
                title={provider.name}
              >
                <span>{provider.icon}</span>
                <span className="sm:hidden">{provider.shortName}</span>
                <span className="hidden sm:inline">{provider.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Preset Camera Views */}
      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-[1000] flex items-center gap-1 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-1 sm:p-1.5 rounded-xl shadow-lg border border-zinc-200/90 dark:border-zinc-700/90 text-[10px] sm:text-xs font-bold">
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([37.52, 45.08], 10, { duration: 1 })}
          className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 hover:bg-orange-600 hover:text-white transition-all active:scale-95"
          title="زوم به کارخانه محورسازان جهان اسپوتا در ارومیه"
        >
          📍 ارومیه
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([33.5, 46.5], 5, { duration: 1 })}
          className="px-2 sm:px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-orange-600 hover:text-white transition-all active:scale-95"
          title="دید کلی خاورمیانه و ۵۰ کارخانه"
        >
          🌍 منطقه
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([35.75, 51.15], 9, { duration: 1 })}
          className="hidden md:inline-block px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🏙️ تهران
        </button>
        <button
          type="button"
          onClick={() => mapInstanceRef.current?.flyTo([38.5, 31.0], 6, { duration: 1 })}
          className="hidden md:inline-block px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-orange-600 hover:text-white transition-colors"
        >
          🇹🇷 ترکیه
        </button>
      </div>

      {/* Status Badge: No API Key Needed */}
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-[1000] hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/85 text-emerald-300 border border-emerald-800/80 backdrop-blur text-[10px] font-bold">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>سامانه GIS آزاد: ۱۰۰٪ رایگان و بدون نیاز به API Key</span>
      </div>

      {/* Map Legend Overlay (Ultra-compact on mobile) */}
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-[1000] bg-white/95 dark:bg-zinc-900/95 backdrop-blur px-2 py-1 sm:p-2 rounded-xl shadow-md border border-zinc-200 dark:border-zinc-800 text-[9.5px] sm:text-[11px] space-y-0.5 sm:space-y-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded bg-orange-600 inline-block shadow-sm shrink-0"></span>
          <span className="font-bold text-zinc-900 dark:text-white truncate">اسپوتا (ارومیه)</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-zinc-900 dark:bg-white inline-block shrink-0"></span>
          <span className="text-zinc-700 dark:text-zinc-300 truncate">۵۰ کارخانه OEM</span>
        </div>
      </div>
    </div>
  );
};
