"use client";

import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import picture_1 from "@/assets/PopularResturant/Rectangle.png";
import picture_2 from "@/assets/PopularResturant/Rectangle2.png";
import picture_3 from "@/assets/PopularResturant/Rectangle3.png";
import picture_4 from "@/assets/PopularResturant/Rectangle4.png";
import picture_5 from "@/assets/PopularResturant/Rectangle5.png";
import picture_6 from "@/assets/PopularResturant/Rectangle6.png";

interface Restaurant {
  id: number;
  name: string;
  logo: string | StaticImageData;
  bgColor: string;
  initials: string;
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "McDonald's London",
    logo: picture_1,
    bgColor: "bg-red-600",
    initials: "MD",
  },
  {
    id: 2,
    name: "Papa Johns",
    logo: picture_2,
    bgColor: "bg-green-700",
    initials: "PJ",
  },
  {
    id: 3,
    name: "KFC West London",
    logo: picture_3,
    bgColor: "bg-red-600",
    initials: "KFC",
  },
  {
    id: 4,
    name: "Texas Chicken",
    logo: picture_4,
    bgColor: "bg-white border border-gray-200",
    initials: "TC",
  },
  {
    id: 5,
    name: "Burger King",
    logo: picture_5,
    bgColor: "bg-yellow-400",
    initials: "BK",
  },
  {
    id: 6,
    name: "Shaurma 1",
    logo: picture_6,
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
        className={` h-32 md:h-40 lg:h-56 flex items-center justify-center relative`}
      >
        {!imageError && restaurant.logo ? (
          <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 ">
            <Image
              src={restaurant.logo}
              alt={restaurant.name}
              fill
              className="object-contain w-full h-full"
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
