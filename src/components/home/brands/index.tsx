import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

import PiletasRamiroLogo from "@/images/CenterCarLogo.png";
import Image, { StaticImageData } from "next/image";

const reviews = [
  {
    img: PiletasRamiroLogo,
  },
  {
    img: PiletasRamiroLogo,
  },
  {
    img: PiletasRamiroLogo,
  },
  {
    img: PiletasRamiroLogo,
  },
  {
    img: PiletasRamiroLogo,
  },
  {
    img: PiletasRamiroLogo,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: StaticImageData | string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 overflow-hidden"
      )}
    >
      <div className="flex flex-row items-center gap-2 select-none">
        <Image
          width="128"
          height="128"
          alt=""
          src={img}
        />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-50">
      <Marquee className="[--duration:20s] py-6">
        {firstRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s] py-6">
        {secondRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
}
