import React from "react";
import ItemsMenu from "./ItemsMenu";
import MenuLista1 from "./MenuLista1";
import MenuLista2 from "./MenuLista2";
import MenuLista3 from "./MenuLista3";
import imagen1 from "../img/burguer.jpg";
import imagen2 from "../img/pizzas.jpg";
import imagen3 from "../img/sandwich.jpg";
import "./home.css";
import "./menu1.css";
import "./menu2.css";
import "./menu3.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate()

const traerPedidos=(e)=>{

  console.log(e.target.value)
}

  return (
    <div className="containerHome    mx-auto  ">
      <div className=" containerCarta  mx-auto rounded-lg grid gap-4 grid-cols-3  justify-items-center justify-self-stretch  ">
        <div className="columnasMenus w-1/3   flex flex-col">
          <div className=" absolute containerImagenIzquierda rounded-full">
            <img
              src={imagen1}
              alt=""
              className="mb-4 objet-cover  rounded-full "
            />
          </div>

          <MenuLista1/>

        </div>
        <div className="columnasMenus  w-1/3  flex flex-col ">
          <div className="titulo text-center w-8/12 mx-auto h-1/3 mt-5 mb-5">
            <h1 className="text-orange-500 font-bold text-4xl italic">
              Pizzas
            </h1>
            <h2 className="text-white font-bold mb-0 text-3xl">
              A la Parrilla
            </h2>
            <hr className="h-4 w-10/12 mx-auto my-2" />
            <p className="text-white text-sm my-0">
              Carta Digital! <br />
              Hace tu pedido y mandanos por WhatsApp, apretendo el boton de
              enviar!
            </p>
            <div className="puntosSeparacion flex text-orange-500 text-3xl justify-center align-center mt-10">
              <span> • • </span>
              <span> • • </span>
              <span> • • </span>
            </div>
          </div>
          <MenuLista2/>
         
         
          <Link to={'/enviando'}
          className="rounded-full buttonEnviar w-4/12 mx-auto my-5 font-bold  text-sm bg-green-500 border border-4 border-white px-1 py-1">
            Realizar Pedido
          </Link>


        </div>
        <div className="columnasMenus  w-1/3 flex flex-col">
          <div className=" absolute containerImg  rounded-full ">
            <img
              src={imagen2}
              alt=""
              className="mx-auto objet-cover  rounded-full "
            />
          </div>
          <MenuLista3/>
          <div className=" absolute containerImgAbajo rounded-full">
            <img
              src={imagen3}
              alt=""
              className="mb-4 objet-cover  rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
