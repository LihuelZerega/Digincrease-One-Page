"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import DigincreaseLogo from "@/images/digincrease-logo.png";
import { LanguageContext } from "@/contexts/LanguageContext";
import { NavBarTranslations } from "@/lib/translations";

function Navbar() {
  const { language } = useContext(LanguageContext);
  const t = NavBarTranslations[language];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 lg:py-4 fixed bg-white border-b border-neutral-100">
        <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="md:col-span-3 lg:col-span-12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="/"
            >
              <Image
                src={DigincreaseLogo}
                width={50}
                height={50}
                alt="Digincrease Logo"
              />
            </a>

            <div className="hidden lg:flex flex-row items-center md:gap-x-6 lg:gap-x-12">
              <a
                className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                href="/"
              >
                {t.home}
              </a>
              <a
                className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                href="/marketing"
              >
                {t.marketing}
              </a>
              <a
                className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                href="/web-development"
              >
                {t.webDevelopment}
              </a>
              {/* <a
                className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                href="/knows-us"
              >
                {t.knowsUs}
              </a> */}
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
                href="/contact"
              >
                {t.contactUs}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <div className="md:hidden">
              <button
                type="button"
                className="size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                onClick={toggleMenu}
              >
                <motion.svg
                  className={`${isOpen ? "hidden" : "block"} shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={iconVariants}
                  animate={isOpen ? "open" : "closed"}
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </motion.svg>

                <motion.svg
                  className={`${isOpen ? "block" : "hidden"} shrink-0 size-4`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={iconVariants}
                  animate={isOpen ? "open" : "closed"}
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </motion.svg>
              </button>
            </div>
          </div>

          <motion.div
            id="hs-navbar-hcail"
            className={`overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-12 md:mt-0 ml-3 border-t border-neutral-100 lg:border-none pt-5">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <a
                  className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                  href="/"
                >
                  {t.home}
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <a
                  className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                  href="/marketing"
                >
                  {t.marketing}
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <a
                  className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                  href="/web-development"
                >
                  {t.webDevelopment}
                </a>
              </motion.div>
              {/* <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <a
                  className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                  href="/knows-us"
                >
                  {t.knowsUs}
                </a>
              </motion.div> */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
              >
                <a
                  className="inline-block font-medium text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-2 decoration-lime-400 hover:underline-lime-400 transition-all duration-200"
                  href="/contact"
                >
                  {t.contactUs}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
