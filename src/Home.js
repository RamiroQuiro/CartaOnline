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
import NavBarHome from "./component/home/NavBarHome";
// import menulinea from "./img/menulinea.svg";

export default function Home() {
  const [toggle, setToggles] = useState(false);
  const handleToggle = () => {
    setToggles(!toggle);
  };

  return (
    <div className={theme.light}>
      <header 
      id="home"
      className="w-5/6 mx-auto md:h-screen flex flex-col mb-64  justify-between items-center">
        {/* menu navbar */}
        <NavBarHome/>
        {/* header cabecera */}
        <div className="flex flex-col md:flex-row items-center md:pt-32 pt-10 justify-between w-full min-h-screen ">
          <div className="md:w-1/2 flex gap-5 pr-7 flex-col items-start text-left ">
            <h2 className="text-xl font-medium">
              Menu | Carta | Folleto Digital
            </h2>
            <h1 className="md:text-6xl text-4xl capitalize font-bold ">
              Tus Productos <br /> al Servicio de todos
            </h1>
            <div className="my-2 w-full">
        <span className="inline-block w-64 h-2 bg-paleta-600 rounded-full"></span>
        <span className="inline-block w-16 h-2 ml-1 bg-paleta-600 rounded-full"></span>
        <span className="inline-block w-5 h-2 ml-1 bg-paleta-600 rounded-full"></span>
        <span className="inline-block w-2 h-2 ml-1 bg-paleta-600 rounded-full"></span>
      </div>
            <p className="font-medium text-lg">
              Ofrece tus productos en tu Carta-Online, y recibe pedidos por
              whatsApp, la via principal de comunicación. Actualiza Productos y
              Precios en tiempo Real
            </p>
          </div>
          <div className="md:w-1/2 w-full md:my-0 my-10 bg-color flex flex-col bg-gradient-to-tr from-amber-300/70 to-amber-500/80 h-5/6 rounded-lg rounded-b-5xl md:rounded-r-lg md:rounded-l-5xl">
            
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-full gap-10 justify-around pt-16 items-center   ">
          <div className="bg-white flex md:w-1/3 md:h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-4 hover:-translate-y-1 duration-100 hover:shadow-2xl px-2 ">
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
          <div className="bg-white flex md:w-1/3 md:h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-4 hover:-translate-y-1 duration-100 hover:shadow-2xl px-2 ">
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
          <div className="bg-white flex md:w-1/3 md:h-32 items-center justify-center gap-4 mx-auto md:rounded-full rounded-xl shadow-xl py-4 hover:-translate-y-1 duration-100 hover:shadow-2xl px-2 ">
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
