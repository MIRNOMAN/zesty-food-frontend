"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

import RestaurantHeroSection from "./RestaurantHeroSection";
import RestaurantInfoSection from "./RestaurantInfoSection";
import RestaurantMenuSection from "./RestaurantMenuSection";
import RestaurantOffersSection from "./RestaurantOffersSection";
import {
  getRestaurantDetailsById,
  getRestaurantImage,
} from "./restaurantDetailsData";

type Props = {
  restaurantId: string;
};

export default function RestaurantsDetails({ restaurantId }: Props) {
  const restaurant = getRestaurantDetailsById(restaurantId);
  const [activeTab, setActiveTab] = useState(restaurant.tabs[0] ?? "Offers");
  const [searchQuery, setSearchQuery] = useState("");

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const visibleOffers = useMemo(() => {
    return restaurant.offers.filter((offer) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        offer.title.toLowerCase().includes(normalizedSearch) ||
        offer.subtitle.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [restaurant.offers, normalizedSearch]);

  const visibleSections = useMemo(() => {
    const filtered = restaurant.menuSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          if (!normalizedSearch) {
            return true;
          }

          return (
            item.title.toLowerCase().includes(normalizedSearch) ||
            item.description.toLowerCase().includes(normalizedSearch)
          );
        }),
      }))
      .filter((section) => section.items.length > 0);

    if (activeTab === "Offers") {
      return filtered;
    }

    return filtered.filter(
      (section) => section.title.toLowerCase() === activeTab.toLowerCase(),
    );
  }, [restaurant.menuSections, activeTab, normalizedSearch]);

  return (
    <main className="bg-slate-100 py-8 md:py-10">
      <div className="container mx-auto space-y-8 px-4">
        <RestaurantHeroSection hero={restaurant.hero} />

        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">
              All Offers from {restaurant.hero.name}
            </h2>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search from menu..."
                className="h-11 w-full rounded-full border border-slate-300 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-orange-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto bg-orange-500 px-3 py-3 md:px-6">
            <div className="flex w-max items-center gap-2">
              {restaurant.tabs.map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-5 text-sm font-semibold ${
                    activeTab === tab
                      ? "bg-slate-950 text-white hover:bg-slate-900"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {tab}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <RestaurantOffersSection
          offers={visibleOffers}
          getImage={getRestaurantImage}
        />

        <div className="space-y-10">
          {visibleSections.map((section) => (
            <RestaurantMenuSection
              key={section.id}
              section={section}
              getImage={getRestaurantImage}
            />
          ))}
        </div>

        <RestaurantInfoSection
          infoColumns={restaurant.infoColumns}
          location={restaurant.location}
        />
      </div>
    </main>
  );
}
