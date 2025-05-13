import React, { useContext, useState } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FormTranslations } from "@/app/contact/translations";
import { AnimatePresence } from "framer-motion";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = FormTranslations[language];

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    derisedService: "",
    country: "",
    estimatedBudget: "",
    message: "",
  });

  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");

  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedService) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un Servicio deseado.",
      });
      setIsModalOpen(true);
      return;
    }

    if (!selectedCountry) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione su Pais.",
      });
      setIsModalOpen(true);
      return;
    }

    if (!selectedBudget) {
      setModalContent({
        title: "Error",
        message: "Por favor, seleccione un Presupuesto estimado.",
      });
      setIsModalOpen(true);
      return;
    }

    if (!isTermsChecked) {
      setModalContent({
        title: "Error",
        message: "Debes aceptar los términos y condiciones antes de continuar.",
      });
      setIsModalOpen(true);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        derisedService: selectedService,
        country: selectedCountry,
        estimatedBudget: selectedBudget,
      }),
    });

    if (res.ok) {
      setModalContent({
        title: "Mensaje enviado exitosamente",
        message:
          "El mensaje ha sido enviado exitosamente, pronto nos pondremos en contacto. ¡Gracias por contactarnos!",
      });
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        derisedService: "",
        country: "",
        estimatedBudget: "",
        message: "",
      });
      setSelectedService("");
      setSelectedCountry("");
      setSelectedBudget("");

      setIsTermsChecked(false);
    } else {
      setModalContent({
        title: "Error",
        message: "Error al enviar el mensaje",
      });
    }
    setIsModalOpen(true);
  };

  const openTerms = () => {
    setIsTermsOpen(true);
  };

  const closeTerms = () => {
    setIsTermsOpen(false);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 xl:py-24 mx-auto">
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border border-lime-400 rounded-xl p-4 sm:p-6 lg:p-8 mt-16 lg:mt-0">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">
              {t.formTitle}
            </h2>

            <form onSubmit={handleSubmit}>
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
                      id="first-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={t.formFirstName}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      {t.formLastName}
                    </label>
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
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
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
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
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    required
                    autoComplete="tel"
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
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formDesiredService}
                    </option>
                    <option value="Marketing Digital">
                      {t.formDesiredService5}
                    </option>
                    <option value="Asesoria Gratuita">
                      {t.formDesiredService1}
                    </option>
                    <option value="Desarrollo Onepage">
                      {t.formDesiredService2}
                    </option>
                    <option value="Desarrollo Landing page">
                      {t.formDesiredService3}
                    </option>
                    <option value="Desarrollo E-commerce">
                      {t.formDesiredService4}
                    </option>
                    {/* <option value="seo">{t.formDesiredService6}</option> */}
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-country-1" className="sr-only">
                    {t.formCountry}
                  </label>
                  <select
                    name="hs-country-1"
                    id="hs-country-1"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formCountry}
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Mexico">México</option>
                    <option value="Espana">España</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="hs-country-1" className="sr-only">
                    {t.formEstimatedBudget}
                  </label>
                  <select
                    name="hs-country-1"
                    id="hs-country-1"
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected>
                      {t.formEstimatedBudget}
                    </option>
                    <option value="$0 - $300">$0 USD - $300 USD</option>
                    <option value="$300 - $700">$300 USD - $700 USD</option>
                    <option value="$700 - $1200">$700 USD - $1200 USD</option>
                    <option value="$1200 - $2000">$1200 USD - $2000 USD</option>
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
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-neutral-500 focus:ring-neutral-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t.formMessage}
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center mt-3">
                <input
                  id="terms-checkbox"
                  name="terms-checkbox"
                  type="checkbox"
                  checked={isTermsChecked}
                  onChange={(e) => setIsTermsChecked(e.target.checked)}
                  className="shrink-0 mt-0.5 border-gray-200 text-lime-600 focus:ring-lime-500"
                />
                <label htmlFor="terms-checkbox" className="ml-3 text-sm">
                  {t.termsAndConditions1}{" "}
                  <button
                    type="button"
                    className="text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                    onClick={openTerms}
                  >
                    {t.termsAndConditions2}
                  </button>
                </label>
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

          {isTermsOpen && (
            <AnimatePresence>
              <div
                id="hs-modal-upgrade-to-pro"
                className="hs-overlay size-full fixed top-0 left-0 z-[80] overflow-x-hidden overflow-y-auto flex justify-center items-center inset-0 bg-black/30 bg-black bg-opacity-20"
                role="dialog"
                aria-labelledby="hs-modal-upgrade-to-pro-label"
              >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm pointer-events-auto mt-16">
                    <div className="p-4 sm:p-7">
                      <div className="text-center">
                        <h3
                          id="hs-modal-upgrade-to-pro-label"
                          className="block text-3xl sm:text-4xl font-semibold text-gray-800"
                        >
                          {t.privacyPolicyTitle}
                        </h3>
                        <div className="max-w-lg mx-auto">
                          <p className="mt-2 text-sm text-gray-600">
                            {t.privacyPolicyLastUpdate}: 25 / 10 / 2024
                          </p>
                          <p className="mt-3 text-xs text-gray-600">
                            {t.privacyPolicyDescription}
                          </p>
                        </div>

                        <div className="mt-5">
                          <hr />
                        </div>
                      </div>

                      <div className="py-4 sm:py-6 divide-y divide-gray-200 max-h-72 lg:max-h-32 xl:max-h-52 2xl:max-h-72 overflow-y-auto">
                        <div className="pb-4 sm:pb-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            1. {t.privacyPolicyTitle1}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {t.privacyPolicyDescription1}:
                          </p>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>- {t.privacyPolicyLi1}</li>
                            <li>- {t.privacyPolicyLi2}</li>
                            <li>- {t.privacyPolicyLi3}</li>
                            <li>- {t.privacyPolicyLi4}</li>
                            <li>- {t.privacyPolicyLi5}</li>
                            <li>- {t.privacyPolicyLi6}</li>
                            <li>- {t.privacyPolicyLi7}</li>
                            <li>- {t.privacyPolicyLi8}</li>
                          </ul>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            2. {t.privacyPolicyTitle2}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {t.privacyPolicyDescription2}:
                          </p>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>
                              <strong>{t.privacyPolicy2TextTitle1}:</strong>{" "}
                              {t.privacyPolicy2Text1}
                            </li>
                            <li>
                              <strong>{t.privacyPolicy2TextTitle2}:</strong>
                              {t.privacyPolicy2Text2}
                            </li>
                          </ul>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            3. {t.privacyPolicyTitle3}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {t.privacyPolicyDescription3}:
                          </p>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>
                              <strong>{t.privacyPolicy3TextTitle1}:</strong>{" "}
                              {t.privacyPolicy3Text1}
                            </li>
                            <li>
                              <strong>{t.privacyPolicy3TextTitle2}:</strong>{" "}
                              {t.privacyPolicy3Text2}
                            </li>
                          </ul>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            4. {t.privacyPolicyTitle4}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {t.privacyPolicyDescription4}
                          </p>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            5. {t.privacyPolicyTitle5}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {t.privacyPolicyDescription5}
                          </p>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            6. {t.privacyPolicyTitle6}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                          {t.privacyPolicyDescription6}:
                          </p>
                          <ul className="mt-2 text-sm text-gray-600 space-y-1">
                            <li>
                              <strong>{t.privacyPolicy6TextTitle1}:</strong> {t.privacyPolicy6Text1}
                            </li>
                            <li>
                              <strong>{t.privacyPolicy6TextTitle2}:</strong> {t.privacyPolicy6Text2}
                            </li>
                            <li>
                              <strong>{t.privacyPolicy6TextTitle3}:</strong> {t.privacyPolicy6Text3}
                            </li>
                            <li>
                              <strong>
                              {t.privacyPolicy6TextTitle4}:
                              </strong>{" "}
                              {t.privacyPolicy6Text4}
                            </li>
                            <li>
                              <strong>{t.privacyPolicy6TextTitle5}:</strong> {t.privacyPolicy6Text5}
                            </li>
                          </ul>
                          <p className="text-sm md:text-base text-gray-600 mt-2">
                          {t.privacyPolicyText6}
                          </p>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            7. {t.privacyPolicyTitle7}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                          {t.privacyPolicyDescription7}
                          </p>
                        </div>

                        <div className="pb-4 sm:py-6">
                          <h3 className="font-semibold text-xl md:text-2xl text-gray-800 mb-1">
                            8. {t.privacyPolicyTitle8}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                          {t.privacyPolicyDescription8}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end items-center gap-x-2 p-4 sm:px-7 border-t">
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                        onClick={closeTerms}
                      >
                        {t.privacyPolicyCancel}
                      </button>
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-lime-600 text-white hover:bg-lime-700 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
                        onClick={closeTerms}
                      >
                        {t.privacyPolicySubmit}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatePresence>
          )}

          {isModalOpen && (
            <div
              id="hs-task-created-alert"
              className="fixed inset-0 z-[80] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black/30 px-12 "
              role="dialog"
              aria-labelledby="hs-task-created-alert-label"
            >
              <div className="relative flex flex-col bg-white rounded-xl shadow-lg w-full max-w-lg">
                <div className="absolute top-2 end-2">
                  <button
                    type="button"
                    className="size-8 inline-flex justify-center items-center gap-x-2 rounded-md border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                    aria-label="Close"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <span className="sr-only">Close</span>
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
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-4 sm:p-10 text-center overflow-y-auto">
                  <h3
                    id="hs-task-created-alert-label"
                    className="mb-2 text-xl font-bold text-gray-800"
                  >
                    {modalContent.title}
                  </h3>
                  <p className="text-gray-500">{modalContent.message}</p>

                  <div className="mt-6 flex justify-center gap-x-4">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-lime-500 text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:bg-gray-50"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">{t.dataFaq}</h3>
                <p className="mt-1 text-sm text-gray-500">{t.dataFaqText}</p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-lime-600 hover:text-lime-500 focus:outline-none focus:text-gray-800"
                  href="/#home-faq"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* <div className=" flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 text-neutral-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
