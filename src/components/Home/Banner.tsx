"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import banner_1 from "@/assets/banner/Group11.png";
import banner_2 from "@/assets/banner/Group12.png";
import { Button } from "@/components/ui/button";

export default function Banner() {
  const images_cache = [banner_1, banner_2];
  return (
    <section className="container mx-auto px-4">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 mt-4 bg-white">
        <div className="flex flex-col md:flex-row items-center p-4 md:p-0 ">
          {/* Left Content */}
          <div className="md:w-2/6 w-full space-y-6 mb-6 md:ml-5 md:mb-0">
            <div className="text-sm md:text-lg font-bold text-slate-600">
              Order Restaurant food, takeaway and groceries.
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-slate-900 md:text-[55px]">
                Feast Your Senses,
              </h1>
              <h2 className="text-3xl font-bold text-orange-500 md:text-[55px]">
                Fast and Fresh
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Enter a postcode to see what we deliver
            </p>

            <div className="flex w-full max-w-md items-center rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="w-full rounded-full px-4 py-2 text-sm text-slate-700 outline-none"
              />
              <Button className="rounded-full bg-orange-500 px-6 text-white hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-4/6 w-full flex justify-center md:justify-end">
            <div className="relative w-full">
              <Splide
                options={{
                  type: "loop",
                  perPage: 1,
                  perMove: 1,
                  autoplay: true,
                  interval: 5000,
                  pauseOnHover: false,
                  arrows: false,
                  pagination: false,
                }}
              >
                {images_cache.map((image, index) => (
                  <SplideSlide key={`banner-${index}`}>
                    <Image
                      src={image}
                      alt="Food delivery"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
