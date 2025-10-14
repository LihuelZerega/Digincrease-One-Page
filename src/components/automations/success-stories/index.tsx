import React, { useContext } from "react";
import Image from "next/image";

import AdvertisingManagement from "@/images/Marketing/AdvertisingManagement.png";
import Odontologia from "@/images/Odontologia.jpeg";
import BrokerSeguros from "@/images/BrokerSeguros.jpeg";
import Inmobiliaria from "@/images/Inmobiliaria.jpeg";

import { LanguageContext } from "@/contexts/LanguageContext";
import { MarketingTranslations } from "./translations";

function Index() {
  const { language } = useContext(LanguageContext);
  const t = MarketingTranslations[language];

  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  Clínica odontológica
                </h2>
                <p className="text-gray-500">
                Automatizá la gestión de turnos y mejorá la experiencia de tus pacientes.
                </p>
                <p className="text-gray-500">El bot permite reservar, modificar o cancelar citas en segundos, enviar recordatorios automáticos y responder preguntas frecuentes sobre tratamientos o coberturas.</p>
                <p className="text-gray-500">Un asistente que trabaja todos los días para mantener tu agenda siempre organizada.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={Odontologia}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="hidden lg:block relative">
            <Image
              src={Inmobiliaria}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  Inmobiliaria
                </h2>
                <p className="text-gray-500">Atendé a tus clientes en segundos.</p>
                <p className="text-gray-500">Este asistente automatizado responde consultas sobre propiedades disponibles, envía fichas técnicas con fotos, precios y ubicaciones, y permite agendar visitas de manera inmediata.</p>
                <p className="text-gray-500">Optimiza tu tiempo, mejora la atención y asegurá más cierres con un sistema disponible las 24 horas.</p>
              </div>
            </div>
          </div>

          <div className="block lg:hidden relative">
            <Image
              src={AdvertisingManagement}
              alt="Features Image"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  Broker de seguros
                </h2>
                <p className="text-gray-500">Simplificá la atención a tus asegurados con un asistente digital.
                </p>
                <p className="text-gray-500">El bot permite descargar pólizas y solicitar asistencia directamente desde WhatsApp o tu sitio web.</p>
                <p className="text-gray-500">Una solución ágil, segura y disponible 24/7 para brindar un servicio más eficiente y moderno.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src={BrokerSeguros}
              alt="BrokerSeguros"
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
