import { useEffect } from "react";
import qrcode from "qrcode";
import ContenedorBlanco from "../../../ComponentesDiseños/ContenedorBlanco";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ImagenAfiche from "./ImagenAfiche";

export default function Afiches() {
  const { perfilCuenta } = useOutletContext();
  const [imagen, setImagen] = useState(null);
  const formatoQR = {
    color: { light: "#ffffeeff", dark: "#D9501Eff" },
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

  const handlePrinter = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const printWindow = window.open("", "", "height=800,width=800");
    printWindow.document.write("<html><head><title>Html to PDF</title>");
    printWindow.document.write("</head><body >");
    printWindow.document.write("text");
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <ContenedorBlanco>
      <ImagenAfiche
      imagen={imagen}
      perfilCuenta={perfilCuenta}
      qrCode={qrCode}
      />
      <div>
        <button onClick={handlePrinter}>Imprimir</button>
        <button onClick={handleDownloadPDF}>Descargar</button>
      </div>
    </ContenedorBlanco>
  );
}
