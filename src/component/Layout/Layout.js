import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { Auth } from "../contexto/AuthContext";

export default function Layout() {
  const { user, perfilUser } = Auth();
  const [perfilUserLogin, setPerfilUserLogin] = useState({});
  const [listadoItems, setListadoItems] = useState([]);
 
  const [recargar, setRecargar] = useState(false);

  const docRef = doc(db, `usuarios/${user?.uid}`);
  const docRefItems = doc(db, "/listado/empresas");
const docRefCategorias=perfilUserLogin?.businessName
  // termina trayendo data user
  useEffect(() => {
    
    const unsub = onSnapshot(docRefItems, (listado) => {
      setListadoItems(listado.data()[docRefCategorias]);
    })
      
      return () => unsub();
    }, [perfilUserLogin]);
    


  useEffect(() => {
    const unsub = onSnapshot(docRef, (datos) => {
      const datosTraidos = datos.data();
      setPerfilUserLogin(datosTraidos.perfilUser);
    });
    return () => unsub();
  }, []);
  return (
    <div className="containerLayout w-screen">
      <Navbar perfilUser={perfilUserLogin} className="z-50" />
      <main>
        <Outlet context={[listadoItems, perfilUserLogin]} />
      </main>
    </div>
  );
}
