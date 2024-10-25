import React, { useContext } from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/magicui/blur-fade";
import { LanguageContext } from "@/contexts/LanguageContext";
import { HeroTranslations } from "./translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = HeroTranslations[language];

  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://res.cloudinary.com/dvey7yw5h/image/upload/v1729782633/HeroBackground_pfzoud.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 mt-24">
        <div className="mt-5 max-w-4xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            {t.Title1}
            <span className="bg-clip-text bg-gradient-to-tl from-lime-500 to-lime-600 text-transparent">
              {" "}
              {t.Title2}{" "}
            </span>
            {t.Title3}{" "}
            <span className="bg-clip-text bg-gradient-to-tl from-lime-500 to-lime-600 text-transparent">
              {" "}
              {t.Title4}{" "}
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-4xl text-center mx-auto">
          <p className="text-lg text-gray-600">{t.Description}</p>
        </div>

        <BlurFade
          inView
          delay={0.5}
          className= "mt-7 grid items-center justify-center gap-3 w-full sm:inline-flex"
        >
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-500"
            href="#web-development-prices"
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
    </div>
  );
}

export default Index;
