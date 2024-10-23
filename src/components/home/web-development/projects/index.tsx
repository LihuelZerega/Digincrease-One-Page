import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ProjectsTranslations } from "./translations";

import Image from "next/image";

import PiletasRamiroLogo from "@/images/ProjectsImages/PiletasRamiroLogo.png";
import PiletasRamiroImage from "@/images/ProjectsImages/PiletasRamiroImage.png";
import InterbusinexLogo from "@/images/ProjectsImages/InterbusinexLogo.png";
import PrestigeRelojesLogo from "@/images/ProjectsImages/PrestigeRelojesLogo.png";
import PrestigeRelojesImage from "@/images/ProjectsImages/PrestigeRelojesImage.png";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = ProjectsTranslations[language];

  return (
    <div className="bg-neutral-50">
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div aria-hidden="true" className="flex -z-[1] absolute start-0">
            <div className="w-[1036px] h-[300px]"></div>
          </div>

          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <a href="https://piletasramiro.com.ar" className="hidden lg:block lg:col-span-3">
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 border rounded-lg border-neutral-200"
                  src={PiletasRamiroImage}
                  alt="Avatar"
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-neutral-800 bg-opacity-60"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                    <p>Ver web completa</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M16.5 7.5L6 18"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </a>

            <div className="lg:col-span-3">
              <blockquote>
                <Image
                  src={PiletasRamiroLogo}
                  className="w-16 h-auto mb-4"
                  alt={""}
                />

                <div className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal">
                  {t.PiletasRamiroText}{" "}
                  <a
                    href="https://maps.app.goo.gl/jKXhUXgTdh78tHcq6"
                    className="group inline-flex items-center gap-x-2 font-medium text-lg text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  >
                    {t.ViewMore}{" "}
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

                <footer className="mt-6">
                  <div className="flex items-center">
                    <a href="#" className="lg:hidden shrink-0">
                      <div className="relative overflow-hidden rounded-xl group">
                        <motion.img
                          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                          src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Avatar"
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 0.5 }}
                        />

                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-neutral-800 bg-opacity-20"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                            <p>Ver web completa</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#ffffff"
                              fill="none"
                            >
                              <path
                                d="M16.5 7.5L6 18"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                              <path
                                d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </motion.div>
                      </div>
                    </a>
                    <div className="ms-4 lg:ms-0">
                      <p className="font-medium text-gray-800">
                        Piletas Ramiro
                      </p>
                      <p className="text-sm text-gray-600">
                        {t.PiletasRamiroTeam}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div aria-hidden="true" className="flex -z-[1] absolute start-0">
            <div className="w-[1036px] h-[300px]"></div>
          </div>

          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <div className="lg:col-span-3">
              <blockquote>
                <Image
                  src={InterbusinexLogo}
                  className="w-32 h-auto mb-4"
                  alt={""}
                />

                <div className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal">
                  {t.InterbusinexText}{" "}
                  <a
                    href="https://maps.app.goo.gl/jKXhUXgTdh78tHcq6"
                    className="group inline-flex items-center gap-x-2 font-medium text-lg text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  >
                    {t.SeeMore}{" "}
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

                <footer className="mt-6">
                  <div className="flex items-center">
                    <div className="lg:hidden shrink-0">
                      <a href="#" className="lg:hidden shrink-0">
                        <div className="relative overflow-hidden rounded-xl group">
                          <motion.img
                            className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                            src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                            alt="Avatar"
                            initial={{ opacity: 1 }}
                            whileHover={{ opacity: 0.5 }}
                          />

                          <motion.div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-neutral-800 bg-opacity-20"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                              <p>Ver web completa</p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                color="#ffffff"
                                fill="none"
                              >
                                <path
                                  d="M16.5 7.5L6 18"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                                  stroke="currentColor"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </span>
                          </motion.div>
                        </div>
                      </a>
                    </div>
                    <div className="ms-4 lg:ms-0">
                      <p className="font-medium text-gray-800">Interbusinex</p>
                      <p className="text-sm text-gray-600">
                        {t.InterbusinexTeam}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <a href="#" className="hidden lg:block lg:col-span-3">
              <div className="relative overflow-hidden rounded-xl group">
                <motion.img
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                  src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                  alt="Avatar"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0.5 }}
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-neutral-800 bg-opacity-20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                    <p>Ver web completa</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M16.5 7.5L6 18"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div aria-hidden="true" className="flex -z-[1] absolute start-0">
            <div className="w-[1036px] h-[300px]"></div>
          </div>

          <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
            <a href="#" className="hidden lg:block lg:col-span-3">
              <div className="relative overflow-hidden rounded-xl group">
              <Image
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50 border rounded-lg border-neutral-200"
                  src={PrestigeRelojesImage}
                  alt="Avatar"
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-black bg-opacity-60"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                    <p>Ver web completa</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      color="#ffffff"
                      fill="none"
                    >
                      <path
                        d="M16.5 7.5L6 18"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </a>

            <div className="lg:col-span-3">
              <blockquote>
                <Image
                  src={PrestigeRelojesLogo}
                  className="w-14 h-auto mb-4"
                  alt={""}
                />

                <div className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal">
                  {t.InterbusinexText}{" "}
                  <a
                    href="https://maps.app.goo.gl/jKXhUXgTdh78tHcq6"
                    className="group inline-flex items-center gap-x-2 font-medium text-lg text-lime-600 hover:text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline"
                  >
                    {t.ViewMore}{" "}
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

                <footer className="mt-6">
                  <div className="flex items-center">
                    <a href="#" className="lg:hidden shrink-0">
                      <div className="relative overflow-hidden rounded-xl group">
                        <motion.img
                          className="w-full h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                          src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                          alt="Avatar"
                          initial={{ opacity: 1 }}
                          whileHover={{ opacity: 0.5 }}
                        />

                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-neutral-800 bg-opacity-20"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="flex flex-row items-center justify-center space-x-2 text-white text-lg font-semibold">
                            <p>Ver web completa</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="20"
                              height="20"
                              color="#ffffff"
                              fill="none"
                            >
                              <path
                                d="M16.5 7.5L6 18"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                              <path
                                d="M8 6.18791C8 6.18791 16.0479 5.50949 17.2692 6.73079C18.4906 7.95209 17.812 16 17.812 16"
                                stroke="currentColor"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </motion.div>
                      </div>
                    </a>
                    <div className="ms-4 lg:ms-0">
                      <p className="font-medium text-gray-800">
                        Prestige Relojes
                      </p>
                      <p className="text-sm text-gray-600">
                        {t.PiletasRamiroTeam}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
