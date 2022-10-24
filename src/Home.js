import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { theme } from "./style/theme";
import diseñoFacil from "./img/material-escolar.png";
import actualiza from "./img/004-red.png";
import recibePedidos from "./img/003-telefono-inteligente.png";
import loginImg from "./img/empleado.png";
import Logo from "./img/Logo.png";
import Main from "./component/home/Main/Main";
import SectionBanner from "./component/home/Main/SectionBanner";
import SectionBannerChicos from "./component/home/Main/SectionBannerChicos";
import SectionPrecio from "./component/home/Main/SectionPrecio";
import Contacto from "./component/home/Main/Contacto";
import Footer from "./component/home/Footer/Footer";
// import menulinea from "./img/menulinea.svg";

export default function Home() {
  const [toggle, setToggles] = useState(false);
  const handleToggle = () => {
    setToggles(!toggle);
  };

  return (
    <div className={theme.light}>
      <header className="w-5/6 mx-auto md:h-screen flex flex-col  items-center">
        {/* menu navbar */}
        <div className="md:hidden  z-50 flex w-full mx-auto justify-between  pt-5">
          <img src={Logo} alt="logo" width={"100px"} height="100px" className={`${toggle?'opacity-0':'opacity-100 '} duration-300`} />
          <button className=" right-16 fixed " onClick={handleToggle}>
            <img
              src={'menulinea'}
              alt="menu linear"
              width={"40px"}
              height="40px"
              className={`${
                !toggle ? " duration-300" : " duration-300 rotate-90"
              } fixed`}
            />
          </button>
        </div>
        <div
          className={`${
            !toggle ? "-translate-x-[200%] md:translate-x-0 " : "translate-x-0 "
          } duration-300   md:px-24 pt-5 pb-3 md:py-0 mx-auto md:h-20  w-full z-40 md:gap-0 gap-3 md:flex-row flex-col flex justify-between items-center fixed bg-gradient-to-b from-orange-100/50   to-transparent backdrop-blur-sm `}
        >
            <div className=" md:w-1/5 w-full px-10">
            <img src={Logo} alt="logo" width={"100px"} height="100px" className="" />
              </div>
          <nav className="flex md:flex-row flex-col text-left md:text-center font-medium text-lg w-full px-10 py-5 md:gap-0 gap-2 text-gray-800  md:justify-around md:items-center">
            <NavLink
              to={"producto"}
              className="hover:scale-110 duration-150 border-b py-2"
            >
              Producto
            </NavLink>
            <NavLink
              to={"producto"}
              className="hover:scale-110 duration-150 border-b py-2"
            >
              Planes
            </NavLink>
            <NavLink
              to={"producto"}
              className="hover:scale-110 duration-150 border-b py-2"
            >
              Contacto
            </NavLink>
          </nav>
          <Link
            to={"login"}
            className="md:w-1/5 w-10/12 bg-gradient-to-tr from-orange-300/30 overflow-visible to-orange-300 flex justify-start gap-5 items-center mx-auto rounded-l-2xl py-5 pr-2 h-8"
          >
            <img alt="diseñoFacil" width="48px" height="48px" src={loginImg} />
            <div className="text-gray-50 font-bold">Ingresar</div>
          </Link>
        </div>
        {/* header cabecera */}
        <div className="flex flex-col md:flex-row items-start md:pt-32 pt-10 justify-between w-full h-screen ">
          <div className="md:w-1/2 flex gap-5 pr-7 flex-col items-start text-left ">
            <h2 className="text-xl font-medium">
              Menu | Carta | Folleto Digital
            </h2>
            <h1 className="md:text-6xl text-4xl capitalize font-bold ">
              Tus Productos <br /> al Servicio de todos
            </h1>
            <hr className="bg-blue-500 h-2 w-6/12 animate-pulse" />
            <p className="font-medium text-lg">
              Ofrece tus productos en tu Carta-Online, y recibe pedidos por
              whatsApp, la via principal de comunicación. Actualiza Productos y
              Precios en tiempo Real
            </p>
          </div>
          <div className="md:w-1/2 w-full md:my-0 my-10 bg-color flex flex-col bg-gradient-to-tr from-amber-300/70 to-amber-500/80 h-5/6 rounded-lg rounded-b-5xl md:rounded-r-lg md:rounded-l-5xl">
            
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full gap-10 justify-around items-center md:-translate-y-8 ">
          <div className="bg-white flex md:w-1/3 h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
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
          <div className="bg-white flex md:w-1/3 h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
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
          <div className="bg-white flex md:w-1/3 h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-2 hover:-translate-y-1 duration-100 hover:shadow-2xl">
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
      <Main>
        {/* seccion banner simples pasos */}
        <SectionBanner />
        {/* seccion banners chicos con border */}
        <SectionBannerChicos />
        {/* Section Precio */}
        <SectionPrecio />
        {/* formulario contacto */}
        <Contacto />
      </Main>
      {/* Empieza Fotter */}
      <Footer />
    </div>
  );
}
