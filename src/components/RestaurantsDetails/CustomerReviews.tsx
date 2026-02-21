"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, MapPin, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import data from "./customer-reviews-data.json";

type CustomerReview = {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
};

const customerReviews = data.reviews as CustomerReview[];

export default function CustomerReviews() {
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

  const cards = useMemo(() => customerReviews, []);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? "")
      .join("");
  };

  useEffect(() => {
    updateScrollState();

    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <section className="rounded-2xl bg-slate-200 py-10">
      <div className=" mx-auto space-y-6 px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">
            Customer Reviews
          </h2>

          <div className="hidden items-center gap-2 sm:flex">
            <Button
              type="button"
              size="icon"
              onClick={() => scrollByCard("prev")}
              disabled={!scrollState.canPrev}
              className="size-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              type="button"
              size="icon"
              onClick={() => scrollByCard("next")}
              disabled={!scrollState.canNext}
              className="size-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
              aria-label="Next reviews"
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
          {cards.map((review) => (
            <Card
              key={review.id}
              className="min-w-0 shrink-0 basis-[92%] snap-start border-slate-200 bg-white py-0 sm:basis-[70%] md:basis-[48%] lg:basis-[32%]"
            >
              <CardContent className="space-y-5 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {review.name}
                      </h3>
                      <p className="flex items-center gap-1 text-sm text-orange-500">
                        <MapPin className="size-3.5" />
                        {review.location}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="mb-1 flex items-center justify-end gap-1 text-orange-500">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="flex items-center justify-end gap-1 text-sm text-slate-600">
                      <Clock3 className="size-3.5 text-orange-500" />
                      {review.date}
                    </p>
                  </div>
                </div>

                <p className="text-base leading-7 text-slate-700">
                  {review.comment}
                </p>
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
            aria-label="Previous reviews"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            type="button"
            size="icon"
            onClick={() => scrollByCard("next")}
            disabled={!scrollState.canNext}
            className="size-11 rounded-full bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50"
            aria-label="Next reviews"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
