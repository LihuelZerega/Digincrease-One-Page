"use client";
import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Highlighter } from "@/components/ui/highlighter";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const [menuActive, setMenuActive] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (headerRef.current) {
      if (menuActive) {
        headerRef.current.dataset.state = "active";
      } else {
        headerRef.current.dataset.state = "";
      }
    }
  }, [menuActive]);

  return (
    <>
      <main className="overflow-hidden">
        <section className="bg-neutral-50 relative">
          <div className="relative py-12 pt-28 lg:pt-40">
            <div className="mx-auto px-6 max-w-7xl md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5 mb-8">
                <h1 className="mt-8 text-title text-4xl md:text-5xl lg:text-6xl block text-balance tracking-tight font-semibold text-gray-800">
                  Automatizá tu negocio con <br />
                  <Highlighter action="underline" color="#82C915">
                    Inteligencia Artificial
                  </Highlighter>{" "}
                  y Workflows
                </h1>
                <p className="text-wrap mx-auto mt-8 max-w-2xl text-xl text-gray-600 hidden sm:block text-body">
                  Dejá que la tecnología trabaje por vos: bots inteligentes,
                  flujos automáticos y procesos conectados que responden 24/7.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4">
                  <div className="">
                    <a
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-600 text-white hover:bg-lime-700 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-500"
                      href="/contact"
                    >
                      Solicitar una demo gratis
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
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>

                  <button className="hidden btn variant-ghost sz-lg">
                    <span className="text-sm">Learn more</span>
                    <svg
                      className="-mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="m19 12l12 12l-12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-title text-balance text-4xl font-semibold lg:text-5xl">
                ¿Tu negocio pierde tiempo y clientes por tareas repetitivas?
              </h2>
              <p className="text-body mt-4">
                Estos son los problemas más frecuentes que vemos en empresas y
                que podemos resolver con automatizaciones.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:gap-12 *:text-center sm:grid-cols-2 lg:grid-cols-3">
              <div className="card variant-soft group">
                <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                    <FaWhatsapp size={24} />
                  </div>
                </div>
                <h3 className="text-title mt-6 font-medium text-lime-600">
                  WhatsApp colapsado
                </h3>
                <p className="mt-3 text-sm">
                  Mensajes sin responder, clientes que se van porque nadie los
                  atiende a tiempo.
                </p>
              </div>
              <div className="card variant-soft group">
                <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"
                    >
                      <path d="M16 14v2.2l1.6 1" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
                      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
                      <circle cx="16" cy="16" r="6" />
                      <rect x="8" y="2" width="8" height="4" rx="1" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-title mt-6 font-medium text-lime-600">
                  Turnos mal gestionados
                </h3>
                <p className="mt-3 text-sm">
                  Confusión, cancelaciones de último momento, clientes que no
                  confirman.{" "}
                </p>
              </div>
              <div className="card variant-soft group">
                <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-trending-down-icon lucide-trending-down"
                    >
                      <path d="M16 17h6v-6" />
                      <path d="m22 17-8.5-8.5-5 5L2 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-title mt-6 font-medium text-lime-600">
                  Falta de seguimiento
                </h3>
                <p className="mt-3 text-sm">
                  Leads que se enfrían, clientes que no vuelven después de la
                  primera compra.
                </p>
              </div>
              <div className="card variant-soft group">
                <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar-sync-icon lucide-calendar-sync"
                    >
                      <path d="M11 10v4h4" />
                      <path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5" />
                      <path d="M16 2v4" />
                      <path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5" />
                      <path d="M21 22v-4h-4" />
                      <path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" />
                      <path d="M3 10h4" />
                      <path d="M8 2v4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-title mt-6 font-medium text-lime-600">
                  Procesos manuales eternos
                </h3>
                <p className="mt-3 text-sm">
                  Carga de datos en planillas, mails copiados a mano, pedidos
                  anotados en cuadernos.
                </p>
              </div>
              <div className="card variant-soft group">
                <div className="relative mx-auto size-36 duration-300 [--ui-border-color:theme(colors.gray.950/0.1)] group-hover:[--ui-border-color:theme(colors.gray.950/0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--ui-border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--ui-border-color)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[--ui-soft-bg] via-transparent to-[--ui-soft-bg]"></div>
                  <div className="bg-ui absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"
                    >
                      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                      <path d="M3 3v5h5" />
                      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                      <path d="M16 16h5v5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-title mt-6 font-medium text-lime-600">
                  Sistemas que no se hablan entre sí
                </h3>
                <p className="mt-3 text-sm">
                  CRM, agenda, inventario, facturación… todo desordenado y sin
                  conexión.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <p className="mx-auto mt-2 max-w-3xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-800 sm:text-5xl">
                Automatizamos tu negocio de punta a punta
              </p>
              <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2">
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="p-10">
                      <div className="flex flex-row items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#82C915"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-bot-message-square-icon lucide-bot-message-square"
                        >
                          <path d="M12 6V2H8" />
                          <path d="M15 11v2" />
                          <path d="M2 12h2" />
                          <path d="M20 12h2" />
                          <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
                          <path d="M9 11v2" />
                        </svg>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                          Bots conversacionales
                        </p>
                      </div>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Atienden consultas por WhatsApp o web, responden dudas
                        frecuentes, capturan leads y derivan solo lo necesario a
                        tu equipo.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="p-10">
                      <div className="flex flex-row items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#82C915"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-settings-icon lucide-settings"
                        >
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                          Workflows automáticos
                        </p>
                      </div>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Recordatorios de turnos, seguimientos de leads, mensajes
                        postventa, alertas de stock y más.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="p-10">
                      <div className="flex flex-row items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#82C915"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chart-network-icon lucide-chart-network"
                        >
                          <path d="m13.11 7.664 1.78 2.672" />
                          <path d="m14.162 12.788-3.324 1.424" />
                          <path d="m20 4-6.06 1.515" />
                          <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                          <circle cx="12" cy="6" r="2" />
                          <circle cx="16" cy="12" r="2" />
                          <circle cx="9" cy="15" r="2" />
                        </svg>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                          Dashboards & reportes
                        </p>
                      </div>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Monitoreo en tiempo real de cuántos leads entraron,
                        cuántas ventas se cerraron y dónde se pierden
                        oportunidades.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                    <div className="p-10">
                      <div className="flex flex-row items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#82C915"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-link-icon lucide-link"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                          Integraciones sin fricción
                        </p>
                      </div>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                        Conectamos tu CRM, Google Sheets, correo, calendario,
                        pasarela de pagos o ERP para que todo fluya sin errores.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
