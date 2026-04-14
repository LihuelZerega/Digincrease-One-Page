import React, { useContext } from "react";
import Image from "next/image";

import AdvertisingManagement from "@/images/Marketing/AdvertisingManagement.png";
import Odontologia from "@/images/Odontologia.jpeg";
import BrokerSeguros from "@/images/BrokerSeguros.jpeg";
import Inmobiliaria from "@/images/Inmobiliaria.jpeg";

import { LanguageContext } from "@/contexts/LanguageContext";
import { MarketingTranslations } from "./translations";
import { Highlighter } from "@/components/ui/highlighter";
import { FileDown, Bot, MessageCircleQuestion, Calendar, CalendarClock, MessageCircleMore, Flame, MapPinHouse, PersonStanding, ArrowRight } from 'lucide-react';

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
                  AmericanSeg Brokers
                </h2>
                <p className="text-gray-500">Antes, gran parte del tiempo del equipo se iba en responder consultas repetitivas: envío de pólizas, solicitudes de asistencia, dudas básicas de clientes.
                </p>
                <p className="text-gray-500">Hoy, eso cambió.</p>
                <p className="text-gray-500">Implementaron <Highlighter action="underline" color="#82C915">“Brokie”</Highlighter> un asistente digital que centraliza la atención y permite a los asegurados:</p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-center gap-1"><span><FileDown className="text-lime-600" size={18} /></span> Descargar sus pólizas en segundos</li>
                  <li className="flex items-center gap-1"><span><Bot className="text-lime-600" size={18} /></span> Solicitar asistencia 24/7 sin intermediarios</li>
                  <li className="flex items-center gap-1"><span><MessageCircleQuestion className="text-lime-600" size={18} /></span> Realizar consultas frecuentes sin demoras</li>
                </ul>
                <p className="text-gray-500">El resultado: Un servicio más ágil, disponible 24/7 y un equipo liberado para enfocarse en tareas de mayor valor, como la retención y venta de nuevos seguros.</p>
              </div>
            </div>
            <a href="/contact" className="mt-5 w-full lg:w-auto py-4 px-6 rounded-xl bg-lime-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-lime-600 transition-all border-b-4 border-lime-700 active:border-b-0 active:translate-y-[2px] shadow-lg">
              Quiero implementar un asistente en mi negocio
              <ArrowRight className="w-4 h-4 shadow-sm" />
            </a>
          </div>

          <div className="relative">
            <Image
              src={BrokerSeguros}
              alt="BrokerSeguros"
              className="object-cover rounded-xl mt-5 lg:mt-0"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl py-12 px-6 lg:max-w-7xl lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="hidden lg:block relative">
            <Image
              src={Odontologia}
              alt="Odontologia"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-semibold text-balance tracking-tight text-neutral-800 text-4xl sm:text-5xl">
                  Centro Dental NovaCare
                </h2>
                <p className="text-gray-500">
                  La gestión manual de turnos generaba errores, cancelaciones de último momento y tiempo perdido en llamadas.
                </p>
                <p className="text-gray-500">Para resolverlo, implementaron un chatbot inteligente que automatiza toda la agenda del consultorio:</p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-center gap-1"><span><Calendar className="text-lime-600" size={18} /></span> Reserva, modificación y cancelación de turnos en segundos</li>
                  <li className="flex items-center gap-1"><span><CalendarClock className="text-lime-600" size={18} /></span> Recordatorios automáticos que reducen ausencias</li>
                  <li className="flex items-center gap-1"><span><MessageCircleMore className="text-lime-600" size={18} /></span> Respuestas inmediatas sobre tratamientos, precios y coberturas</li>
                </ul>
                <p className="text-gray-500">El resultado: Una agenda siempre organizada, menos turnos perdidos y una experiencia mucho más cómoda para los pacientes.</p>
                <p className="text-gray-500">Un asistente que trabaja todos los días, incluso cuando el consultorio está cerrado.</p>
              </div>
            </div>
            <a href="/contact" className="mt-5 w-full lg:w-auto py-4 px-6 rounded-xl bg-lime-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-lime-600 transition-all border-b-4 border-lime-700 active:border-b-0 active:translate-y-[2px] shadow-lg">
              Quiero implementar un asistente en mi negocio
              <ArrowRight className="w-4 h-4 shadow-sm" />
            </a>
          </div>

          <div className="block lg:hidden relative">
            <Image
              src={Odontologia}
              alt="Odontologia"
              className="object-cover rounded-xl mt-5 lg:mt-0"
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
                  Propiedades del Sur
                </h2>
                <p className="text-gray-500">El problema era claro: los asesores perdían horas hablando con personas que no estaban listas para comprar o alquilar.</p>
                <p className="text-gray-500">Hoy, eso está filtrado automáticamente. Implementamos un asistente que:</p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-center gap-1"><span><MessageCircleMore className="text-lime-600" size={18} /></span>Responde consultas en tiempo real</li>
                  <li className="flex items-center gap-1"><span><MapPinHouse className="text-lime-600" size={18} /></span>Envía fichas completas de propiedades (fotos, precios, ubicación)</li>
                  <li className="flex items-center gap-1"><span><Flame className="text-lime-600" size={18} /></span>Califica a cada lead según su nivel de interés</li>
                  <li className="flex items-center gap-1"><span><PersonStanding className="text-lime-600" size={18} /></span>Agenda visitas solo con potenciales clientes reales</li>
                </ul>
                <p className="text-gray-500">El resultado: Los agentes dejan de perder tiempo en “curiosos” y se enfocan únicamente en cerrar operaciones.</p>
                <p className="text-gray-500">Más eficiencia, mejores conversaciones y más ventas.</p>
              </div>
              <a href="/contact" className="w-full lg:w-auto py-4 px-6 rounded-xl bg-lime-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-lime-600 transition-all border-b-4 border-lime-700 active:border-b-0 active:translate-y-[2px] shadow-lg">
                Quiero implementar un asistente en mi negocio
                <ArrowRight className="w-4 h-4 shadow-sm" />
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src={Inmobiliaria}
              alt="Inmobiliaria"
              className="object-cover rounded-xl mt-5 lg:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
