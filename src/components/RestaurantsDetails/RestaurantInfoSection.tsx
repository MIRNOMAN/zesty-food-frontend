import { Clock3, Info, MapPin, Phone, Globe } from "lucide-react";

import { Card } from "@/components/ui/card";

import type { RestaurantInfoColumn, RestaurantLocation } from "./types";

type Props = {
  infoColumns: RestaurantInfoColumn[];
  location: RestaurantLocation;
};

const iconMap = [Info, Phone, Clock3];

export default function RestaurantInfoSection({
  infoColumns,
  location,
}: Props) {
  const mapQuery = location.mapQuery ?? location.address;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <section className="space-y-8">
      <Card className="overflow-hidden rounded-2xl border-slate-200 py-0">
        <div className="grid lg:grid-cols-3">
          {infoColumns.map((column, index) => {
            const Icon = iconMap[index] ?? Info;
            const isDark = index === infoColumns.length - 1;

            return (
              <div
                key={column.title}
                className={`space-y-4 p-6 ${
                  isDark ? "bg-slate-950 text-white" : "bg-white text-slate-900"
                }`}
              >
                <h3 className="flex items-center gap-2 text-3xl font-bold">
                  <Icon className="size-6" />
                  {column.title}
                </h3>
                <ul
                  className={`space-y-2 text-sm ${isDark ? "text-slate-200" : "text-slate-700"}`}
                >
                  {column.rows.map((row) => (
                    <li key={row}>{row}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Card>

      <Card className="relative overflow-hidden rounded-2xl border-slate-200 py-0">
        <div className="h-[360px] w-full">
          <iframe
            title={`${location.name} location map`}
            src={mapSrc}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="absolute left-4 top-4 max-w-sm rounded-2xl bg-slate-950/95 p-6 text-white shadow-xl md:left-8 md:top-8">
          <h4 className="text-4xl font-bold">{location.name}</h4>
          <p className="mt-1 text-orange-400">{location.city}</p>
          <p className="mt-4 text-sm text-slate-300">{location.address}</p>

          <div className="mt-4 space-y-3 text-sm">
            <p className="flex items-center gap-2 text-orange-400">
              <Phone className="size-4" />
              {location.phone}
            </p>
            <p className="flex items-center gap-2 text-orange-400">
              <Globe className="size-4" />
              {location.website}
            </p>
            <a
              href={openMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-orange-400 underline"
            >
              <MapPin className="size-4" />
              Open in Google Maps
            </a>
          </div>
        </div>

     
      </Card>
    </section>
  );
}
