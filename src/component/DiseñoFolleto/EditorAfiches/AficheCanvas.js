import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import qrcode from "qrcode";
import Canvas from "./Canvas";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function AficheCanvas({}) {
  const [imagen, setImagen] = useState(null);
  const [printer, setPrinter] = useState(false)
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

const imprimirCanvas=()=>{

var can =document.getElementById('myCanvas')
console.log(can)
var ctx=can.getContext("2d")
var imagen=can.toDataURL();
console.log(imagen)
var link=document.createElement('a')
link.href=imagen;
link.download="lklkjl.png"
link.click()


  // setPrinter(true)
// console.log(printer)
}
const handleDownloadPDF = () => {
  const input = document.getElementById('myCanvas')
  html2canvas(input, { logging: true, useCORS: true }).then((canvas) => {
    const imgWidth = 14.3;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL();
    const pdf = new jsPDF("portrait", "cm", "a5");
    pdf.addImage(imgData, "JPG", 0, 0, imgWidth, imgHeight);
    pdf.save("qrCarta-Online.pdf");
  });
};
  return (
    <div className="w-full">
      <Canvas
      printer={printer}
      setPrinter={setPrinter}
      id="myCanvas"
      businessName={perfilCuenta?.perfilUser?.businessName}
        width={"720"}
        qrCode={qrCode}
        height="960"
        className=" relative   flex flex-col items-center justify-between mx-auto  overflow-hidden"
        logo={imagen?.find((img) => img?.posicion == "logo")?.url}
      />
      <button
      onClick={imprimirCanvas}
        className="uppercase font-medium text-xs w-full md:w-1/4 border text-white bg-blue-400 rounded hover:bg-white hover:border-blue-400 duration-500 hover:text-blue-400 px-3 py-2"
      >
        Imprimir
      </button>
    </div>
  );
}
