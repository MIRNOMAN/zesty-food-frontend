import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { RestaurantOffer } from "./types";

type Props = {
  offers: RestaurantOffer[];
  getImage: (imageKey: string) => StaticImageData;
};

export default function RestaurantOffersSection({ offers, getImage }: Props) {
  if (offers.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {offers.map((offer) => (
        <article
          key={offer.id}
          className="group relative h-44 md:h-72 overflow-hidden rounded-2xl"
        >
          <Image
            src={getImage(offer.imageKey)}
            alt={offer.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/35 to-transparent" />

          <div className="absolute right-0 top-0 rounded-bl-xl bg-slate-950 px-3 py-2 text-sm font-semibold text-white">
            {offer.discount}
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-white">
            <div>
              <p className="text-xs md:text-sm text-orange-400">{offer.subtitle}</p>
              <h3 className="text-3xl font-bold leading-tight">
                {offer.title}
              </h3>
            </div>
            <Button
              size="icon-sm"
              className="rounded-full bg-white text-slate-900 hover:bg-slate-100"
            >
              <Plus className="size-5" />
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
}
