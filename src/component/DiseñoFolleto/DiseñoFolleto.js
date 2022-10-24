import React, { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { db, storage } from "../Firebase";
import { FaEdit, FaTimes } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import ModalLoading from "../modal/ModalLoading";

import ModeloOriginal from "./ModeloOriginal";
import Pruebadiseño from "./Pruebadiseño";
import MenuDiseños from "./MenuDiseños";
import EditorFolleto from "./OutletdeDiseños/EditorFolleto";


export default function DiseñoFolleto({ perfilUserLogin }) {
  const [perfilCuenta, listadoItems] = useOutletContext();



  return (
    <div className="board min-h-full">
    
      <Toaster />
      <div className=" w-[95%] md:pl-10 md:px-2 h-full pt-8 md:pt-0 mx-auto">
        <section className="perfilCuenta flex flex-col  bg-gray-100  bg-opacity-60 backdrop-filter backdrop-blur-sm w-full  shadow-md border-2 text-medium  py-5 px-2 gap-2 rounded-lg h-full">
          <MenuDiseños/>
          <Outlet context={[perfilCuenta,listadoItems]} />


        </section>
      </div>
    </div>
  );
}
