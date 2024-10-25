import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import { MarketingTranslations } from "../services/translations";

import BlurFade from "@/components/magicui/blur-fade";

import MarketingImage from "@/images/MarketingImage.png";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = MarketingTranslations[language];

  return (
    <div className="bg-neutral-50">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-24 border-b">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <BlurFade inView delay={0.10} className="block text-balance tracking-tight font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              {t.HeroTitle}
            </BlurFade>
            <BlurFade inView delay={0.20} className="mt-3 text-lg text-gray-600">{t.HeroSubtitle}</BlurFade>
            <BlurFade inView delay={0.30} className="mt-3 text-base text-gray-600">{t.HeroDescription}</BlurFade>

            <BlurFade inView delay={0.50} className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-500"
                href="#marketing-services"
              >
                {t.HeroButton}
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                href="/contact"
              >
                {t.HeroContactButton}
              </a>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.50} className="relative ms-4">
            <div className="bg-neutral-600 rounded-md">
              <Image
                className="relative w-full rounded-md h-[500px] my-12 object-cover opacity-60"
                src={MarketingImage}
                alt="Hero Image"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export default Index;
