import React, { useContext } from "react";
import RetroGrid from "@/components/magicui/retro-grid";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import { LanguageContext } from "@/contexts/LanguageContext";
import { HeroTranslations } from "@/lib/translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = HeroTranslations[language];

  return (
    <div className="relative overflow-hidden mt-24 lg:mt-16 2xl:mt-24">
      <RetroGrid />
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <BlurFade
                inView
                delay={0.8}
                className="inline-block text-base font-medium bg-clip-text bg-gradient-to-l from-lime-600 to-lime-500 text-transparent"
              >
                <AnimatedShinyText shimmerWidth={300}>
                  {t.title}
                </AnimatedShinyText>
              </BlurFade>

              <BlurFade inView delay={0.25} className="mt-5 max-w-2xl">
                <h1 className="block text-balance tracking-tight font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                  {t.subtitle}
                </h1>
              </BlurFade>

              <BlurFade inView delay={0.5} className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600">{t.description}</p>
              </BlurFade>

              <div className="mt-8 gap-3 flex justify-center">
                <BlurFade inView delay={0.6}>
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
                    href="/web-development"
                  >
                    {t.webDevelopment}
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
                </BlurFade>
                <BlurFade inView delay={0.7}>
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    href="/marketing"
                  >
                    {t.marketing}
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
                </BlurFade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <BlurFade
              delay={0.9}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">
                {t.successfulConsultations}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                + 150
              </dd>
            </BlurFade>
            <BlurFade
              delay={1.0}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">
                {t.satisfiedClients}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                + 35
              </dd>
            </BlurFade>
            <BlurFade
              delay={1.1}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">
                {t.businessPartnerships}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                + 50
              </dd>
            </BlurFade>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Index;
