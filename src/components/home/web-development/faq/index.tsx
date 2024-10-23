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
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full">
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
              {t.faqTitle}
            </h2>
            <p className="mt-1 hidden md:block text-gray-600">
              {t.faqText}
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="w-full hs-accordion-group divide-y divide-gray-200">
            {[
              { question: "Can I cancel at anytime?", answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback." },
              { question: "My team has credits. How do we use them?", answer: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details." },
              { question: "How does Preline's pricing work?", answer: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key." },
              { question: "How secure is Preline?", answer: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion." },
              { question: "How do I get access to a theme I purchased?", answer: "If you lose the link for a theme you purchased, don't panic! We've got you covered." },
            ].map((item, index) => (
              <div key={index} className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? "active" : ""}`}>
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-expanded={activeIndex === index}
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question}
                  <svg
                    className={`${activeIndex !== index ? "block" : "hidden"} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                    className={`${activeIndex === index ? "block" : "hidden"} shrink-0 size-5 text-gray-600 group-hover:text-gray-500`}
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
                  className={`hs-accordion-content ${activeIndex === index ? "block" : "hidden"} w-full overflow-hidden transition-[height] duration-300`}
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
