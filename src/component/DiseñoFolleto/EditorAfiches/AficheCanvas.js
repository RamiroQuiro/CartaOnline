import React,{useState,useEffect} from 'react'
import { useOutletContext } from 'react-router-dom';
import qrcode from "qrcode";
import Canvas from './Canvas'

export default function AficheCanvas({}) {

    const [imagen, setImagen] = useState(null);
    const { perfilCuenta } = useOutletContext();
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

  return (
    <div className='w-full'>

    <Canvas
imagen={imagen?.find((img) => img?.posicion == "imagen1")?.url}

    />
    <button onClick={()=>{
        window.print()
    }} className="uppercase font-medium text-xs w-full md:w-1/4 border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
        >Imprimir</button>
    </div>
  )
}
