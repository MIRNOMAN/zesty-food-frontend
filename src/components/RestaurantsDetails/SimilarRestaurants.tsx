"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import restaurantOne from "@/assets/PopularResturant/Rectangle.png";
import restaurantTwo from "@/assets/PopularResturant/Rectangle2.png";
import restaurantThree from "@/assets/PopularResturant/Rectangle3.png";
import restaurantFour from "@/assets/PopularResturant/Rectangle4.png";
import restaurantFive from "@/assets/PopularResturant/Rectangle5.png";
import restaurantSix from "@/assets/PopularResturant/Rectangle6.png";

import data from "./similar-restaurants-data.json";

type SimilarRestaurant = {
  id: number;
  name: string;
  imageKey: string;
};

const restaurants = data.restaurants as SimilarRestaurant[];

const imageMap: Record<string, StaticImageData> = {
  restaurantOne,
  restaurantTwo,
  restaurantThree,
  restaurantFour,
  restaurantFive,
  restaurantSix,
};

export default function SimilarRestaurants() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [scrollState, setScrollState] = useState({
    canPrev: false,
    canNext: true,
  });

  const updateScrollState = () => {
    const node = sliderRef.current;
    if (!node) {
      return;
    }

    const canPrev = node.scrollLeft > 0;
    const canNext = node.scrollLeft + node.clientWidth < node.scrollWidth - 1;

    setScrollState({ canPrev, canNext });
  };

  const scrollByCard = (direction: "next" | "prev") => {
    const node = sliderRef.current;
    if (!node) {
      return;
    }

    const firstCard = node.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.offsetWidth ?? node.clientWidth;
    const step = direction === "next" ? cardWidth + 16 : -(cardWidth + 16);

    node.scrollBy({ left: step, behavior: "smooth" });
    window.setTimeout(updateScrollState, 250);
  };

  const cards = useMemo(() => restaurants, []);

  useEffect(() => {
    updateScrollState();

    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="rounded-2xl bg-slate-200 py-10">
      <div className="mx-auto space-y-6 px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Similar Restaurants
          </h2>

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              type="button"
              size="icon"
              onClick={() => scrollByCard("prev")}
              disabled={!scrollState.canPrev}
              className="size-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
              aria-label="Previous restaurants"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => scrollByCard("next")}
              disabled={!scrollState.canNext}
              className="size-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
              aria-label="Next restaurants"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onScroll={updateScrollState}
        >
          {cards.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="min-w-0 shrink-0 basis-[86%] snap-start overflow-hidden border-slate-300 py-0 sm:basis-[46%] md:basis-[30%] lg:basis-[20%]"
            >
              <CardContent className="p-0">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={imageMap[restaurant.imageKey] ?? restaurantOne}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 86vw, (max-width: 768px) 46vw, (max-width: 1024px) 30vw, 20vw"
                  />
                </div>
                <div className="bg-orange-500 px-3 py-2 text-center text-base font-semibold text-white">
                  {restaurant.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 sm:hidden">
          <Button
            type="button"
            size="icon"
            onClick={() => scrollByCard("prev")}
            disabled={!scrollState.canPrev}
            className="size-11 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
            aria-label="Previous restaurants"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            onClick={() => scrollByCard("next")}
            disabled={!scrollState.canNext}
            className="size-11 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
            aria-label="Next restaurants"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
