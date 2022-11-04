import { Link } from "react-router-dom";
import Items2 from "../../FolletoPublico/Items/Items2";
import ImagenesFolleto2 from "./ComponentesFolleto2/ImagenesFolleto2";

export default function Folleto2({
  editFolleto,
  styles,
  perfilCuenta,
  imagen,
  categorias,
  businessName,
  handleSubmitFile,
  handleDeleteImagen,
}) {

  const itemsMenu = (categoria, i) => {
    return (
      <div className={`w-full flex flex-col items-center  `}>
        {
          perfilCuenta?.categorias?.[categoria]
          ?.filter((item) => item.active === true).length!==0&&
          <h1
          style={{ color: `${styles.textColor1}` }}
          key={i}
          className="text-3xl font-mono font-bold mb-1"
        >
          {categoria}
        </h1>}
        <hr className="w-10/12 mb-1 border-l-4" />
        {perfilCuenta?.categorias?.[categoria]
          ?.filter((item) => item.active === true)
          .map((item) => (
            <Items2
              nombre={item.nombre}
              descripcion={item.descripcion}
              precio={item.precio}
              productID={item.productID}
              textColor1={styles.textColor1}
              textColor2={styles.textColor2}
            />
          ))}
      </div>
    );
  };

  return (
    <div className=" lg:w-[60%] md:w-11/12  w-full md:min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col justify-around items-center relative ">
      <div className="flex lg:flex-row flex-col-reverse flex-wrap  items-stretch justify-between   w-full h-full">
        <section
          style={{
            background: `linear-gradient(45deg ,${styles?.color1} 0%, ${styles?.color1}90 100%) `,
          }}
          className="bg-gradient-to-t min-h-max w-full  flex flex-col items-center md:items-stretch md:mx-auto justify-between from-gray-900 to-gray-900/90 lg:w-3/5 pb-10  lg:text-center text-white relative"
        >
          <div className="min-h-diez text-center flex flex-col items-center gap-2 w-11/12 md:w-10/12 mx-auto md:text-center lg:px-4 py-10">
            <h1
              style={{ color: `${styles.color2}` }}
              className="text-7xl font-black text-yellow-500"
            >
              Menu
            </h1>
            <h2 className="font-medium ">
              {perfilCuenta?.perfilUser?.descripcion}
            </h2>
          </div>
          <div className="w-11/12 flex flex-col h-full items-center justify-start md:py-2 gap-3 md:mx-auto text-white">
            {categorias?.map((categoria, i) => itemsMenu(categoria, i))}
          </div>
          {
            <Link
              to={`/${businessName}/enviando`}
              perfilCuenta={perfilCuenta}
              className="absolute inset-x-[30%] text-white md:bottom-4 bottom-2 rounded-lg w-32 text-center mx-auto font-medium  text-sm bg-green-500/70 border border-white px-1 py-1"
            >
              Realizar Pedido
            </Link>
          }
        </section>
        <section
          style={{
            background: `linear-gradient(45deg ,${styles?.color2} 0%, ${styles?.color2}90 100%) `,
          }}
          className="bg-gradient-to-tr from-orange-300 to-orange-500 lg:w-2/5 min-h-max  relative flex flex-col items-center lg:items-stretch justify-between "
        >
          <div className="hidden lg:flex h-full -translate-x-2 z-30 absolute">
            <div className="bg-wave-pattern w-16 bg-repeat-y h-full mix-blend-exclusion "></div>
          </div>
          <ImagenesFolleto2
            className=""
            imagen={imagen?.find((element) => element.posicion == "logo")?.url}
            width={50}
          />
          <h1 
          style={{ color: `${styles.textColor1}` }}
          className="text-3xl mx-auto w-full font-black px-5 my-5 text-gray-900 break-words text-center">
            {perfilCuenta?.perfilUser?.businessName}
          </h1>
          <div className="hidden lg:flex flex-col lg:px-4 items-center justify-between">
            {imagen
              ?.filter((element) => element.posicion !== "logo")
              .map((img, i) => (
                <ImagenesFolleto2
                  imagen={img.url}
                  name={img.posicion}
                  editFolleto={editFolleto}
                  handleDeleteImagen={handleDeleteImagen}
                  handleSubmitFile={handleSubmitFile}
                  key={i}
                />
              ))}
          </div>

          <div className="bg-gray-100/30 backdrop-blur-sm px-3 py-5 text-sm font-bold flex lg:flex-col  w-full mx-auto  items-center justify-between gap-2 mt-2">
            {perfilCuenta?.perfilUser?.facebbok && (
              <p>{perfilCuenta?.perfilUser?.facebook}</p>
            )}
            {perfilCuenta?.perfilUser?.instagram && (
              <p>{perfilCuenta?.perfilUser?.instagram}</p>
            )}
            {perfilCuenta?.perfilUser?.nTel1 && (
              <p>{perfilCuenta?.perfilUser?.nTel1}</p>
            )}
            <p>{perfilCuenta?.perfilUser?.direccion}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
