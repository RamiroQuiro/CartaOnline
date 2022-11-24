import React from "react";
import ImagenesFolleto2 from "../EstilosFolletos/ComponentesFolleto2/ImagenesFolleto2";

export default function ImagenAfiche({id, perfilCuenta, imagen, qrCode,ref }) {
  
  return (
    <div id={id} ref={ref} className="print:visible relative md:w-[720px]  flex md:h-[960px] border-b-4 border-t-4 border-paleta-500 flex-col items-center justify-between mx-auto bg-white rounded-xl overflow-hidden">
    
        <div className="bg-red-500/70 absolute w-auto h-1/2 top-0 left-0 z-10 backdrop-blur-sm">
        <img
          src={imagen?.find((img) => img?.posicion == "imagen1")?.url}
          alt="backgrounQR"
          className="z-0 object-cover w-full h-auto  "
        />
      </div>
      <div className=" bg-orange-500/50 w-full h-1/2 mx-auto text-center pt-8 text-gray-100 z-20 backdrop-blur-sm">
      <img
          src={imagen?.find((img) => img?.posicion == "logo")?.url}
          alt="backgrounQR"
          className="z-10 w-20 mx-auto my-10 object-cover  h-auto  "
        />
   

        <h1 className="text-5xl font-bold tracking-wide text-paleta-100 bg-white/80 py-2 ">
          {perfilCuenta?.perfilUser?.businessName}
        </h1>
      </div>
      {qrCode ? (
        <div className="boder-2 p-0 flex  flex-col items-center justify-center bg-white/95 backdrop-blur-sm w-full mx-auto h-1/2 z-30 ">
          <img
            src={qrCode}
            alt="backgrounQR"
            height="550px"
            width="400px"
            className="rounded-xl mx-auto overflow-hidden -translate-y-1/3 "
          />
          <div className="mx-auto w-full">
            <h1 className="text-4xl w-1/2 mx-auto font-medium text-center capitalize md:-translate-y-full -translate-y-1/2 text-neutral-800">
              Scanea para ver nuestros productos
            </h1>
          </div>
        </div>
      ) : (
        <span>Cargado</span>
      )}
    </div>
  );
}
