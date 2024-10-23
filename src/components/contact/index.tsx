import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FormTranslations } from "@/app/contact/translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = FormTranslations[language];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 xl:py-24 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border border-lime-400 rounded-xl p-4 sm:p-6 lg:p-8 mt-16 lg:mt-0">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">
              {t.formTitle}
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      {t.formFirstName}
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={t.formFirstName}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      {t.formLastName}
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={t.formLastName}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    {t.formEmail}
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    {t.formPhoneNumber}
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t.formPhoneNumber}
                  />
                </div>

                <div>
                  <label htmlFor="hs-service-1" className="sr-only">
                    {t.formDesiredService}
                  </label>
                  <select
                    name="hs-service-1"
                    id="hs-service-1"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formDesiredService}
                    </option>
                    <option value="asesoria-gratuita">
                      {t.formDesiredService1}
                    </option>
                    <option value="desarrollo-onepage">
                      {t.formDesiredService2}
                    </option>
                    <option value="desarrollo-landing-page">
                      {t.formDesiredService3}
                    </option>
                    <option value="desarrollo-ecommerce">
                      {t.formDesiredService4}
                    </option>
                    <option value="marketing-digital">
                      {t.formDesiredService5}
                    </option>
                    <option value="seo">{t.formDesiredService6}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-country-1" className="sr-only">
                    {t.formCountry}
                  </label>
                  <select
                    name="hs-country-1"
                    id="hs-country-1"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formCountry}
                    </option>
                    <option value="argentina">Argentina</option>
                    <option value="mexico">México</option>
                    <option value="espana">España</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-country-1" className="sr-only">
                    {t.formEstimatedBudget}
                  </label>
                  <select
                    name="hs-country-1"
                    id="hs-country-1"
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formEstimatedBudget}
                    </option>
                    <option value="0-300">$0 USD - $300 USD</option>
                    <option value="300-700">$300 USD - $700 USD</option>
                    <option value="700-1200">$700 USD - $1200 USD</option>
                    <option value="1200-2000">$1200 USD - $2000 USD</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    {t.formMessage}
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t.formMessage}
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gradient-to-l from-lime-600 to-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-700 hover:shadow-xl transition duration-300 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {t.formSendButton}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">{t.formResponseTIme}</p>
              </div>
            </form>
          </div>

          <div className="divide-y divide-gray-200">
            <div className=" flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
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
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">
                  {t.dataContactUs}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t.dataContactUsText}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-lime-600 hover:text-lime-500 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  digincrease@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">
                  {t.dataPhoneNumber}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {t.dataPhoneNumberText}
                </p>
                <p className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-lime-600 hover:text-lime-500 focus:outline-none focus:text-gray-800">
                  +54 9 11 3481-9602
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
                <p className="ml-3 mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-lime-600 hover:text-lime-500 focus:outline-none focus:text-gray-800">
                  +34 624 35 44 76
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
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
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">{t.dataFaq}</h3>
                <p className="mt-1 text-sm text-gray-500">{t.dataFaqText}</p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-lime-600 hover:text-lime-500 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  {t.dataFaqLink}
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className=" flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 text-neutral-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className="font-semibold text-gray-800">{t.dataHiring}</h4>
                <p className="mt-1 text-sm text-gray-500">{t.dataHiringText}</p>
                <p className="mt-2">
                  <a
                    className="group inline-flex items-center gap-x-2 font-medium text-sm text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                    href="#"
                  >
                    {t.dataHiringLink}
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
