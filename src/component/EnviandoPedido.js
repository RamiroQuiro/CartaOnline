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

  const numeroWhatsApp=5493855353174

  
  const volver = () => {
    navigate(-1);
  };


const params=useParams()
const businessName=params.businessName
const docRef = doc(db, `listado/empresas`);

  useEffect(() => {
    const montarPedido = () => {
      const listorti = stateGral();
      setLista(listorti.pedidosGral);
    };
    montarPedido();
  }, []);

  useEffect(() => {
    const traerData =async() => {
 const data= await getDoc(docRef).then((data) => data.data()[businessName]);
setPerfilCuenta({
  businessName: data.businessName,
  nTel1: data.nTel1,
  direccion: data.direccion,
})
    }
    traerData()
  },[])


  const sumaTotal = () => {
    return lista.reduce((a, b) => a + (Number(b.precio) || 0) * b.cantidad, 0);
  };
  const suma = sumaTotal();

  const handleChange = (e) => {
   setPedido({...pedido,[e.target.name]:e.target.value});
  };

  const enviar = (e) => {
    e.preventDefault();
    setTimeout(() => {
         window.open(
        `https://wa.me/549${perfilCuenta.nTel1}?text=Hola,%20este%20es%20mi%20pedido:${
          lista.map((item =>(`%0A%0A ✓ *${item.cantidad}* *${item.ItemsMenu}* ` ) ))
        }%0A%0AMi%20nombre%20es%20*${pedido.nombre}*%0A%0A%20Mi%20dirección es%20*${pedido.direccion}*,%3A%0A%0Aobservación:%20*${pedido.mensaje}* %0A%0A(◠﹏◠)%0A%0AEl%20total%20es:%20*${suma}*`,
        `_blank`
      );
    }, 200);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="mainContainer shadow-2xl border border-1 ">
        <section id="left">
          <div id="head">
            <h1 className="font-bold text-xl mt-5">Este es su pedido</h1>
          </div>
          <ul className="rounded-lg px-5 py-5">
            {lista.map((item) => (
              <li className="uppercase text-sm py-2 border-b-2 font-bold">
                {item.cantidad}
                {" - "}
                {item.ItemsMenu}
                {" - "}${item.precio * item.cantidad}
              </li>
            ))}
          </ul>
        </section>
        <section className="font-medium" id="right">
          <form onSubmit={enviar}>
            <label htmlFor="expiry-month" className="inline-block">
              Total de su pedido es:
            </label>
            <p
              type="text"
              className="inline-block"
              name="total"
              id=""
            
            >{`$ ${suma}`}</p>

            <div id="form-sec-code" className="form-field">
              <label htmlFor="sec-code" className="text-sm pt-3">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder="Ramiro Quiroga"
                required
              />
            </div>
            <div id="form-sec-code" className="form-field">
              <label htmlFor="sec-code" className="text-sm  ">
                Dirección
              </label>
              <input
                type="text"
                name="direccion"
                onChange={handleChange}
                placeholder="Mza 14 Lt 24 B°El Rincon"
                required
              />
            </div>
            <div id="form-sec-code" className="form-field">
              <label htmlFor="sec-code" className="text-sm ">
                Obsercación
              </label>
              <textarea
                type="text"
                onChange={handleChange}
                name="mensaje" 
                className="text-sm px-2 py-5"
                placeholder="un poco crocante, mas salsa, poca salsa, etc"
                
              />
            </div>

            <button type="submit">Mandar WhatsApp</button>
          </form>
        </section>
      </div>
      <button
        onClick={volver}
        className="uppercase text-blue-600 font-bold absolute bottom-3 left-50"
      >
        {" "}
        volver
      </button>
    </div>
  );
}
