import Image from "next/image";
import { Bike, Clock3, Star } from "lucide-react";
import picture from "@/assets/RestaurantsDetails/backround.png";
import picture_22 from "@/assets/RestaurantsDetails/Rectangle44.png";
import type { RestaurantHero } from "./types";

type Props = {
  hero: RestaurantHero;
};

export default function RestaurantHeroSection({ hero }: Props) {
  return (
    <section className="rounded-2xl bg-white p-3 md:p-5">
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={picture.src}
          alt={hero.name}
          fill
          className="object-cover "
          priority
        />

        <div className="relative grid gap-6 p-5 md:grid-cols-[1.2fr_0.9fr] md:p-10">
          <div className="space-y-5 pt-36 text-black">
            <p className="text-base">{hero.tagline}</p>
            <h1 className="text-3xl font-bold md:text-5xl">{hero.name}</h1>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/40 bg-slate-900/40 px-4 py-2 text-sm">
                <Clock3 className="size-4" />
                {hero.minimumOrder}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/40 bg-slate-900/40 px-4 py-2 text-sm">
                <Bike className="size-4" />
                {hero.deliveryTime}
              </div>
            </div>
          </div>

          <div className="relative min-h-56 md:min-h-96 overflow-hidden rounded-xl bg-white/10 p-2 md:p-4 backdrop-blur-sm">
            <Image
              src={picture_22.src}
              alt={`${hero.name} food preview`}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-4 left-4 rounded-xl bg-white px-3 md:px-5 md:py-4 py-2 text-slate-900 shadow-xl">
              <p className="text-5xl font-semibold leading-none">
                {hero.rating}
              </p>
              <div className="mt-1 flex items-center gap-1 text-orange-500">
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
                <Star className="size-4 fill-current" />
              </div>
              <p className="text-xs font-medium text-slate-600">
                {hero.reviews.toLocaleString()} reviews
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 rounded-r-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white md:px-8 md:text-base">
          {hero.openUntil}
        </div>
      </div>
    </section>
  );
}
