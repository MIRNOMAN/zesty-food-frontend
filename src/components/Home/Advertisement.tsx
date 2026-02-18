import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Picture_1 from "@/assets/advertisement/Group10.png";
import Picture_2 from "@/assets/advertisement/Group8.png";
import Picture_3 from "@/assets/advertisement/friends.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Advertisement() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-16">
      <div className="space-y-4 md:space-y-6">
        <Card className="overflow-hidden rounded-2xl border-slate-200 bg-slate-100 p-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col-reverse items-center gap-4 px-4 pt-4 md:flex-row md:gap-6 md:px-8 md:pt-8">
              <div className="relative w-full md:w-1/2">
                <Image
                  src={Picture_3}
                  alt="Order app promotion"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>

              <div className="w-full space-y-3 text-center md:w-1/2 md:space-y-4 md:text-left">
                <h2 className="text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                  Ordering is more
                </h2>
                <h3 className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-2xl font-bold text-white md:text-4xl">
                  <span className="text-orange-500 underline">
                    Personalised
                  </span>
                  <span className="pl-2">&amp; Instant</span>
                </h3>
                <p className="text-sm text-slate-700 md:text-xl">
                  Download the Order.uk app for faster ordering
                </p>

                <div className="flex items-center justify-center gap-2 pb-4 md:justify-start md:pb-0">
                  <Link
                    href="#"
                    aria-label="Download on App Store"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-white"
                  >
                    <FaApple className="size-5" />
                    <span className="leading-tight text-left">
                      <span className="block text-[9px]">Download on the</span>
                      <span className="block text-sm font-semibold">
                        App Store
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="#"
                    aria-label="Get it on Google Play"
                    className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-2 text-white"
                  >
                    <FaGooglePlay className="size-4" />
                    <span className="leading-tight text-left">
                      <span className="block text-[9px]">Get it on</span>
                      <span className="block text-sm font-semibold">
                        Google Play
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 md:py-8">
          <Card className="relative overflow-hidden rounded-2xl border-0 p-0 shadow-none">
            <CardContent className="relative min-h-55 p-0 md:min-h-80">
              <Image
                src={Picture_1}
                alt="Partner with us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/55 to-transparent" />

              <div className="absolute left-4 top-0 rounded-b-xl bg-white px-5 py-2 text-sm font-bold text-slate-900 md:left-8">
                Earn more with lower fees
              </div>

              <div className="absolute bottom-5 left-4 space-y-2 md:bottom-7 md:left-8">
                <p className="text-xl text-orange-500 md:text-3xl">
                  Signup as a business
                </p>
                <h4 className="text-3xl font-bold text-white md:text-5xl">
                  Partner with us
                </h4>
                <Button className="mt-1 rounded-full bg-orange-500 px-8 text-white hover:bg-orange-600">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-2xl border-0 p-0 shadow-none">
            <CardContent className="relative min-h-55 p-0 md:min-h-80">
              <Image
                src={Picture_2}
                alt="Ride with us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

              <div className="absolute left-4 top-0 rounded-b-xl bg-white px-5 py-2 text-sm font-bold text-slate-900 md:left-8">
                Avail exclusive perks
              </div>

              <div className="absolute bottom-5 left-4 space-y-2 md:bottom-7 md:left-8">
                <p className="text-xl text-orange-500 md:text-3xl">
                  Signup as a rider
                </p>
                <h4 className="text-3xl font-bold text-white md:text-5xl">
                  Ride with us
                </h4>
                <Button className="mt-1 rounded-full bg-orange-500 px-8 text-white hover:bg-orange-600">
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
