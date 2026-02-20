import Image from "next/image";
import type { StaticImageData } from "next/image";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import type { RestaurantMenuSection as RestaurantMenuSectionType } from "./types";

type Props = {
  section: RestaurantMenuSectionType;
  getImage: (imageKey: string) => StaticImageData;
};

export default function RestaurantMenuSection({ section, getImage }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold text-slate-900">{section.title}</h2>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item) => (
          <Card
            key={item.id}
            className="flex-row items-stretch gap-0 overflow-hidden rounded-xl border-slate-200 py-0"
          >
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <h3 className="text-lg font-semibold leading-tight text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">
                  {item.description}
                </p>
              </div>
              <p className="mt-4 text-sm font-bold text-slate-900">
                {item.price}
              </p>
            </div>

            <div className="relative mr-4 my-4 w-26 shrink-0 overflow-hidden rounded-lg bg-slate-100">
              <Image
                src={getImage(item.imageKey)}
                alt={item.title}
                fill
                className="object-cover"
              />
              <Button
                size="icon-xs"
                className="absolute -bottom-2 -right-2 rounded-full bg-slate-950 text-white hover:bg-slate-800"
              >
                <Plus className="size-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
