import {  useEffect, useState } from "react";

export default function Canvas({
  logo,
  width,
  height,
  className,
  qrCode,
  businessName, canvasRef,  canvas,
  ctx,
}) {
  const [isDrawing, setIsDrawing] = useState(false);
  // const [prevPoint, setPrevPoint] = useState(null);
  // const [snapshot, setSnapshot] = useState(false);


  useEffect(() => {
    if (!canvas) return;
    if (!isDrawing) return;
  }, [canvas,isDrawing]);


  useEffect(() => {
  
    return () => {
      
    }
  }, [])
  
  // funcion para marcar las coordenadas dentro del lienzo
  const computePointInCanvas = (clientX, clientY) => {
    if (canvasRef.current) {
      const boundigRect = canvasRef.current.getBoundingClientRect();

      return {
        x: clientX - boundigRect.left,
        y: clientY - boundigRect.top,
      };
    } else {
    }
  };

  const draw = (e) => {};


// pintarLienzo(ctx,width,height)

function roundedRect(ctx,x,y,width,height,radius,lineWidth,colorLinea){
  if(!ctx)return
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.strokeStyle = colorLinea;
  ctx.fillStyle="#FFFFEE"
  ctx.lineWidth =lineWidth;
  ctx.fill()
  ctx.stroke();
}

roundedRect(ctx,0,0,width,height,50, 5,'#D9501E')


//instera las imagenes - Logo y el QR
  const instearImg = (ctx, imagen, size) => {
    var img = new Image();
    // img.crossOrigin="anonymous"
    img.src = imagen;
    let widthImg = size;
    let heighthImg = size;
    img.onload = function () {
      ctx.drawImage(img, (720 - widthImg) / 2, 15, widthImg, heighthImg);
    };
  };
  const instearQR = (ctx, imagen, width,height) => {
    if(!ctx)return
    let img = new Image();
    img.crossOrigin="anonymous"
    img.src = imagen;
    let widthImg = width;
    let heighthImg = height;
    img.onload = function () {
      ctx.drawImage(
        img,
        (720 - widthImg) / 2,
        (960 - heighthImg) - heighthImg/4,
        widthImg,
        heighthImg
      );
    };
    roundedRect(ctx,(720 - widthImg) / 2,(960 - heighthImg)  - heighthImg/4,widthImg+2,heighthImg+2,80,)
  };

  instearQR(ctx, qrCode, 500,500);
  instearImg(ctx, logo, 150,150);


//coloacar texto

const colocarTexto=(ctx,text,sizeText, x, y)=>{
  if(!ctx)return
  ctx.beginPath() //iniciar ruta
  // ctx.strokeStyle="blue"; //color externo
  ctx.fillStyle="#00001E"; //color de relleno
  ctx.font=`bold ${sizeText}px roboto`; //estilo de texto
  ctx.textAlign="center"
  // ctx.textBaseline ="bottom"
  // ctx.strokeText(text,10,30); //texto con método stroke
  ctx.fillText(text,x,y); //texto con método fill

  // ctx.strokeText(text,10,140); //texto con los dos métodos
  // ctx.fillText(text,10,140);
}
colocarTexto(ctx,businessName,70,720/2,250)
colocarTexto(ctx,"Scanea para ver nuestros productos",30,720/2,900)



  const startDarwing = (e) => {
    setIsDrawing(true);
    //   const prevPointer = computePointInCanvas(e.clientX, e.clientY);
    //   setPrevPoint(prevPointer);
    //   ctx.beginPath();
    //   const snap = ctx.getImageData(0, 0, width, height);
    //   setSnapshot(snap);
    // };
    // const stopDrawing = () => {
    //   setIsDrawing(false);
  };
  function stopDrawing() {
    setIsDrawing(false);
  }
  return (
    <canvas
    // onMouseMove={draw}
    // onMouseDown={startDarwing}
    // onMouseUp={stopDrawing}
    className={className}
    ref={canvasRef}
    height={height}
    width={width}
    
    />
  );
}
