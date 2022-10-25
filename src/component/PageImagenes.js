import {  doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Galeria from "./Galeria";
import FormularioImagenes from "./FormularioImagenes";
import { db } from "./Firebase";

export default function PageImagenes() {
  const [ perfilUser] = useOutletContext();

  const [imagenes, setImagenes] = useState(null);
  const docRef = doc(db, `listado/empresas`);

  useEffect(() => {
    const traer = async () => {
      const data = await getDoc(docRef).then((data) =>
        setImagenes(data.data()[perfilUser.businessName].images)
      );
    };
    traer();
  }, []);

  return (
    <div className="board min-h-screen">
      <div className=" w-5/6  mx-auto flex h-full">
        <section className=" flex justify-around items-center inventarioComidas w-full h-full  shadow-md border-2  text-medium px-5 py-5 mx-auto rounded-lg gap-4">
          <div className="flex  mx-auto gap-4 lg:py-8 justify-around items-center lg:px-15">
            <FormularioImagenes perfilUser={perfilUser} />
            <div className="flex w-1/2 mx-auto gap-4 lg:py-4 items-center justify-around">
              <div className="inventarioComidas  duration-300 shadow-md border-2  text-medium px-5 py-5 rounded-lg">
                <h2 className="font-bold mb-2 text-center text-gray-700 text-2xl">
                  Stock de Imagenes
                </h2>
                <Galeria imagenes={imagenes} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
