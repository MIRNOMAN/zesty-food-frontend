"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Restaurant {
  id: number;
  name: string;
  logo: string;
  bgColor: string;
  initials: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "McDonald's London",
    logo: "/images/restaurants/mcdonalds.png",
    bgColor: "bg-red-600",
    initials: "MD",
  },
  {
    id: 2,
    name: "Papa Johns",
    logo: "/images/restaurants/papajohns.png",
    bgColor: "bg-green-700",
    initials: "PJ",
  },
  {
    id: 3,
    name: "KFC West London",
    logo: "/images/restaurants/kfc.png",
    bgColor: "bg-red-600",
    initials: "KFC",
  },
  {
    id: 4,
    name: "Texas Chicken",
    logo: "/images/restaurants/texaschicken.png",
    bgColor: "bg-white border border-gray-200",
    initials: "TC",
  },
  {
    id: 5,
    name: "Burger King",
    logo: "/images/restaurants/burgerking.png",
    bgColor: "bg-yellow-400",
    initials: "BK",
  },
  {
    id: 6,
    name: "Shaurma 1",
    logo: "/images/restaurants/shaurma.png",
    bgColor: "bg-orange-400",
    initials: "S1",
  },
];

export default function PopularRestaurant() {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Popular Restaurants
        </h2>

        {/* Slider */}
        <Splide
          options={{
            type: "slide",
            perPage: 5,
            gap: "1rem",
             arrows: false,
          
            pagination: false,
            drag: true,
            breakpoints: {
              1280: { perPage: 4 },
              1024: { perPage: 3 },
              768: { perPage: 2 },
              640: { perPage: 1.5 },
              480: { perPage: 1.2 },
            },
          }}
        >
          {restaurants.map((restaurant) => (
            <SplideSlide key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden py-0 gap-0 shadow-md hover:shadow-xl transition duration-300 cursor-pointer bg-white rounded-2xl">
      {/* Logo Section */}
      <div
        className={`${restaurant.bgColor} h-32 md:h-40 lg:h-56 flex items-center justify-center relative`}
      >
        {!imageError && restaurant.logo ? (
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32">
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white opacity-80">
            {restaurant.initials}
          </span>
        )}
      </div>

      {/* Name Section */}
      <div className="bg-orange-500 px-4 py-3 md:py-4">
        <h3 className="text-white font-bold text-sm md:text-base lg:text-lg text-center">
          {restaurant.name}
        </h3>
      </div>
    </Card>
  );
};
