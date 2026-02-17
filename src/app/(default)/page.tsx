import Banner from "@/components/Home/Banner";
import ExclusiveOffer from "@/components/Home/ExclusiveOffer";
import PopularCategories from "@/components/Home/PopularCategories";


export default function Home() {
  return (
    <div className=" bg-white py-10">
 
      <Banner />
      <ExclusiveOffer />
      <PopularCategories  />
    </div>
  );
}
