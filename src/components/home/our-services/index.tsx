import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { OurServicesTranslations } from "./translations";
import { Safari } from "@/components/magicui/safari";

import Tab1 from "./tabs/tab-1";
import Tab2 from "./tabs/tab-2";
import Tab3 from "./tabs/tab-3";

function Index() {
  const [activeTab, setActiveTab] = useState("tabs-with-card-1");
  const { language } = useContext(LanguageContext);
  const t = OurServicesTranslations[language];

  return (
    <div id="home-our-services" className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-12 sm:py-24 mx-auto">
      <div className="relative p-6 md:p-16">
        <h2 className="text-center text-base/7 font-semibold text-lime-600">
          {t.title}
        </h2>
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-12 lg:order-2">
            <h2 className="text-4xl text-neutral-800 font-semibold text-center tracking-tight text-balance max-w-4xl mx-auto sm:text-5xl">
              {t.subtitle}
            </h2>

            <nav
              className="grid lg:grid-cols-3 gap-4 mt-10 md:mt-16"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className={`${
                  activeTab === "tabs-with-card-1"
                    ? "bg-white shadow-md border-l-4 border-lime-500"
                    : "hover:bg-neutral-50"
                } text-start focus:outline-none focus:bg-neutral-50 p-4 md:p-5 rounded-xl border transition duration-300 ease-in-out`}
                onClick={() => setActiveTab("tabs-with-card-1")}
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M16.3083 4.38394C15.7173 4.38394 15.4217 4.38394 15.1525 4.28405C15.1151 4.27017 15.0783 4.25491 15.042 4.23828C14.781 4.11855 14.5721 3.90959 14.1541 3.49167C13.1922 2.52977 12.7113 2.04882 12.1195 2.00447C12.04 1.99851 11.96 1.99851 11.8805 2.00447C11.2887 2.04882 10.8077 2.52977 9.84585 3.49166C9.42793 3.90959 9.21897 4.11855 8.95797 4.23828C8.92172 4.25491 8.88486 4.27017 8.84747 4.28405C8.57825 4.38394 8.28273 4.38394 7.69171 4.38394H7.58269C6.07478 4.38394 5.32083 4.38394 4.85239 4.85239C4.38394 5.32083 4.38394 6.07478 4.38394 7.58269V7.69171C4.38394 8.28273 4.38394 8.57825 4.28405 8.84747C4.27017 8.88486 4.25491 8.92172 4.23828 8.95797C4.11855 9.21897 3.90959 9.42793 3.49166 9.84585C2.52977 10.8077 2.04882 11.2887 2.00447 11.8805C1.99851 11.96 1.99851 12.04 2.00447 12.1195C2.04882 12.7113 2.52977 13.1922 3.49166 14.1541C3.90959 14.5721 4.11855 14.781 4.23828 15.042C4.25491 15.0783 4.27017 15.1151 4.28405 15.1525C4.38394 15.4217 4.38394 15.7173 4.38394 16.3083V16.4173C4.38394 17.9252 4.38394 18.6792 4.85239 19.1476C5.32083 19.6161 6.07478 19.6161 7.58269 19.6161H7.69171C8.28273 19.6161 8.57825 19.6161 8.84747 19.7159C8.88486 19.7298 8.92172 19.7451 8.95797 19.7617C9.21897 19.8815 9.42793 20.0904 9.84585 20.5083C10.8077 21.4702 11.2887 21.9512 11.8805 21.9955C11.96 22.0015 12.04 22.0015 12.1195 21.9955C12.7113 21.9512 13.1922 21.4702 14.1541 20.5083C14.5721 20.0904 14.781 19.8815 15.042 19.7617C15.0783 19.7451 15.1151 19.7298 15.1525 19.7159C15.4217 19.6161 15.7173 19.6161 16.3083 19.6161H16.4173C17.9252 19.6161 18.6792 19.6161 19.1476 19.1476C19.6161 18.6792 19.6161 17.9252 19.6161 16.4173V16.3083C19.6161 15.7173 19.6161 15.4217 19.7159 15.1525C19.7298 15.1151 19.7451 15.0783 19.7617 15.042C19.8815 14.781 20.0904 14.5721 20.5083 14.1541C21.4702 13.1922 21.9512 12.7113 21.9955 12.1195C22.0015 12.04 22.0015 11.96 21.9955 11.8805C21.9512 11.2887 21.4702 10.8077 20.5083 9.84585C20.0904 9.42793 19.8815 9.21897 19.7617 8.95797C19.7451 8.92172 19.7298 8.88486 19.7159 8.84747C19.6161 8.57825 19.6161 8.28273 19.6161 7.69171V7.58269C19.6161 6.07478 19.6161 5.32083 19.1476 4.85239C18.6792 4.38394 17.9252 4.38394 16.4173 4.38394H16.3083Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.5 16.5C9.19863 15.2923 10.5044 14.4797 12 14.4797C13.4956 14.4797 14.8014 15.2923 15.5 16.5M14 10C14 11.1046 13.1046 12 12 12C10.8955 12 10 11.1046 10 10C10 8.89544 10.8955 8.00001 12 8.00001C13.1046 8.00001 14 8.89544 14 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold text-neutral-800">
                      {t.asesoriaTitle}
                    </span>
                    <span className="block mt-1 text-neutral-600">
                      {t.asesoriaText}
                      <br />
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                        href="https://cal.com/digincrease"
                      >
                        {t.asesoriaButton}
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
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`${
                  activeTab === "tabs-with-card-2"
                    ? "bg-white shadow-md border-l-4 border-lime-500"
                    : "hover:bg-neutral-50"
                } text-start focus:outline-none focus:bg-neutral-50 p-4 md:p-5 rounded-xl border transition duration-300 ease-in-out`}
                onClick={() => setActiveTab("tabs-with-card-2")}
                role="tab"
              >
                <span className="flex flex-row gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M14.9263 2.91103L8.27352 6.10452C7.76151 6.35029 7.21443 6.41187 6.65675 6.28693C6.29177 6.20517 6.10926 6.16429 5.9623 6.14751C4.13743 5.93912 3 7.38342 3 9.04427V9.95573C3 11.6166 4.13743 13.0609 5.9623 12.8525C6.10926 12.8357 6.29178 12.7948 6.65675 12.7131C7.21443 12.5881 7.76151 12.6497 8.27352 12.8955L14.9263 16.089C16.4534 16.8221 17.217 17.1886 18.0684 16.9029C18.9197 16.6172 19.2119 16.0041 19.7964 14.778C21.4012 11.4112 21.4012 7.58885 19.7964 4.22196C19.2119 2.99586 18.9197 2.38281 18.0684 2.0971C17.217 1.8114 16.4534 2.17794 14.9263 2.91103Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.4581 20.7709L9.96674 22C6.60515 19.3339 7.01583 18.0625 7.01583 13H8.14966C8.60978 15.8609 9.69512 17.216 11.1927 18.197C12.1152 18.8012 12.3054 20.0725 11.4581 20.7709Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 12.5V6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="grow">
                    <span className="block text-lg font-semibold text-neutral-800">
                      {t.marketingTitle}
                    </span>
                    <span className="block mt-1 text-neutral-600">
                      {t.marketingText}
                      <br />
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                        href="/marketing"
                      >
                        {t.marketingButton}
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
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                className={`${
                  activeTab === "tabs-with-card-3"
                    ? "bg-white shadow-md border-l-4 border-lime-500"
                    : "hover:bg-neutral-50"
                } text-start focus:outline-none focus:bg-neutral-50 p-4 md:p-5 rounded-xl border transition duration-300 ease-in-out`}
                onClick={() => setActiveTab("tabs-with-card-3")}
                role="tab"
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      d="M20 10.128C20 6.29644 20 4.38064 18.8284 3.19032C17.6569 2 15.7712 2 12 2H10C6.22876 2 4.34315 2 3.17157 3.19032C2 4.38064 2 6.29644 2 10.128C2 13.9596 2 15.8754 3.17157 17.0657C3.64118 17.5428 4.2255 17.8287 5 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 17.5C22 15.6251 22 14.6877 21.5225 14.0305C21.3683 13.8183 21.1817 13.6317 20.9695 13.4775C20.3123 13 19.3749 13 17.5 13H12.5C10.6251 13 9.6877 13 9.03054 13.4775C8.8183 13.6317 8.63166 13.8183 8.47746 14.0305C8 14.6877 8 15.6251 8 17.5C8 19.3749 8 20.3123 8.47746 20.9695C8.63166 21.1817 8.8183 21.3683 9.03054 21.5225C9.6877 22 10.6251 22 12.5 22H17.5C19.3749 22 20.3123 22 20.9695 21.5225C21.1817 21.3683 21.3683 21.1817 21.5225 20.9695C22 20.3123 22 19.3749 22 17.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16.5 16L17.4199 16.7929C17.8066 17.1262 18 17.2929 18 17.5C18 17.7071 17.8066 17.8738 17.4199 18.2071L16.5 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 16L12.5801 16.7929C12.1934 17.1262 12 17.2929 12 17.5C12 17.7071 12.1934 17.8738 12.5801 18.2071L13.5 19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 6H19.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold text-neutral-800">
                      {t.desarrolloWebTitle}
                    </span>
                    <span className="block mt-1 text-neutral-600">
                      {t.desarrolloWebText}
                      <a
                        className="group inline-flex items-center gap-x-2 font-medium text-sm text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                        href="/web-development"
                      >
                        {t.marketingButton}
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
                    </span>
                  </span>
                </span>
              </button>
            </nav>

            <div className="lg:col-span-12">
              <div className="relative">
                <AnimatePresence mode="wait">
                  {activeTab === "tabs-with-card-1" && (
                    <motion.div
                      key="tabs-with-card-1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="flex pt-16"
                    >
                      <Tab1 />
                    </motion.div>
                  )}

                  {activeTab === "tabs-with-card-2" && (
                    <motion.div
                      key="tabs-with-card-2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <div className="relative flex items-center justify-center mx-auto">
                        <Safari
                          url="www.digincrease.com"
                          className="size-full mt-12"
                          src="https://via.placeholder.com/1200x750"
                        />
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "tabs-with-card-3" && (
                    <motion.div
                      key="tabs-with-card-3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Tab3 />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
