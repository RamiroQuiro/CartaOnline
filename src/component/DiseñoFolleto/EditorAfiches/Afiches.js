import { useEffect } from "react";
import qrcode from "qrcode";
import ContenedorBlanco from "../../../ComponentesDiseños/ContenedorBlanco";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ImagenAfiche from "./ImagenAfiche";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import toast from "react-hot-toast";

export default function Afiches() {
  const componenteRef=useRef(null)
  const { perfilCuenta } = useOutletContext();
  const [imagen, setImagen] = useState(null);
  const formatoQR = {
    color: { light: "#ffffeeff", dark: "#00001Eff" },
    errorCorrectionLevel: "H",
    type: "image/png",
    margin: "3",
    quality: 0.5,
    scale: 4,
  };

  const [qrCode, setQrCode] = useState(null);
  useEffect(() => {
    qrcode
      .toDataURL(
        `https://carta-online-kappa.vercel.app/${perfilCuenta?.perfilUser?.businessName}`,
        formatoQR
      )
      .then((url) => setQrCode(url))
      .catch((err) => console.log(err));

    const imagenesArray = () => {
      setImagen(perfilCuenta?.images);
    };
    imagenesArray();
  }, []);

  const handlePrinter = useReactToPrint({
    content:()=>componenteRef.current,
    documentTitle:'emp-data',
    pageStyle:'print',
    onAfterPrint:()=>alert('ok')
  });

  const handleDownloadPDF = () => {
   
  };



return(
    <ContenedorBlanco>
      <ImagenAfiche
      ref={componenteRef}
      imagen={imagen}
      perfilCuenta={perfilCuenta}
      qrCode={qrCode}
      />
      <div className="my-10 mx-auto w-full flex justify-around items-center">
        
        <ReactToPrint
        trigger={()=><button>impirmir macho</button>}
        content={()=>componenteRef.current}
        pageStyle='print'
        onAfterPrint={()=>{console.log('impreso pa')}}
        />
        <button onClick={handlePrinter} className="uppercase font-medium text-xs w-full md:w-1/4 border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >Imprimir</button>
        <button onClick={handleDownloadPDF} className="uppercase font-medium text-xs w-full border md:w-1/4 text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >Descargar</button>
      </div>
    </ContenedorBlanco>
  );

}