import React, { useContext } from "react";
import Image from "next/image";
import { LanguageContext } from "@/contexts/LanguageContext";
import { MarketingTranslations } from "./translations";

import FreeAdvice from "@/images/FreeAdvice.png";
import BrandingAndRebranding from "@/images/BrandingAndRebranding.png";
import AdvertisingManagement from "@/images/AdvertisingManagement.png";
import ContentCreationAndDistribution from "@/images/ContentCreationAndDistribution.png";
import VideoAndPodcastEditing from "@/images/VideoAndPodcastEditing.png";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = MarketingTranslations[language];

  return (
    <div id="home-marketing" className="bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center lg:text-left text-base/7 font-semibold text-lime-600">
          Marketing
        </h2>
        <p className="mt-2 max-w-7xl text-center lg:text-left text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          {t.title}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-rows-2 relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <a
              href="/marketing#free-personalized-consulting"
              className="relative"
            >
              <div className="absolute inset-px rounded-lg bg-white hover:shadow-md transition-shadow duration-500"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {t.FreePersonalizedConsultingTitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {t.FreePersonalizedConsultingDescription}
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <Image
                    className="h-[150px] lg:h-[200px] object-cover object-center"
                    src={FreeAdvice}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </a>

            <a
              href="/marketing#branding-and-rebranding"
              className="relative hover:shadow-md"
            >
              <div className="absolute inset-px rounded-lg bg-white hover:shadow-md transition-shadow duration-500"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {t.BrandingAndRebrandingTitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {t.BrandingAndRebrandingDescription}
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <Image
                    className="h-[120px] lg:h-[200px] object-cover object-center"
                    src={BrandingAndRebranding}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <a
              href="/marketing#advertising-management"
              className="relative hover:shadow-md"
            >
              <div className="absolute inset-px rounded-lg bg-white hover:shadow-md transition-shadow duration-500"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {t.AdvertisingManagementTitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {t.AdvertisingManagementDescription}
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <Image
                    className="h-[300px] w-full object-cover object-center"
                    src={AdvertisingManagement}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </a>

            <a
              href="/marketing#video-and-podcast-editing"
              className="relative hover:shadow-md"
            >
              <div className="absolute inset-px rounded-lg bg-white hover:shadow-md transition-shadow duration-500"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {t.VideoAndPodcastEditing}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {t.VideoAndPodcastEditingDescription}
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="inset-0 w-full h-[250px] object-cover object-center z-0"
                    preload="auto"
                  >
                    <source
                      src="https://res.cloudinary.com/dvey7yw5h/video/upload/v1730239753/VideoAndPodcastEditing_iwd9ao.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </a>

            <a
              href="/marketing#content-creation-and-distribution"
              className="relative hover:shadow-md"
            >
              <div className="absolute inset-px rounded-lg bg-white hover:shadow-md transition-shadow duration-500"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                    {t.ContentCreationAndDistributionTitle}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {t.ContentCreationAndDistributionDescription}
                  </p>
                </div>
                <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                  <Image
                    className="h-[250px] object-cover object-center"
                    src={ContentCreationAndDistribution}
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
