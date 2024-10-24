import React, { useContext } from "react";
import Image from "next/image";

import FreeAdvice from "@/images/Marketing/FreeAdvice.png";
import BrandingAndRebranding from "@/images/Marketing/BrandingAndRebranding.png";
import AdvertisingManagement from "@/images/Marketing/AdvertisingManagement.png";
import ContentCreationAndDistribution from "@/images/Marketing/ContentCreationAndDistribution.png";
import VideoAndPodcastEditing from "@/images/Marketing/VideoAndPodcastEditing.png";

import { LanguageContext } from "@/contexts/LanguageContext";
import { MarketingTranslations } from "./translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = MarketingTranslations[language];

  return (
    <div
      id="marketing-services"
      className="flex flex-col items-center justify-center mx-auto"
    >
      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  {t.FreePersonalizedConsultingTitle}
                </h2>
                <p className="text-gray-500">
                  {t.FreePersonalizedConsultingText1}
                </p>
                <p className="text-gray-500">
                  {t.FreePersonalizedConsultingText2}
                </p>

                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  href="/contact"
                >
                  {t.AcquireService}
                  <svg
                    className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={FreeAdvice}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="hidden lg:block relative">
            <Image
              src={BrandingAndRebranding}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  {t.BrandingAndRebrandingTitle}
                </h2>
                <p className="text-gray-500">{t.BrandingAndRebrandingText1}</p>
                <p className="text-gray-500">{t.BrandingAndRebrandingText2}</p>
                <p className="text-gray-500">{t.BrandingAndRebrandingText3}</p>
                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  href="/contact"
                >
                  {t.AcquireService}
                  <svg
                    className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="block lg:hidden relative">
            <Image
              src={AdvertisingManagement}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  {t.AdvertisingManagementTitle}
                </h2>
                <p className="text-gray-500">
                  {t.AdvertisingManagementDescription}
                </p>
                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  href="/contact"
                >
                  {t.AcquireService}
                  <svg
                    className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={AdvertisingManagement}
              alt="AdvertisingManagement"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="hidden lg:block relative">
            <Image
              src={ContentCreationAndDistribution}
              alt="ContentCreationAndDistribution"
              className="object-cover rounded-xl"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  {t.ContentCreationAndDistributionTitle}
                </h2>
                <p className="text-gray-500">
                  {t.ContentCreationAndDistributionDescription}
                </p>

                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  href="/contact"
                >
                  {t.AcquireService}
                  <svg
                    className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="block lg:hidden relative">
            <Image
              src={ContentCreationAndDistribution}
              alt="ContentCreationAndDistribution"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  {t.VideoAndPodcastEditing}
                </h2>
                <p className="text-gray-500">
                  {t.VideoAndPodcastEditingDescription}
                </p>

                <a
                  className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  href="/contact"
                >
                  {t.AcquireService}
                  <svg
                    className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={VideoAndPodcastEditing}
              alt="VideoAndPodcastEditing"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
