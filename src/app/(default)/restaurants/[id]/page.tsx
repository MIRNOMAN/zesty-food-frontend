import RestaurantsDetails from "@/components/RestaurantsDetails/RestaurantsDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RestaurantDetailsPage({ params }: Props) {
  const { id } = await params;

  return <RestaurantsDetails restaurantId={id} />;
}
