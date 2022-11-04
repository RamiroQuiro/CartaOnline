import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./layout.css";
import { useEffect, useState } from "react";
import { doc,  onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { Auth } from "../contexto/AuthContext";

export default function Layout() {
  const [movil, setMovil] = useState(false);
  const { user, perfilUser } = Auth();
  const [perfilUserLogin, setPerfilUserLogin] = useState({});
  const [listadoItems, setListadoItems] = useState([]);

  const [recargar, setRecargar] = useState(false);

  const docRef = doc(db, `usuarios/${user?.uid}`);
  const docRefItems = doc(db, "/listado/empresas");
  const docRefCategorias = user?.uid;
  // termina trayendo data user
  useEffect(() => {
    const unsub = onSnapshot(docRefItems, (listado) => {
      setListadoItems(listado.data()[docRefCategorias]);
    });

    return () => unsub();
  }, [perfilUserLogin]);

  useEffect(() => {
    let navegador = navigator.userAgent;
    if (
      navegador.match(/Android/i) ||
      navegador.match(/webOS/i) ||
      navegador.match(/iPhone/i) ||
      navegador.match(/iPad/i) ||
      navegador.match(/iPod/i) ||
      navegador.match(/BlackBerry/i) ||
      navegador.match(/Windows Phone/i)
    ) {
      setMovil(true);
    } else {
      setMovil(false);
    }

    const unsub = onSnapshot(docRef, (datos) => {
      const datosTraidos = datos.data();
      setPerfilUserLogin(datosTraidos.perfilUser);
    });
    return () => unsub();
  }, []);
  return (
    <div className="containerLayout w-full overflow-x-hidden">
      <Navbar perfilUser={perfilUserLogin} className="z-50" />
      <main>
        <Outlet context={[listadoItems, perfilUserLogin, movil,docRefCategorias]} />
      </main>
    </div>
  );
}
