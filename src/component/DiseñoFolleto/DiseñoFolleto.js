import {  Outlet, useOutletContext } from "react-router-dom";
import  { Toaster } from "react-hot-toast";


import MenuDiseños from "./MenuDiseños";


export default function DiseñoFolleto({ perfilUserLogin }) {
  const [perfilCuenta, listadoItems,movil] = useOutletContext();

const outletContexto={
  perfilCuenta,
  listadoItems,
  movil
}

  return (
    <div className="board min-h-full">
    
      <Toaster />
      <div className=" w-[95%] lg:pl-10 lg:px-2 h-full pt-8 lg:pt-0 mx-auto">
        <section className="perfilCuenta flex flex-col  bg-gray-100  bg-opacity-60 backdrop-filter backdrop-blur-sm w-full  shadow-md border-2 text-medium  py-5 px-2 gap-2 mx-auto rounded-lg h-full">
          <MenuDiseños/>
          <Outlet context={outletContexto} />


        </section>
      </div>
    </div>
  );
}
