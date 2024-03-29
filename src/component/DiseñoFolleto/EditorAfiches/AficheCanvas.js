import React, { useState, useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import qrcode from "qrcode";
import Canvas from "./Canvas";
import html2canvas from "html2canvas";
import log from "../../../img/Logo.png";
import jsPDF from "jspdf";

export default function AficheCanvas({}) {
  const [imagen, setImagen] = useState(null);
  const [imagenCanvas, setImagenCanvas] = useState(false);
  const canvasRef = useRef(null);
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext("2d");
  const { perfilCuenta } = useOutletContext();
  const formatoQR = {
    color: { light: "#ffffeeff", dark: "#00001Eff" },
    errorCorrectionLevel: "H",
    type: "image/png",
    margin: "3",
    quality: 1,
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
  console.log(imagen)

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "qrCarta-Online.jpg";
    link.href = canvas.toDataURL();
    link.click();
  };
  const handleDownloadPDF = () => {
    const input = document.getElementById("myCanvas");
    html2canvas(input, { logging: true, useCORS: true }).then((canvas) => {
      const imgWidth = 14.3;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL();
      const pdf = new jsPDF("portrait", "cm", "a5");
      pdf.addImage(imgData, "JPG", 0, 0, imgWidth, imgHeight);
      pdf.save("qrCarta-Online.pdf");
    });
  };

const selectImagen=(e)=>{
  setImagenCanvas(e)
}

  return (
    <div className="w-full flex items-stretch justify-around">
      <article className="h-full w-1/12 bg-gray-500 flex flex-col gap-5 p-3 rounded-lg">
        {
          imagen?.map((e,i)=>(
          <img src={e.url} alt={e.posicion} key={i} className="cursor-pointer" onClick={()=>selectImagen(e.url)}/>
          ))
        }
   
      </article>
      <div className="mx-auto"><Canvas
        businessName={perfilCuenta?.perfilUser?.businessName}
        width={"720"}
        qrCode={qrCode}
        height="960"
        className=" relative   flex flex-col items-center justify-between mx-auto  overflow-hidden"
        logo={imagenCanvas}
        // logo={imagen?.find((img) => img?.posicion == "logo")?.url}
        canvas={canvas}
        canvasRef={canvasRef}
        ctx={ctx}
      />
      <div className="mx-auto w-full my-8 flex items-center justify-around">
      <button
        onClick={downloadImage}
        className="uppercase font-medium text-xs w-full md:w-1/4 border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
      >
        download
      </button>
      <button
        onClick={handleDownloadPDF}
        className="uppercase font-medium text-xs w-full md:w-1/4 border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
      >
        downloadPDF
      </button>
      </div>
      </div>
    </div>
  );
}
