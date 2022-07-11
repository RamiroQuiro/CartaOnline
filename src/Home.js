import React from "react";
import { Link, NavLink } from "react-router-dom";
import { theme } from "./style/theme";
import diseñoFacil from "./img/material-escolar.png";
import actualiza from "./img/004-red.png";
import recibePedidos from "./img/003-telefono-inteligente.png";
import loginImg from "./img/empleado.png";
import tilde from "./img/garrapata.png";
import imagen3 from "./img/archivo.png";
import impresion from "./img/analitica.png";
import telefonoInteligente from "./img/telefono-inteligente.png";
import fontTexto from "./img/redaccion.png";
import planStandar from "./img/planStandar.png";

export default function Home() {
  return (
    <div className={theme.light}>
      <header className="w-5/6 mx-auto h-screen flex flex-col items-center">
        <div className="w-full mx-auto h-28  flex justify-between items-center">
          <div className="w-1/5 text-3xl font-bold-thin bg-gradient-to-tr  from-amber-300/20 to-orange-300/20">
            Carta-Online
          </div>
          <nav className="flex font-bold text-sm w-full  justify-around items-center">
            <NavLink to={"producto"}>Producto</NavLink>
            <NavLink to={"producto"}>Planes</NavLink>
            <NavLink to={"producto"}>Contacto</NavLink>
          </nav>
          <Link
            to={"login"}
            className="w-1/5 bg-gradient-to-tr from-orange-300/30 overflow-visible to-orange-300 flex justify-start gap-5 items-center mx-auto rounded-l-2xl pr-2 h-8"
          >
            <img alt="diseñoFacil" width="48px" height="48px" src={loginImg} />
            <div className="text-gray-50 font-bold">Ingresar</div>
          </Link>
        </div>
        <div className="flex items-start pt-10 justify-between w-full h-screen ">
          <div className="w-1/2 flex gap-5 pr-7 flex-col items-start text-left ">
            <h2 className="text-xl font-medium">
              Menu | Carta | Folleto Digital
            </h2>
            <h1 className="text-6xl capitalize font-bold ">
              Tus Productos <br /> al Servicio de todos
            </h1>
            <hr className="bg-blue-500 h-2 w-6/12 animate-pulse" />
            <p className="font-medium text-lg">
              Ofrece tus productos en tu Carta-Online, y recibe pedidos por
              whatsApp, la via principal de comunicación. Actualiza Productos y
              Precios en tiempo Real
            </p>
          </div>
          <div className="w-1/2 bg-color flex flex-col bg-gradient-to-tr from-amber-300/70 to-amber-500/80 h-4/5 rounded-l-5xl"></div>
        </div>
        <div className="flex w-full gap-10 justify-around items-center -translate-y-10 ">
          <div className="bg-white flex w-1/3 h-32 items-center justify-center gap-4 mx-auto rounded-full shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
            <img
              alt="diseñoFacil"
              width="64px"
              height="64px"
              src={diseñoFacil}
            />
            <div className="w-3/5">
              <h3 className="text-xl font-medium text-center">Diseño Claro</h3>
              <p className="text-sm">
                Carga tu menu sin tantas vueltas ni tantas imagenes, has simple
                la interacción
              </p>
            </div>
          </div>
          <div className="bg-white flex w-1/3 h-32 items-center justify-center gap-4 mx-auto rounded-full shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
            <img alt="diseñoFacil" width="64px" height="64px" src={actualiza} />
            <div className="w-3/5">
              <h3 className="text-xl font-medium text-center">
                Actualiza cuando lo deseas
              </h3>
              <p className="text-sm">
                Crea la mejor experiencia para tus clientes. Cambia tu Menú
                Digital sin costos adicionales.
              </p>
            </div>
          </div>
          <div className="bg-white flex w-1/3 h-32 items-center justify-center gap-4 mx-auto rounded-full shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
            <img
              alt="diseñoFacil"
              width="64px"
              height="64px"
              src={recibePedidos}
            />
            <div className="w-3/5">
              <h3 className="text-xl font-medium text-center">
                Recibe tu pedidos directo en el celular
              </h3>
              <p className="text-sm">
                Así de facil, eligen en los items, y envían al celular que vos
                configures
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full bg-gray-50/50 mx-auto h- flex flex-col  items-center">
        <section className=" w-full bg-orange-500/5">
          <div className="w-5/6 flex justify-around items-center mx-auto px-6">
            <div className="text-4xl text-center text-orange-100/80 break-words bg-orange-500 mx-5  rounded-tl-5xl rounded-br-5xl hover:rounded-bl-5xl hover:rounded-tr-5xl hover:rounded-tl-md hover:rounded-br-md py-8 px-1 -rotate-3 hover:-rotate-0 duration-150 z-30 font-bold w-1/2">
              <h2 className="py-5 px-2">Queres tener tu CartaOnline?</h2>
              <h2 className="py-5 px-2">
                Crea un menú en tan sólo simples pasos:
              </h2>
            </div>
            <div className="text-2xl w-1/2 mx-auto  font-medium pl-14 py-20">
              <ul className="flex flex-col items-start justify-center ">
                <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
                  <img
                    className="bg-orange-300 p-1 group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
                    src={tilde}
                    width="40px"
                    height="40px"
                    alt="tilde"
                  />
                  Registrate en Carta-Online
                </li>
                <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
                  <img
                    className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
                    src={tilde}
                    width="40px"
                    height="40px"
                    alt="tilde"
                  />
                  Elige la plantilla que deseas
                </li>
                <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
                  <img
                    className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
                    src={tilde}
                    width="40px"
                    height="40px"
                    alt="tilde"
                  />
                  Edita los colores y formato de Texto
                </li>
                <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
                  <img
                    className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
                    src={tilde}
                    width="40px"
                    height="40px"
                    alt="tilde"
                  />
                  Carga tus items e imagenes{" "}
                </li>
                <li className="flex gap-3 group py-4  cursor-copy items-center hover:text-paleta-200 hover:italic duration-75 ">
                  <img
                    className="bg-orange-300 p-1  group-hover:scale-105 delay-75 duration-100 group- rounded-tl-xl rounded-br-xl"
                    src={tilde}
                    width="40px"
                    height="40px"
                    alt="tilde"
                  />
                  Empeza a vender y recibir pedidos
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="flex w-5/6 py-8 justify-around items-center mx-auto ">
          <div className="flex flex-col relative gap-3">
            <div className=" pr-14 mt-4">
              <div className="flex gap-8 justify-around items-center border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={imagen3}
                  />
                </div>
                <div>
                  <h3 className="font-bold">
                    {" "}
                    Elige una plantilla para tu menú con un diseño que se ajuste
                    a tu visión
                  </h3>
                  <p>
                    ¿Cómo te gustaría que aparezca tu restaurante en la página?
                    Elige un diseño de folleto y carga los elementos
                  </p>
                </div>
              </div>
            </div>
            <div className=" pl-14 mt-4">
              <div className="flex flex-row-reverse gap-8 border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={fontTexto}
                  />
                </div>
                <div>
                  <h3 className="font-bold"> Rearma tu Carta-Online</h3>
                  <p>
                    Rearma el menu cuantas veces necesites y requieras,
                    actualiza al instante, no hace falta volver a mandar el link
                    de tu menu
                  </p>
                </div>
              </div>
            </div>
            <div className="pr-14 mt-4">
              <div className="flex gap-8 border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={impresion}
                  />
                </div>
                <div>
                  <h3 className="font-bold"> Descarga e Imprime</h3>
                  <p>
                    Si bien, buscamos ecologizar y abaratar costos, no permitas
                    perder la calle, descarga e imprime el folleto ,el afiche y
                    tu codigo QR actualizado sin intermediarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-14 mt-4">
              <div className="flex  flex-row-reverse gap-8 border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={telefonoInteligente}
                  />
                </div>
                <div>
                  <h3 className="font-bold">
                    {" "}
                    Descarga tu menú con un alta calidad
                  </h3>
                  <p>
                    Descarga tu menú como un archivo PDF o PNG de alta calidad,
                    compártelo directamente en tus redes sociales y/o contactos
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="pr-14 mt-4">
              <div className="flex gap-8 border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={impresion}
                  />
                </div>
                <div>
                  <h3 className="font-bold"> Descarga e Imprime</h3>
                  <p>
                    Si bien, buscamos ecologizar y abaratar costos, no permitas
                    perder la calle, descarga e imprime el folleto ,el afiche y
                    tu codigo QR actualizado sin intermediarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="pl-14 mt-4">
              <div className="flex  flex-row-reverse gap-8 border-2 p-5 text-lg">
                <div>
                  <img
                    className="object-contain"
                    alt="plantilla"
                    width="80px"
                    height="80px"
                    src={telefonoInteligente}
                  />
                </div>
                <div>
                  <h3 className="font-bold">
                    {" "}
                    Descarga tu menú con un alta calidad
                  </h3>
                  <p>
                    Descarga tu menú como un archivo PDF o PNG de alta calidad,
                    compártelo directamente en tus redes sociales y/o contactos
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Precio */}
        <section className="flex w-5/6 py-8 justify-around items-center mx-auto ">
          <div className="flex flex-col rounded-t-2xl border w-full">
            <div className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-700 flex flex-col text-3xl font-medium rounded-t-2xl p-5 text-center text-orange-50 w-full">
              <h2>CartaOnline, a precio de tus necesidades</h2>
              <h2>probá 30 días gratis simplemente registrandote</h2>
            </div>
            <section className="">
              <div className="block rounded-lg shadow-lg bg-white">
                <div className="flex flex-wrap items-center">
                  <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                    <img
                      src={planStandar}
                      alt="Trendy Pants and Shoes"
                      className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    />
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                    <div className="px-6 py-12 md:px-12">
                      <h2 className="text-3xl font-bold mb-6 pb-2">
                        $1500/Mes
                      </h2>
                      <p className="text-gray-500 mb-6 pb-2">
                        Suscripción por $1500 al mes, el precio para diferenciarte de tu competencia.
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
                          Primer Mes gratis
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
                            Propio dominio
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
                            Date de baja cuando quieras
                          </p>
                        </div>
                      </div>
                      <Link
                      to={'login'}
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
        {/* formulario contacto */}
        <section className="w-5/6 mx-auto flex flex-col my-20">
    <div className="flex justify-center">
      <div className="text-center lg:max-w-3xl md:max-w-xl">
        <h2 className="text-3xl font-bold mb-12 px-6">Contactanos</h2>
      </div>
    </div>

    <div className="flex flex-wrap">
      <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
        <form>
          <div className="form-group mb-6">
            <input type="text" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
          </div>
          <div className="form-group mb-6">
            <textarea className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-orange-500 focus:outline-none
          " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
          </div>
          <div className="form-group form-check text-center mb-6">
            <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
              id="exampleCheck87" checked/>
            <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
              message</label>
          </div>
          <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-orange-500/60
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-orange-500 hover:shadow-lg
          focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Send</button>
        </form>
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
        <div className="flex flex-wrap">
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="headset" className="w-5 text-white"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Technical support</p>
                <p className="text-gray-500">support@example.com</p>
                <p className="text-gray-500">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign"
                    className="w-3 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512">
                    <path fill="currentColor"
                      d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Sales questions</p>
                <p className="text-gray-500">sales@example.com</p>
                <p className="text-gray-500">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex align-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper"
                    className="w-5 text-white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor"
                      d="M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Press</p>
                <p className="text-gray-500">press@example.com</p>
                <p className="text-gray-500">+1 234-567-89</p>
              </div>
            </div>
          </div>
          <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
            <div className="flex align-start">
              <div className="shrink-0">
                <div className="p-4 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bug" className="w-5 text-white"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor"
                      d="M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z">
                    </path>
                  </svg>
                </div>
              </div>
              <div className="grow ml-6">
                <p className="font-bold mb-1">Bug report</p>
                <p className="text-gray-500">bugs@example.com</p>
                <p className="text-gray-500">+1 234-567-89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </main>
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
  <div className="flex justify-center items-center w-5/6 mx-auto lg:justify-between p-6 border-b border-gray-300">
    <div className="mr-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div className="flex justify-center">
      <a href="#!" className="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
          className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter"
          className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
          </path>
        </svg>
      </a>
      <a href="#!" className="mr-6 text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
          className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
          </path>
        </svg>
      </a>
      <a href="#!" className="text-gray-600">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github"
          className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
          <path fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
          </path>
        </svg>
      </a>
    </div>
  </div>
  <div className="flex justify-center items-center w-5/6 mx-auto  py-10 text-center md:text-left">
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="">
        <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
            className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
            </path>
          </svg>
          Tailwind ELEMENTS
        </h6>
        <p>
          Here you can use rows and columns to organize your footer content. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Products
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Angular</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">React</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Vue</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600">Laravel</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Useful links
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Pricing</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Settings</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-gray-600">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-gray-600">Help</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Contact
        </h6>
        <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
            </path>
          </svg>
          New York, NY 10012, US
        </p>
        <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
          info@example.com
        </p>
        <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          + 01 234 567 88
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
            </path>
          </svg>
          + 01 234 567 89
        </p>
      </div>
    </div>
  </div>
  <div className="flex justify-center items-center w-5/6 mx-auto  text-center p-6 bg-gray-200">
    <span>© 2021 Copyright:</span>
    <a className="text-gray-600 font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a>
  </div>
</footer>
    </div>
  );
}
