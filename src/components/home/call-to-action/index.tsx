import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { CallToActionTranslations } from "@/lib/translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = CallToActionTranslations[language];

  return (
    <div className="bg-gray-50">
      <div className="py-16">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              {t.title}{" "}
              <span className="bg-clip-text bg-gradient-to-l from-lime-600 to-lime-500 text-transparent">
                {t.title2}
              </span>
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              {t.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#web-development"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-lime-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  {t.webDevelopmentButton}
                </span>
              </a>
              <a
                href="#marketing"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary">
                  {t.marketingButton}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
