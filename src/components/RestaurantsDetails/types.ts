export type RestaurantHero = {
  tagline: string;
  name: string;
  minimumOrder: string;
  deliveryTime: string;
  rating: number;
  reviews: number;
  openUntil: string;
  backgroundImageKey: string;
  foodImageKey: string;
};

export type RestaurantOffer = {
  id: number;
  title: string;
  subtitle: string;
  discount: string;
  imageKey: string;
};

export type RestaurantMenuItem = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageKey: string;
};

export type RestaurantMenuSection = {
  id: string;
  title: string;
  items: RestaurantMenuItem[];
};

export type RestaurantInfoColumn = {
  title: string;
  rows: string[];
};

export type RestaurantLocation = {
  name: string;
  city: string;
  address: string;
  phone: string;
  website: string;
  mapQuery?: string;
};

export type RestaurantDetailsRecord = {
  id: string;
  hero: RestaurantHero;
  tabs: string[];
  offers: RestaurantOffer[];
  menuSections: RestaurantMenuSection[];
  infoColumns: RestaurantInfoColumn[];
  location: RestaurantLocation;
};
