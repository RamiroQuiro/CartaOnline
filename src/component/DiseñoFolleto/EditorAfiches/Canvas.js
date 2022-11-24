import { useRef, useEffect } from "react";

export default function Canvas({ imagen, props }) {
  const canvasRef = useRef(null);
  const img = new Image();


  useEffect(() => {
    img.src = imagen;

   console.log(img)

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");


      context.drawImage(img, 0, 0);
   
  }, []);

  return <canvas ref={canvasRef} {...props} />;
}
