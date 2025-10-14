import React, { useContext } from "react";
import Image from "next/image";
import MarketingCallToAction from "@/images/Marketing/MarketingCallToAction.png";
import { LanguageContext } from "@/contexts/LanguageContext";
import { CallToActionTranslations } from "@/lib/translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = CallToActionTranslations[language];

  return (
    <div className="relative bg-black h-[360px]">
      <Image
        className="absolute w-full rounded-md object-cover opacity-60 h-[360px]"
        src={MarketingCallToAction}
        alt=""
      />

      <div className="relative py-16">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div className="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="max-w-7xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              ¿Querés crecer sin trabajar más horas?
            </h1>
            <p className="text-center text-base text-neutral-100">
            Agendá una demo gratuita y descubrí cómo podemos automatizar tu negocio.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-md before:bg-lime-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Adquirir Automatizaciones
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
