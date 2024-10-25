import React, { useState, useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FaqTranslations } from "./translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = FaqTranslations[language];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="home-faq" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-left text-base/7 font-semibold text-lime-600">
            {t.faqTitle}
          </h2>
          <div>
            <h2 className="text-2xl md:text-4xl text-neutral-800 font-semibold tracking-tight text-balance">
              {t.faqDescription}
            </h2>
            <p className="mt-2 text-gray-600">{t.faqText}</p>
            <a
              className="mt-3 group inline-flex items-center gap-x-2 font-medium text-sm text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
              href="/contact"
            >
              {t.faqButton}
              <svg
                className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-focus:translate-x-0.5"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="w-full hs-accordion-group divide-y divide-gray-200">
            {[
              {
                question: t.faqQuestion1,
                answer: t.faqAnswer1,
              },
              {
                question: t.faqQuestion2,
                answer: t.faqAnswer2,
              },
              {
                question: t.faqQuestion3,
                answer: t.faqAnswer3,
              },
              {
                question: t.faqQuestion4,
                answer: t.faqAnswer4,
              },
              {
                question: t.faqQuestion5,
                answer: t.faqAnswer5,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`hs-accordion pt-6 pb-3 ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-expanded={activeIndex === index}
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`${
                      activeIndex !== index ? "block" : "hidden"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className={`${
                      activeIndex === index ? "block" : "hidden"
                    } shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  className={`hs-accordion-content ${
                    activeIndex === index ? "block" : "hidden"
                  } w-full overflow-hidden transition-[height] duration-300`}
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
