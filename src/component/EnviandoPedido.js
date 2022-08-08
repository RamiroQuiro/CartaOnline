import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContexto } from "./contexto/ContextProvider";
import "./enviandopedido.css";
import { db } from "./Firebase";

export default function EnviandoPedido() {
  const [lista, setLista] = useState([]);
  const { stateGral, state } = useContexto();
  const [pedido, setPedido] = useState({});
  const [perfilCuenta, setPerfilCuenta] = useState({
    businessName: "",
    nTel1: "",
    direccion: "",
  });
  const navigate = useNavigate();

  const numeroWhatsApp = 5493855353174;

  const volver = () => {
    navigate(-1);
  };

  const params = useParams();
  const businessName = params.businessName;
  const docRef = doc(db, `listado/empresas`);

  useEffect(() => {
    const montarPedido = () => {
      const listorti = stateGral();
      setLista(listorti.pedidosGral);
    };
    montarPedido();
  }, []);

  useEffect(() => {
    const traerData = async () => {
      const data = await getDoc(docRef).then(
        (data) => data.data()[businessName].perfilUser
      );
      setPerfilCuenta({
        businessName: data.businessName,
        nTel1: data.nTel1,
        direccion: data.direccion,
      });
    };
    traerData();
  }, []);

  const sumaTotal = () => {
    return lista.reduce((a, b) => a + (Number(b.precio) || 0) * b.cantidad, 0);
  };
  const suma = sumaTotal();

  const handleChange = (e) => {
    setPedido({ ...pedido, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.open(
        `https://wa.me/549${
          perfilCuenta.nTel1
        }?text=Hola,%20este%20es%20mi%20pedido:${lista.map(
          (item) => `%0A%0A ✓ *${item.cantidad}* *${item.ItemsMenu}* `
        )}%0A%0AMi%20nombre%20es%20*${
          pedido.nombre
        }*%0A%0A%20Mi%20dirección es%20*${
          pedido.direccion
        }*,%3A%0A%0Aobservación:%20*${
          pedido.mensaje
        }* %0A%0A(◠﹏◠)%0A%0AEl%20total%20es:%20*${suma}*`,
        `_blank`
      );
    }, 200);
  };

  return (
    <div className="flex min-h-screen md:flex-row text-gray-800 flex-col justify-center items-center  md:bg-gray-100 bg-gray-50 py-2 md:py-0">
      <div className="flex flex-col md:flex-row  bg-white md:w-2/5 md:h-[70vh] rounded-xl border items-center justify-between px-5">
        <section className=" text-white md:flex flex-col flex-nowrap px-3 py-7 md:h-[80vh] h-2/3 md:-top-1 md:-left-10 w-[100vw]  relative left ">
          <div id="head">
            <h1 className="text-2xl md:text-xl font-bold mt-5 mb-2">Este es su pedido</h1>
          </div>
          <ul className="rounded-lg px-5 py-2">
            {lista.map((item) => (
              <li className="uppercase md:text-sm text py-2 border-b-2 font-bold">
                {item.cantidad}
                {" - "}
                {item.ItemsMenu}
                {" - "}${item.precio * item.cantidad}
              </li>
            ))}
          </ul>
        </section>
        <section className="font-medium  z-50 md:h-full w-screen md:top-0  flex  flex-col flex-nowrap md:-ml-8 px-8 mt-5 md:mt-0 justify-center items-center ">
          <form
            onSubmit={enviar}
            className="flex gap-2 flex-nowrap flex-col w-full"
          >
            <label htmlFor="expiry-month" className="inline-block">
              Total de su pedido es:
            </label>
            <p
              type="text"
              className="inline-block text-2xl md:text-xl font-bold text-red-500"
              name="total"
              id=""
            >{`$ ${suma}`}</p>

<div className="flex flex-col flex-nowrap justify-center md:mb-5">
              <label htmlFor="sec-code" className="text-sm pt-3">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                className="outline-none bg-gray-100/95 border-b-2 p-1.5 rounded mt-0.5 relative border-none"
                onChange={handleChange}
                placeholder="Nombre y Apeliido"
                required
              />
            </div>
            <div className="flex flex-col flex-nowrap justify-center md:mb-5">
              <label htmlFor="sec-code" className="text-sm  ">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                onChange={handleChange}
                className="outline-none bg-gray-100/95 border-b-2 p-1.5 rounded mt-0.5 relative border-none"
                placeholder="Dirección"
                required
              />
            </div>
            <div className="flex flex-col flex-nowrap justify-center md:mb-5">
              <label htmlFor="sec-code" className="text-sm ">
                Obsercación
              </label>
              <textarea
                type="text"
                onChange={handleChange}
                name="mensaje"
                className="outline-none bg-gray-100/95 border-b-2 p-1.5 rounded mt-0.5 relative border-none"
                placeholder="un poco crocante, mas salsa, poca salsa, etc"
              />
            </div>

            <button 
            className="bg-gradient-to-tr from-blue-400 to-blue-300 p-2 border-none rounded-xl text-white font-bold text-sm duration-200 mb:mt-5 my-2 md:my-0 hover:from-transparent hover:to-transparent hover:shadow-[0_0_0_2px_#4183d7] hover:text-[#4183d7]"
            type="submit">Mandar WhatsApp</button>
          </form>
        </section>
        <button
        onClick={volver}
        className="uppercase  text-blue-600 font-bold my-8 md:my-0 md:absolute bottom-3 inset-x-1/3"
      >
        {" "}
        volver
      </button>
      </div>
     
    </div>
  );
}
