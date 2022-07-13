import React from 'react'
import imagen3 from "../../../img/archivo.png";
import impresion from "../../../img/analitica.png";
import telefonoInteligente from "../../../img/telefono-inteligente.png";
import fontTexto from "../../../img/redaccion.png";

export default function SectionBannerChicos() {
  return (
    <section className="flex w-5/6 py-10 justify-around items-center mx-auto ">
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
  )
}
