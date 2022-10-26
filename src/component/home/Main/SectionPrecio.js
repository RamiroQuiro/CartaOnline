import React from 'react'
import { Link } from 'react-router-dom';
import planStandar from "../../../img/planStandar.png";

export default function SectionPrecio() {
  return (
    <section id='precio' className="flex md:w-5/6 py-24 justify-around items-center mx-auto ">
          <div className="flex flex-col  rounded-t-2xl h- border w-full">
            <div className="bg-gradient-to-r  from-orange-500 via-orange-500 to-orange-700 flex flex-col text-3xl font-medium rounded-t-2xl py-7 px-5  text-center text-orange-50 w-full">
              <h2>CartaOnline, a precio de tus necesidades</h2>
              <h2>probá 15 días gratis simplemente registrandote</h2>
            </div>
            <section className="py-10 bg-white shadow-lg">
              <div className="block  ">
                <div className="flex flex-wrap items-center">
                  <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                    <img
                      src={planStandar}
                      alt="PRICE"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-3xl font-bold mb-6 pb-2">
                        $2500/Mes
                      </h2>
                      <p className="text-gray-500 mb-6 pb-2">
                        Suscripción por $2500 al mes, el precio para diferenciarte de tu competencia.
                        Eleva la calidad de tu negocio.
                      </p>
                      <div className="flex flex-wrap mb-6">
                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-600"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </svg>
                          15 días de prueba
                          </p>
                        </div>
                       
                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-600"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </svg>
                            Generador de codigo QR 
                          </p>
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-600"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </svg>
                            Diseño Responsive
                          </p>
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-600"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </svg>
                            Soporte atendido por humanos
                          </p>
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-4/12 mb-4">
                          <p className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-green-600"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                              ></path>
                            </svg>
                           Cancelá el servicio cuando quieras
                          </p>
                        </div>
                      </div>
                      <Link
                      to={'login'}
                        className="inline-block px-7 py-3 bg-paleta-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Usar Ahora
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
  )
}
