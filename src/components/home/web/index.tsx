import React, { useContext } from "react";
import Image from "next/image";
import ResponsiveImage from "@/images/ResponsiveImage.png";
import PerformanceImage from "@/images/PerformanceImage.png";
import SecurityImage from "@/images/Security.png";
import { LanguageContext } from "@/contexts/LanguageContext";
import { WebTranslations } from "./translations";
import InteractiveAppEditor from "./InteractiveCodeEditor";

import WeCreateYourStore from "@/images/WeCreateYourStore.png";
import AdminPanel from "@/images/AdminPanel.png";

export default function Web() {
  const { language } = useContext(LanguageContext);
  const t = WebTranslations[language];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-lime-600">
          {t.title}
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          {t.subtitle}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  {t.responsiveTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t.responsiveText}
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-200 bg-gray-400 shadow-2xl">
                  <Image
                    className="size-full object-cover object-top"
                    src={ResponsiveImage}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  {t.performanceTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t.performanceText}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src={PerformanceImage}
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  {t.securityTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t.securityText}
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  className="h-[min(152px,40cqw)] object-cover object-center"
                  src={SecurityImage}
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                  {t.seoTitle}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {t.seoText}
                </p>
              </div>
              <InteractiveAppEditor />
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:px-8 py-12 lg:py-24">
        <hr />
      </div>

      <div className="flex flex-col items-center justify-center mx-auto space-y-12 lg:space-y-24">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-semibold text-balance tracking-tight text-gray-950 text-4xl sm:text-5xl">
                    {t.ecommerceTitle}
                  </h2>
                  <p className="text-gray-500">{t.ecommerceText}</p>
                </div>

                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mt-0.5 size-4 flex justify-center items-center shrink-0 md:size-6 text-lime-600"
                      fill="none"
                    >
                      <path
                        d="M2 10H7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 17H7"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 3H19"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.6 18.6L22 21M20.8 14.4C20.8 11.4176 18.3824 9 15.4 9C12.4176 9 10 11.4176 10 14.4C10 17.3824 12.4176 19.8 15.4 19.8C18.3824 19.8 20.8 17.3824 20.8 14.4Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        {t.ecommerceItem1}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mt-0.5 size-4 flex justify-center items-center shrink-0 md:size-6 text-lime-600"
                      fill="none"
                    >
                      <path
                        d="M8 16H15.2632C19.7508 16 20.4333 13.1808 21.261 9.06908C21.4998 7.88311 21.6192 7.29013 21.3321 6.89507C21.045 6.5 20.4947 6.5 19.3941 6.5H6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 16L5.37873 3.51493C5.15615 2.62459 4.35618 2 3.43845 2H2.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8.88 16H8.46857C7.10522 16 6 17.1513 6 18.5714C6 18.8081 6.1842 19 6.41143 19H17.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <circle
                        cx="10.5"
                        cy="20.5"
                        r="1.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <circle
                        cx="17.5"
                        cy="20.5"
                        r="1.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        {t.ecommerceItem2}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mt-0.5 size-4 flex justify-center items-center shrink-0 md:size-6 text-lime-600"
                      fill="none"
                    >
                      <path
                        d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.5 9H13.5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M12 19.5V22M12 19.5L7 19.5M12 19.5H17M7 19.5H4.5C3.11929 19.5 2 20.6193 2 22M7 19.5V22M17 19.5H19.5C20.8807 19.5 22 20.6193 22 22M17 19.5V22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        {t.ecommerceItem3}
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="flex lg:flex-col items-start md:justify-center space-x-3 md:space-x-0 md:space-y-2 pb-6 md:pb-0">
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                    href="/web-development"
                  >
                    {t.ecommerceButton2}
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
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm lg:text-base text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                    href="/web-development"
                  >
                    {t.ecommerceButton}
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
                src={WeCreateYourStore}
                alt="Features Image"
                className="object-cover rounded-xl"
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white"></div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
            <div className="hidden lg:block relative">
              <Image
                src={AdminPanel}
                alt="Features Image"
                className="object-cover rounded-xl"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-semibold text-balance tracking-tight text-gray-950 text-4xl sm:text-5xl">
                    {t.adminpanelTitle}
                  </h2>
                  <p className="text-gray-500">{t.adminpanelText}</p>
                </div>

                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mt-0.5 size-4 flex justify-center items-center shrink-0 md:size-6 text-lime-600"
                      fill="none"
                    >
                      <path
                        d="M19 19C19.3437 18.9498 19.6777 18.887 20 18.8125C20.5912 18.676 20.8868 18.6077 21.241 18.3251C21.443 18.1639 21.6952 17.8448 21.8059 17.6103C22 17.199 22 16.8002 22 16.0026V5.14011C22 4.14701 20.96 3.46492 20 3.68664C19.0803 3.89906 18.0659 4.01679 17 4.01679C15.0829 4.01679 13.3325 3.63598 12 3.00839C10.6675 2.38081 8.91707 2 7 2C5.93408 2 4.91969 2.11773 4 2.33014C3.4088 2.46669 3.11319 2.53497 2.75898 2.81759C2.55696 2.97878 2.30483 3.29786 2.19412 3.53242C2 3.94368 2 4.34249 2 5.14011V16.0026C2 16.9957 3.04003 17.6778 4 17.456C4.32232 17.3816 4.65627 17.3188 5 17.2686"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M14.5 10.5C14.5 9.11929 13.3807 8 12 8C10.6193 8 9.5 9.11929 9.5 10.5C9.5 11.8807 10.6193 13 12 13C13.3807 13 14.5 11.8807 14.5 10.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M5.5 9.5L5.5 9.49102"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.5 11.5078L18.5 11.4988"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 22V18M8 19L8 17M16 21V19"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        {t.adminpanelItem1}
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="mt-0.5 size-4 flex justify-center items-center shrink-0 md:size-6 text-lime-600"
                      fill="none"
                    >
                      <path
                        d="M17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M13.7884 12.3666C13.8097 11.9656 13.9222 11.232 13.3125 10.6745M13.3125 10.6745C13.1238 10.502 12.866 10.3463 12.5149 10.2225C11.2583 9.77964 9.71484 11.262 10.8067 12.6189C11.3936 13.3482 11.8461 13.5726 11.8035 14.4008C11.7735 14.9835 11.2012 15.5922 10.4469 15.8241C9.7916 16.0255 9.06876 15.7588 8.61156 15.2479C8.05332 14.6242 8.1097 14.0361 8.10492 13.7798M13.3125 10.6745L14.0006 9.98639M8.66131 15.3257L8.00781 15.9792"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-500">
                        {t.adminpanelItem2}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="block lg:hidden relative">
              <Image
                src={AdminPanel}
                alt="Features Image"
                className="object-cover rounded-xl"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
