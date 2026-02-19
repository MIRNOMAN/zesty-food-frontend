import Banner from "@/components/Home/Banner";
import Advertisement from "@/components/Home/Advertisement";
import ExclusiveOffer from "@/components/Home/ExclusiveOffer";
import PopularCategories from "@/components/Home/PopularCategories";
import PopularResturant from "@/components/Home/PopularResturant";
import AboutUs from "@/components/Home/AboutUs";

export default function Home() {
  return (
    <div className=" bg-white py-10">
      <Banner />

      <ExclusiveOffer />
      <PopularCategories />
      <PopularResturant />

      <Advertisement />
      <AboutUs />
    </div>
  );
}
