import React from "react";
import Folleto1 from "../EstilosFolletos/Folleto1";
import Folleto2 from "../EstilosFolletos/Folleto2";
import Folleto3 from "../EstilosFolletos/Folleto3";

export default function RenderEditorDiseño({
  styles,
  categorias,
  items,
  perfilCuenta,
  handleDeleteImagen,
  handleSubmitFile,
  imagen,
}) {
  if (!styles?.diseñoFolleto) {
    return (
      <div className="flex flex-col w-full md:py-2 py-5">
        <div className=" md:w-[98%] w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col md:gap-4 justify-around items-center justify-self-auto relative ">
          Cargando..
        </div>
      </div>
    );
  } else {
    switch (styles?.diseñoFolleto) {
      case 1:
        return (
          <div className="flex flex-col w-full md:py-2 py-5">
            <Folleto1
              styles={styles}
              imagen={imagen}
              categorias={categorias}
              handleDeleteImagen={handleDeleteImagen}
              handleSubmitFile={handleSubmitFile}
              businessName={perfilCuenta?.perfilUser?.businessName}
              perfilCuenta={perfilCuenta}
              editFolleto={true}
            />
          </div>
        );
        break;
      case 2:
        return (
          <div className="flex flex-col w-full md:py-2 py-5">
            <Folleto2
              editFolleto={true}
              styles={styles}
              imagen={imagen}
              categorias={categorias}
              handleDeleteImagen={handleDeleteImagen}
              handleSubmitFile={handleSubmitFile}
              businessName={perfilCuenta?.perfilUser?.businessName}
              perfilCuenta={perfilCuenta}
            />
          </div>
        );
        break;
      case 3:
        return (
          <div className="flex flex-col w-full md:py-2 py-5">
            <Folleto3
               editFolleto={true}
               styles={styles}
               imagen={imagen}
               categorias={categorias}
               handleDeleteImagen={handleDeleteImagen}
               handleSubmitFile={handleSubmitFile}
               businessName={perfilCuenta?.perfilUser?.businessName}
               perfilCuenta={perfilCuenta}
            />
          </div>
        );
        break;
      default:
        break;
    }
  }
}
