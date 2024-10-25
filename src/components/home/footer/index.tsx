"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";
import { FooterTranslations } from "./translations";
import Image from "next/image";
import DigincreaseLogo from "@/images/digincrease-logo.png";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = FooterTranslations[language];

  return (
    <div className="border-t">
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              <Image
                src={DigincreaseLogo}
                width={60}
                height={60}
                alt="Digincrease Logo"
                className="mb-3"
              />
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-600">
              © 2024 Digincrease.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase">
              {t.homeTitle}
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-our-services"
                >
                  {t.homeOurServices}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-web-development"
                >
                  {t.homeWebDevelopment}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-ecommerce"
                >
                  {t.homeEcommerce}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-marketing"
                >
                  {t.homeMarketing}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-testimonials"
                >
                  {t.homeTestimonials}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#home-faq"
                >
                  {t.homeFaq}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase">
              {t.marketingTitle}
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#free-personalized-consulting"
                >
                  {t.marketingTitle1}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#branding-and-rebranding"
                >
                  {t.marketingTitle2}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#advertising-management"
                >
                  {t.marketingTitle3}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#content-creation-and-distribution"
                >
                  {t.marketingTitle4}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#video-and-podcast-editing"
                >
                  {t.marketingTitle5}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#marketing-faq"
                >
                  {t.marketingFaq}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase">
              {t.webDevelopmentTitle}
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#web-development-prices"
                >
                  {t.webDevelopmentTitle1}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#web-development-comparation-models"
                >
                  {t.webDevelopmentTitle2}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#web-development-projects-carried-out"
                >
                  {t.webDevelopmentTitle3}
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#web-development-faq"
                >
                  {t.webDevelopmentFaq}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase">
              {t.contactTitle}
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="/contact"
                >
                  {t.contactTitle1}
                </a>
              </p>
              <p className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                digincrease@gmail.com
              </p>
              <p className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                +54 9 11 3481-9602
              </p>
              <p className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800">
                +34 624 35 44 76
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="/contact"
                >
                  Puestos Vacantes
                </a>
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto border-t border-neutral-100">
            <p className="text-gray-500 text-center mt-12">
              © Digincrease 2024. Todos los derechos reservados.
            </p>
        </footer>
      </footer>
    </div>
  );
}

export default Index;
