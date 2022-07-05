import React from "react";

export default function Galeria({ imagenes }) {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className=" px-5 py-2 mx-auto lg:pt-24 lg:px-32">
            {imagenes?.map((imagen, index) => (
              <div className="
                p-1 md:p-2">
                <img
                  alt={imagen.nombre}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={imagen.url}
                />
              </div>
            ))}
          </div>
    </section>
  );
}
