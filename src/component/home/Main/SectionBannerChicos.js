import React from "react";
import imagen3 from "../../../img/archivo.png";
import impresion from "../../../img/analitica.png";
import telefonoInteligente from "../../../img/telefono-inteligente.png";
import fontTexto from "../../../img/redaccion.png";
import descarga from "../../../img/bandeja-de-entrada.png";
import escalera from "../../../img/escaleras.png";

export default function SectionBannerChicos() {
  return (
    <section className="flex w-5/6 py-5 justify-around items-center mx-auto ">
      <div className="flex flex-col relative gap-3">
        <div className="md:pl-14 mt-4">
          <div className="flex items-center  flex-row-reverse gap-8 border-2 p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-32"
                alt="plantilla"
                width="80px"
                height="80px"
                src={telefonoInteligente}
              />
            </div>
            <div>
              <h3 className="font-bold"> Recibe tus pedidos por WhatsApp</h3>
              <p>
                Recibe pedidos vía WhatsApp. Agiliza el servicio de Delivery y
                el del local gastronómico. No dependerás de ningun proveedor
                externo a tu negocio para recibir pedidos y no pagarás
                comisiones.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:pr-14 mt-4">
          <div className="flex gap-8 justify-start items-center border-2 p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-24"
                alt="plantilla"
                width="80px"
                height="80px"
                src={imagen3}
              />
            </div>
            <div>
              <h3 className="font-bold">
                {" "}
                Elige una plantilla para tu menú con un diseño que se ajuste a
                tu visión
              </h3>
              <p>
                Diseños a las Cartas de antes! Facil lectura y administración
                para el cliente.
                <br />
                Elige un diseño de folleto y carga los elementos
              </p>
            </div>
          </div>
        </div>
        <div className=" md:pl-14 mt-4">
          <div className="flex flex-row-reverse items-center gap-8 border-2 p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-24"
                alt="plantilla"
                width="80px"
                height="80px"
                src={fontTexto}
              />
            </div>
            <div>
              <h3 className="font-bold"> Rearma tu Carta-Online</h3>
              <p>
                Rearma el menu cuantas veces necesites y requieras, actualiza al
                instante, no hace falta volver a mandar el link de tu menu
              </p>
            </div>
          </div>
        </div>
        <div className="md:pr-14 mt-4">
          <div className="flex gap-8 border-2 items-center p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-24"
                alt="plantilla"
                width="80px"
                height="80px"
                src={impresion}
              />
            </div>
            <div>
              <h3 className="font-bold">Gana la calle</h3>
              <p>
                Si bien, buscamos ecologizar y abaratar costos, no permitas
                perder la calle, descarga e imprime el folleto ,el afiche y tu
                codigo QR actualizado sin intermediarios.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-14 mt-4">
          <div className="flex  flex-row-reverse items-center gap-8 border-2 p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-24"
                alt="plantilla"
                width="80px"
                height="80px"
                src={descarga}
              />
            </div>
            <div>
              <h3 className="font-bold">
                {" "}
                Descarga tu menú con un alta calidad
              </h3>
              <p>
                Descarga tu menú como un archivo PDF o PNG de alta calidad,
                compártelo directamente en tus redes sociales y/o contactos .
              </p>
            </div>
          </div>
        </div>
        <div className="md:pr-14 mt-4">
          <div className="flex gap-8 border-2 items-center p-5 text-lg">
            <div>
              <img
                className="object-contain w-min md:w-24"
                alt="plantilla"
                width="80px"
                height="80px"
                src={escalera}
              />
            </div>
            <div>
              <h3 className="font-bold"> Simples pasos</h3>
              <p>
                Carga tus productos a Carta-Online de forma facil, sin tener que
                llenar tantos casilleros, ni subir una imagen por productos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
