import type { StaticImageData } from "next/image";

import bannerHero from "@/assets/banner/Group11.png";
import bannerFood from "@/assets/banner/Group12.png";
import offerOne from "@/assets/ExclusiveOffer/Group88.png";
import offerTwo from "@/assets/ExclusiveOffer/Group888.png";
import offerThree from "@/assets/ExclusiveOffer/Group8888.png";
import burgerOne from "@/assets/PopularResturant/Rectangle.png";
import burgerTwo from "@/assets/PopularResturant/Rectangle2.png";
import burgerThree from "@/assets/PopularResturant/Rectangle3.png";
import burgerFour from "@/assets/PopularResturant/Rectangle4.png";
import burgerFive from "@/assets/PopularResturant/Rectangle5.png";
import burgerSix from "@/assets/PopularResturant/Rectangle6.png";

import data from "./restaurants-details-data.json";
import type { RestaurantDetailsRecord } from "./types";

const imageMap: Record<string, StaticImageData> = {
  bannerHero,
  bannerFood,
  offerOne,
  offerTwo,
  offerThree,
  burgerOne,
  burgerTwo,
  burgerThree,
  burgerFour,
  burgerFive,
  burgerSix,
  friesOne: burgerTwo,
  friesTwo: burgerFour,
  friesThree: burgerFive,
  drinkOne: burgerOne,
  drinkTwo: burgerThree,
  drinkThree: burgerSix,
  drinkFour: burgerTwo,
  drinkFive: burgerFive,
};

export const restaurantsDetailsData =
  data.restaurants as RestaurantDetailsRecord[];

export function getRestaurantDetailsById(id: string) {
  return (
    restaurantsDetailsData.find((restaurant) => restaurant.id === id) ??
    restaurantsDetailsData[0]
  );
}

export function getRestaurantImage(imageKey: string) {
  return imageMap[imageKey] ?? bannerFood;
}
