import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

import Image, { StaticImageData } from "next/image";

import PiletasRamiroLogo from "@/images/PiletasRamiroLogoNegative.png";
import CenterCarLogo from "@/images/CenterCarLogo.png";
import InterbussinexLogo from "@/images/InterbussinexLogo.png";
import LullaxLogo from "@/images/LullaxLogoX.png";
import RosemenLogo from "@/images/RosemenLogo.png";
import PrestigeRelojesLogo from "@/images/PrestigeRelojesLogo.png";
import OmegaVisionLogo from "@/images/OmegaVisionLogo.png";
import NfArqLogo from "@/images/NfArqLogo.png";
import StudioCahLogo from "@/images/StudioCahLogo.png";

const reviews = [
  {
    img: PiletasRamiroLogo,
  },
  {
    img: CenterCarLogo,
  },
  {
    img: InterbussinexLogo,
  },
  {
    img: LullaxLogo,
  },
  {
    img: RosemenLogo,
  },
  {
    img: PrestigeRelojesLogo,
  },
  {
    img: OmegaVisionLogo,
  },
  {
    img: NfArqLogo,
  },
  {
    img: StudioCahLogo,
  },

];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ img }: { img: StaticImageData | string }) => {
  return (
    <figure className={cn("relative w-64 overflow-hidden")}>
      <div className="flex flex-row items-center gap-2 select-none">
        <Image width="128" height="128" alt="" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-50">
      <Marquee className="[--duration:40s] py-6">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
    </div>
  );
}