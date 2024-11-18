import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ImageModel } from "@/models/ImageModel";
import React, { useState } from "react";
import { Skeleton } from "./skeleton";

export const ImageCard = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Card
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </Card>
  )
);

ImageCard.displayName = "ImageCard";

export function FocusCards({
  images,
  imagesPerPage,
  loading,
}: {
  images: ImageModel[];
  imagesPerPage: number;
  loading: boolean;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {loading
        ? Array.from({ length: imagesPerPage }).map((_, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full">
                  <Skeleton className="absolute inset-0" />
                </div>
              </CardContent>
            </Card>
          ))
        : images.map((image, index) => (
            <ImageCard
              key={image.title}
              card={image}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ))}
    </>
  );
}
