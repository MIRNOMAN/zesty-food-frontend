"use client";

import { useMemo, useState } from "react";
import {
  Bell,
  CircleCheck,
  Crosshair,
  Plus,
  Sandwich,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutUsData from "./about-us-data.json";

type StepItem = {
  title: string;
  description: string;
  icon: "bell" | "food" | "phone";
  badge: "plus" | "target" | "check";
};

const iconMap = {
  bell: Bell,
  food: Sandwich,
  phone: Smartphone,
};

const badgeMap = {
  plus: Plus,
  target: Crosshair,
  check: CircleCheck,
};

export default function AboutUs() {
  const [activeTabId, setActiveTabId] = useState(aboutUsData.tabs[0]?.id ?? "");

  const activeTab = useMemo(
    () =>
      aboutUsData.tabs.find((tab) => tab.id === activeTabId) ??
      aboutUsData.tabs[0],
    [activeTabId],
  );

  const steps = (activeTab?.answer?.steps ?? []) as StepItem[];

  return (
    <section className="container mx-auto  py-6 md:py-12">
   <div className="">
       <Card className="rounded-2xl border-0 bg-[#f2f2f2] p-3 shadow-none md:p-20">
        <CardContent className="space-y-6 p-0 md:space-y-8">
          <div className="space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <h2 className="text-xl font-bold text-[#03081f] md:text-4xl/none">
              {aboutUsData.title}
            </h2>

            <div className="flex flex-wrap gap-1.5 md:gap-3">
              {aboutUsData.tabs.map((tab) => (
                <Button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  variant="outline"
                  className={`h-9 rounded-full border px-3 text-xs font-medium md:h-11 md:px-6 md:text-base ${
                    activeTabId === tab.id
                      ? "border-[#fc8a06] bg-white text-[#03081f]"
                      : "border-transparent bg-transparent text-[#03081f]/80 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          <Card className="rounded-xl border-0 bg-white p-3 shadow-none md:p-16">
            <CardContent className="grid gap-4 p-0 md:gap-8 lg:grid-cols-[1fr_1.6fr]">
              <div className="space-y-2 md:space-y-3">
                {activeTab?.questions?.map((question, index) => (
                  <button
                    key={`${question}-${index}`}
                    type="button"
                    className={`w-full rounded-full px-3 py-2 text-left text-sm font-semibold md:px-6 md:py-4 md:text-[20px]/none ${
                      index === 0
                        ? "bg-[#fc8a06] text-[#03081f]"
                        : "text-[#03081f] hover:bg-[#f8f8f8]"
                    }`}
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="rounded-xl bg-[#03081f] px-3 py-4 md:bg-transparent md:p-0">
                {steps.length > 0 ? (
                  <>
                    <div className="grid gap-3 md:grid-cols-3 md:gap-4">
                      {steps.map((step) => {
                        const StepIcon = iconMap[step.icon];
                        const BadgeIcon = badgeMap[step.badge];

                        return (
                          <Card
                            key={step.title}
                            className="rounded-xl border-0 bg-[#d9d9dd] py-4 md:py-6 shadow-none md:rounded-[10px]"
                          >
                            <CardContent className="space-y-2 px-4 pt-3 text-center">
                              <h3 className="text-base font-bold text-[#03081f] md:text-[22px]/none">
                                {step.title}
                              </h3>

                              <div className="relative mx-auto flex  size-14 items-center justify-center rounded-full bg-[#fcb66f] md:size-20">
                                <StepIcon
                                  className="size-7 text-[#fc8a06] md:size-11"
                                  strokeWidth={2.4}
                                />
                                <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-[#22c55e] text-white md:size-7">
                                  <BadgeIcon
                                    className="size-3 md:size-4"
                                    strokeWidth={2.8}
                                  />
                                </span>
                              </div>

                              <p className="text-xs font-medium text-[#03081f] pt-3 md:text-[18px]/none">
                                {step.description}
                              </p>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <p className="mt-4 text-center text-xs text-white md:mt-6 md:text-[18px]/normal md:text-[#03081f]">
                      {activeTab.answer.description}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-white md:text-lg md:text-[#03081f]">
                    {activeTab?.answer?.description}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="mt-4 rounded-2xl border-0 bg-[#fc8a06] py-0 shadow-none md:mt-7">
        <CardContent className="grid grid-cols-1 divide-y divide-white/35 px-8 py-6 text-white md:grid-cols-4 md:divide-x md:divide-y-0 md:px-0 md:py-5">
          {aboutUsData.stats.map((stat) => (
            <div key={stat.label} className="py-4 text-center md:py-2">
              <p className="text-5xl/none font-normal md:text-[70px]/none">
                {stat.value}
              </p>
              <p className="mt-1 md:mt-3 text-2xl/none font-bold md:text-[28px]/none">
                {stat.label}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
   </div>
    </section>
  );
}
