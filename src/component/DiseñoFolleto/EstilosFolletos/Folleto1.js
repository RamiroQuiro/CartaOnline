import { Link } from "react-router-dom";
import ItemsMenu from "../../FolletoPublico/Items/ItemsMenu";
import ImagenesFolleto2 from "./ComponentesFolleto2/ImagenesFolleto2";

export default function Folleto1({
  styles,
  perfilCuenta,
  imagen,
  categorias,
  businessName,
  name,
  editFolleto,
}) {
  return (
    <div
      style={{
        background: `linear-gradient(${styles?.SelectionRange}deg ,${styles?.color1} ${styles?.porcentaje}%, ${styles?.color2} ${styles?.porcentaje2}%) `,
      }}
      className=" md:w-[98%] w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col md:gap-4 justify-around items-center justify-self-auto relative "
    >
      <header className="w-full flex md:flex-row flex-col items-center justify-center  h-2/6">
        <div className="md:h-full py-2 md:py-0 h-1/3 w-full  md:w-1/3 md:flex items-center justify-center relative">
          <div className=" md:absolute peer w-[50%] md:w-[80%] mx-auto md:-rotate-6 rounded-xl">
            <img
              width={"200"}
              height="200px"
              src={imagen?.find((img) => img?.posicion == "imagen1")?.url}
              alt="imagen1"
              className="md:mb-4  objet-contain object-center w-full p-1 max-w-[200px] h-auto max-h-[350px] z-30  rounded-xl "
            />
          </div>
        </div>
        {/* Titulo y Descripcion */}
        <div className="h-full md:w-1/3 flex flex-wrap items-center justify-center relative">
          <ImagenesFolleto2
            width={30}
            imagen={imagen?.find((img) => img?.posicion == "logo")?.url}
          />
          <div className="text-center md:w-8/12 mx-auto h-1/3 mt-5 mb-5">
            <h1
              style={{ color: `${styles?.textColor1}` }}
              className="text-paleta-200  font-bold md:text-4xl text-2xl italic"
            >
              {perfilCuenta?.perfilUser?.businessName}
            </h1>
            <hr className="h-4 w-10/12 mx-auto my-1 md:my-2" />
            <p
              style={{ color: `${styles?.textColor2}` }}
              className="text-white text-sm px-2 md:px-0"
            >
              {perfilCuenta?.perfilUser?.descripcion ||
                "Descripcion de la empresa"}
            </p>
            <div
              style={{ color: `${styles?.textColor1}` }}
              className="puntosSeparacion flex gap-2 text-orange-500 text-3xl justify-center align-center mt-5"
            >
              <span> • • </span>
              <span> • • </span>
              <span> • • </span>
            </div>
          </div>
        </div>
        <div className=" h-full lg:w-1/3 w-1/5 hidden md:flex items-center justify-end relative">
          <div className=" absolute peer w-full mx-auto md:w-[80%] rotate-6 rounded-xl">
            <img
              width={"300px"}
              height="300px"
              src={imagen?.find((img) => img?.posicion == "imagen2")?.url}
              alt={"imagen2"}
            className="md:mb-4  objet-contain object-center w-full p-1 max-w-[275px] h-auto max-h-[350px] z-30  rounded-xl "
            />
          </div>
        </div>
      </header>
      {/* Titulo y Descripcion */}

      <div className="w-full min-h-[4/5]  md:py-6 md:px-3 flex md:flex-row flex-wrap  justify-center items-center gap-1 md:gap-4">
        {categorias?.map((categoria, i) => (
          <div
            key={i}
            className="md:p-3 p-2 rounded-lg bg-gray-50/10 backdrop-blur-sm flex flex-col min-h-[30%] w-11/12 flex-initial md:w-[30%] items-center"
          >
            <h3
              style={{ color: `${styles?.textColor1}` }}
              className="md:text-xl -skew-y-3 text-lg text-center w-6/12 font-medium bg-gray-500 px-4 py-1 rounded-lg"
            >
              {categoria}
            </h3>
            {perfilCuenta?.categorias?.[categoria]
              ?.filter((item) => item.active === true)
              .map((item) => (
                <ItemsMenu
                  textColor1={styles?.textColor1}
                  textColor2={styles?.textColor2}
                  key={item.productID}
                  optionMenu={item.nombre}
                  description={item.descripcion}
                  precio={item.precio}
                  productID={item.productID}
                />
              ))}
          </div>
        ))}
      </div>

      <footer className="w-full mt-14 bottom-0 px-16 mb-10 flex flex-wrap bg-gray-100/50 mx-auto md:gap-4 py-0.5 justify-between items-center">
        <span>{perfilCuenta?.perfilUser?.facebook || "facebook"}</span>
        {!editFolleto && (
          <Link
            to={`/${businessName}/enviando`}
            perfilCuenta={perfilCuenta}
            className="fixed inset-x-[30%] text-white bottom-2 rounded-lg w-32 text-center mx-auto font-medium  text-sm bg-green-500/70 border border-white px-1 py-1"
          >
            Realizar Pedido
          </Link>
        )}
        <span>{perfilCuenta?.perfilUser?.instagram || "Instagram"}</span>
        <span>{perfilCuenta?.perfilUser?.direccion}</span>
      </footer>
    </div>
  );
}
