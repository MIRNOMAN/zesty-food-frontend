/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { MapPin, Percent, ShoppingBasket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type LocationResult = {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
};

const DEFAULT_LOCATION = "Regent Street, A4, A4201, London";
const STORAGE_KEY = "zesty_location";

export default function TopBar() {
  const [location, setLocation] = useState(DEFAULT_LOCATION);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLocation(saved);
    }
  }, []);

  const locationLabel = useMemo(() => {
    if (!location) {
      return DEFAULT_LOCATION;
    }
    return location;
  }, [location]);

  const persistLocation = (nextLocation: string) => {
    setLocation(nextLocation);
    localStorage.setItem(STORAGE_KEY, nextLocation);
  };

  const handleSelectLocation = (result: LocationResult) => {
    persistLocation(result.display_name);
    setSheetOpen(false);
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      setSearchError("Enter a location to search.");
      return;
    }

    setIsSearching(true);
    setSearchError(null);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
          searchQuery.trim(),
        )}`,
        {
          headers: {
            "Accept-Language": "en",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Search failed.");
      }

      const data = (await response.json()) as LocationResult[];
      if (data.length === 0) {
        setSearchError("No locations found.");
      }
      setSearchResults(data.slice(0, 6));
    } catch (error: any) {
      setSearchError(error.message || "Unable to search. Try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setGeoError("Geolocation is not supported in this browser.");
      return;
    }

    setGeoError(null);
    setIsDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                "Accept-Language": "en",
              },
            },
          );

          if (!response.ok) {
            throw new Error("Reverse lookup failed.");
          }

          const data = (await response.json()) as {
            display_name?: string;
          };
          const label =
            data.display_name ||
            `Lat ${latitude.toFixed(4)}, Lng ${longitude.toFixed(4)}`;
          persistLocation(label);
          setSheetOpen(false);
        } catch (error: any) {
          setGeoError(error.message || "Unable to detect address. Try searching instead.");
        } finally {
          setIsDetecting(false);
        }
      },
      () => {
        setGeoError("Location access denied.");
        setIsDetecting(false);
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="container mx-auto">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <div className="mx-auto flex w-full items-center justify-between gap-4 px-4 py-2 md:py-3 text-xs text-slate-700 md:text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-6 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Percent className="size-3.5" />
              </span>
              <span className="hidden sm:inline">
                Get 5% Off your first order,
              </span>
              <span className="sm:hidden">Get 5% Off first order,</span>
              <span className="font-semibold text-orange-600">
                Promo: ORDER5
              </span>
            </div>

            <div className="hidden items-center gap-2 text-slate-600 md:flex">
              <MapPin className="size-4 text-slate-500" />
              <span className="max-w-70 truncate" title={locationLabel}>
                {locationLabel}
              </span>
              <SheetTrigger asChild>
                <Button
                  variant="link"
                  className="h-auto p-0 text-orange-600 hover:text-orange-700"
                >
                  Change Location
                </Button>
              </SheetTrigger>
            </div>

            <div className="flex items-center gap-2">
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="text-slate-600 md:hidden"
                  title="Change location"
                >
                  <MapPin className="size-4" />
                </Button>
              </SheetTrigger>
              <div className="flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-white">
                <ShoppingBasket className="size-4" />
                <span className="hidden sm:inline">23 Items</span>
                <span className="sm:hidden">23</span>
              </div>
            </div>
          </div>

          <SheetContent className="gap-6">
            <SheetHeader>
              <SheetTitle>Delivery location</SheetTitle>
              <SheetDescription>
                Choose your delivery address to see available options.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4 px-4">
              <Button
                className="w-full"
                onClick={handleDetectLocation}
                disabled={isDetecting}
              >
                {isDetecting ? "Detecting..." : "Use my current location"}
              </Button>
              {geoError && <p className="text-sm text-red-600">{geoError}</p>}
            </div>

            <form className="space-y-4 px-4" onSubmit={handleSearch}>
              <label className="block text-sm font-medium text-slate-700">
                Search location
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Enter city, street, or ZIP"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
              />
              <Button type="submit" className="w-full" disabled={isSearching}>
                {isSearching ? "Searching..." : "Search"}
              </Button>
              {searchError && (
                <p className="text-sm text-red-600">{searchError}</p>
              )}
            </form>

            <div className="space-y-2 px-4 pb-4">
              {searchResults.map((result) => (
                <button
                  key={result.place_id}
                  type="button"
                  onClick={() => handleSelectLocation(result)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 transition hover:border-orange-300 hover:bg-orange-50"
                >
                  {result.display_name}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
