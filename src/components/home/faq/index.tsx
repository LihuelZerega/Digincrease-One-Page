import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FrecuentlyAskedQuestionsTranslations } from "@/lib/translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = FrecuentlyAskedQuestionsTranslations[language];

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
            {t.title}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {t.faq1}
              </h3>
              <p className="mt-2 text-gray-600">
                {t.response1}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              {t.faq2}
              </h3>
              <p className="mt-2 text-gray-600">
              {t.response2}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              {t.faq3}
              </h3>
              <p className="mt-2 text-gray-600">
              {t.response3}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
              {t.faq4}
              </h3>
              <p className="mt-2 text-gray-600">
              {t.response4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
