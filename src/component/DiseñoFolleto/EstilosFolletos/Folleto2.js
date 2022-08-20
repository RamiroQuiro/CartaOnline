import { Link } from "react-router-dom";
import Items2 from "../../FolletoPublico/Items/Items2";

export default function Folleto2({styles,perfilCuenta,imagen,categorias,businessName}) {
  

  const itemsMenu = (categoria, i) => {
    return (
      <div className={`w-full flex flex-col items-center  `}>
        <h1 
          style={{ color: `${styles.textColor1}` }}
        key={i} className="text-3xl font-mono font-bold mb-1">
          {categoria}
        </h1>
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

  const renderImg = (imagen, width) => {
    return (
      <figure
        className={`px-4 py-3 flex flex-col items-center w-full mx-auto lg:w-[${width}%]  rounded-xl overflow-hidden`}
      >
        <img
          width={"300px"}
          height="150px"
          src={imagen}
          alt="imagen"
          className="  object-cover object-center md:w-[${width}%] h-[200px] z-30  rounded-xl "
        />
        <figcaption className="font-bold text-sm px-5 text-center">
          no hhya tierra como la mia dice el cantor en su canto
        </figcaption>
      </figure>
    );
  };

  return (
   
      <div
       
        className=" lg:w-[60%] md:w-11/12  w-full min-h-[98vh] shadow-[-8px_0_30px_5px_#1c212890] overflow-hidden mx-auto rounded-lg flex flex-col justify-around items-center relative "
      >
        <div className="flex lg:flex-row flex-col-reverse flex-wrap  items-stretch justify-between   w-full h-full">
          <section
              style={{
                background: `linear-gradient(45deg ,${styles?.color1} 0%, ${styles?.color1}90 100%) `,
              }}
          className="bg-gradient-to-t min-h-max w-full  flex flex-col items-center mx-auto justify-between from-gray-900 to-gray-900/90 lg:w-3/5 pb-10  lg:text-center text-white relative">
            <div className="min-h-diez text-center flex flex-col items-center gap-2 w-10/12 md:text-center lg:px-4 py-10">
              <h1  style={{ color: `${styles.color2}` }} className="text-7xl font-black text-yellow-500">Menu</h1>
              <h2 className="font-medium ">
                {perfilCuenta?.perfilUser?.descripcion}
              </h2>
            </div>
            <div className="w-11/12 flex flex-col h-full items-center justify-start py-2 gap-3 mg:mx-auto text-white">
              {categorias?.map((categoria, i) => itemsMenu(categoria, i))}
            </div>
            {
          <Link
            to={`/${businessName}/enviando`}
            perfilCuenta={perfilCuenta}
            className="absolute inset-x-[30%] text-white bottom-16 rounded-full w-32 text-center mx-auto font-medium  text-sm bg-green-500/70 border border-white px-1 py-1"
          >
            Realizar Pedido
          </Link>
        }
          </section>
          <section 
            style={{
              background: `linear-gradient(45deg ,${styles?.color2} 0%, ${styles?.color2}90 100%) `,
            }}
          className="bg-gradient-to-tr from-orange-300 to-orange-500 lg:w-2/5 min-h-max  relative flex flex-col items-center lg:items-stretch justify-between ">
            <div className="hidden lg:flex h-full -translate-x-2 z-30 absolute">
              <div className="bg-wave-pattern w-16 bg-repeat-y h-full mix-blend-exclusion "></div>
            </div>
            {renderImg(imagen.logo, 50)}

            <h1 className="text-5xl mx-auto w-full font-black px-5 text-gray-900 break-words text-center">
              {perfilCuenta?.perfilUser?.businessName}
            </h1>
            <div className="hidden lg:flex flex-col lg:px-4 items-center justify-between">
              {renderImg(imagen.imagen1, 70)}

              {renderImg(imagen.imagen2, 70)}

              {renderImg(imagen.imagen3, 70)}
            </div>

            <div className="bg-gray-100/30 backdrop-blur-sm px-3 py-5 text-sm font-bold flex lg:flex-col  w-full mx-auto  items-center justify-between gap-2 mt-2">
            <p>{perfilCuenta?.perfilUser?.facebook}</p>
          <p>{perfilCuenta?.perfilUser?.instagram}</p>
          <p>{perfilCuenta?.perfilUser?.nTel1}</p>
          <p>{perfilCuenta?.perfilUser?.direccion}</p>
            </div>
          </section>
        </div>
      </div>

  );
}
