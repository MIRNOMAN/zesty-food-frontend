"use client";

import { useState } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RestaurantOffer {
  id: number;
  name: string;
  category: string;
  discount: string;
  image: string;
}

const offers: RestaurantOffer[] = [
  {
    id: 1,
    name: "Chef Burgers London",
    category: "Restaurant",
    discount: "-40%",
    image: "/images/burger.jpg",
  },
  {
    id: 2,
    name: "Grand Al Cafe London",
    category: "Restaurant",
    discount: "-29%",
    image: "/images/cafe.jpg",
  },
  {
    id: 3,
    name: "Butterbrot Café London",
    category: "Restaurant",
    discount: "-17%",
    image: "/images/butterbrot.jpg",
  },
  {
    id: 4,
    name: "Italian Pizza House",
    category: "Restaurant",
    discount: "-35%",
    image: "/images/pizza.jpg",
  },
];

const categories = ["Vegan", "Sushi", "Pizza & Fast food", "others"];

export default function ExclusiveOffer() {
  const [activeCategory, setActiveCategory] = useState("Pizza & Fast food");

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">
          Up to -40% 🎁{" "}
          <span className="text-slate-700">Order.uk exclusive deals</span>
        </h2>

        {/* Category Tabs - Desktop */}
        <div className="hidden gap-2 md:flex">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                activeCategory === category
                  ? "border-2 border-orange-500 bg-white text-orange-500"
                  : "border border-gray-300 bg-white text-slate-700 hover:border-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Category Dropdown - Mobile */}
        <div className="w-full md:hidden">
          <Select value={activeCategory} onValueChange={setActiveCategory}>
            <SelectTrigger className="h-11 rounded-full border-2 border-slate-900 bg-white px-4 text-sm font-medium text-slate-900">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs text-white">
                  ✓
                </span>
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Slider */}
      <div className="rounded-2xl overflow-hidden">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "1.5rem",
            speed: 800,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            autoplay: true,
             arrows: false,
            interval: 5000,
            pauseOnHover: true,
            breakpoints: {
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1280: {
                perPage: 4,
              },
            },
            pagination: false,
          
          }}
        >
          {offers.map((offer) => (
            <SplideSlide key={offer.id}>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl group cursor-pointer">
                {/* Image */}
                <Image
                  src={offer.image}
                  alt={offer.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                {/* Discount Badge */}
                <div className="absolute right-4 top-4 rounded-lg bg-slate-900 px-3 py-1 text-sm font-bold text-white">
                  {offer.discount}
                </div>

                {/* Content */}
                <div className="absolute bottom-4 left-4 right-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <p className="text-xs font-medium text-orange-400 mb-1">
                    {offer.category}
                  </p>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {offer.name}
                  </h3>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
