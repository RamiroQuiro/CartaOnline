import React from "react";
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

export default function Home() {
  return (
    <div className={theme.light}>
      <header className="w-5/6 mx-auto h-screen flex flex-col items-center">
        <div className="w-full mx-auto h-28  flex justify-between items-center">
          <div className="w-1/5 text-3xl font-bold-thin mx-auto">
           <img src={Logo} alt="logo" width={"100px"} height="100px"/>
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
    <Main>
        {/* seccion banner simples pasos */}
       <SectionBanner/>
        {/* seccion banners chicos con border */}
       <SectionBannerChicos/>
        {/* Section Precio */}
       <SectionPrecio/>
        {/* formulario contacto */}
        <Contacto/>
        
      </Main>
      {/* Empieza Fotter */}
      <Footer/>
    </div>
  );
}
