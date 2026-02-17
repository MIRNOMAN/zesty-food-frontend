"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const categories = [
  {
    title: "Burgers & Fast food",
    count: "21 Restaurants",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    tint: "#f6edc8",
  },
  {
    title: "Salads",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=800&auto=format&fit=crop",
    tint: "#ecebea",
  },
  {
    title: "Pasta & Casuals",
    count: "4 Restaurants",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
    tint: "#f0eceb",
  },
  {
    title: "Pizza",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop",
    tint: "#efecea",
  },
  {
    title: "Breakfast",
    count: "4 Restaurants",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop",
    tint: "#e9eef1",
  },
  {
    title: "Soups",
    count: "32 Restaurants",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    tint: "#ece7e2",
  },
];

export default function PopularCategories() {
  return (
    <section className="bg-[#f3f3f3] md:bg-none py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl">
          <span>Order.uk Popular Categories</span>
          <span className="text-xl" aria-hidden>
            🤩
          </span>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 6,
            perMove: 1,
            gap: "1rem",
            autoplay: true,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
            breakpoints: {
              1280: { perPage: 5 },
              1024: { perPage: 4 },
              768: { perPage: 3 },
              640: { perPage: 2 },
              420: { perPage: 1 },
            },
          }}
        >
          {categories.map((category) => (
            <SplideSlide key={category.title}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <div
                  className="flex items-center justify-center p-5"
                  
                >
                  <div className="relative h-36 w-full ">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                     
                      className=" object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="bg-gray-200 px-4 py-3">
                  <h3 className="text-sm md:text-lg font-bold text-black">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#FC8A06]">{category.count}</p>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
